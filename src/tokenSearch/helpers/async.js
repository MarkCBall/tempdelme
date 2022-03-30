import BN from 'bignumber.js';
import { stringify } from 'flatted';
import { gql } from 'graphql-request';
import { romePairsClient } from './graphqlClients';


const getRomeSearchTokenQuery = networks => {
  let networkIterations = networks.length,
    networkDatasetLength = Math.round(process.env.REACT_APP_SEARCH_ASYNC_DATASET_LENGTH_MAXIMUM / networkIterations),
    pair_search = ``;

  // Looping through all networks.
  // Please, take note that the exchanges will be included not taking into account their availability to the specified network as it causes not error.
  while (networkIterations > 0) {
    pair_search += `
      pair_search_${networkIterations}:
        ${networks[networkIterations - 1]}_pair_search(
          where:{
            concat_ws:{_ilike:$searchText}, 
            exchange:{_in:$exchanges}
          }, 
          limit:${networkDatasetLength}, 
          order_by:{ last_24hour_usd_volume:desc_nulls_last }
        ) 
        {
          id:pair_address
          exchange
          token0 {
            address
            symbol
            name
            decimals
            id:address
            image:primary_img_uri
          }
          token1 {
            address
            symbol
            name
            decimals
            id:address
            image:primary_img_uri
          }
          last_24hour_usd_volume
          latest_token0_usd_price
          latest_token1_usd_price
        }`;

    // Decrementing the current network iteration.
    networkIterations--;
  }

  return gql`query SearchTokens($searchText:String!,$exchanges:[String!]!){${pair_search}}`;
};

// Function that prepares the parameters of the GraphQL query.
// It's not doing much at the moment, but if needs to be expanded, at least it will keep the code cleaner.
const searchTokenAsync_Parameters = (searchText, searchExchanges) => {
  return {
    exchanges: [...searchExchanges],
    searchText,
  };
};

// Function that prepares de search text for the GraphQL query.
// Again, for code cleaness and possible expansion.
const searchTokenAsync_searchString = searchString => {
  //empty string turns to 0x which is found by every pair.
  return searchString ? `%${searchString}%` : '%0x%';
};

// Function that creates the actual async token.
export const searchTokensAsync = async (searchString, searchNetworks, searchExchanges) => {//, config = { nilVolumeOkay:false }) => {
  let res,
    searchText = searchTokenAsync_searchString(searchString),
    parameters = searchTokenAsync_Parameters(searchText, searchExchanges),
    query = getRomeSearchTokenQuery(searchNetworks);


  try {
    res = await romePairsClient.request(query, parameters);
  }
  catch (e) {
    throw new Error(`${stringify(e, Object.getOwnPropertyNames(e))}, args:${stringify({ parameters, query, })}`);
  }

  const mappedPairs = Object
    .values(res)
    .flat()
    .filter(pair => pair.token0 && pair.token1)
    .map(pair => {
      const tokenPrices =
        pair.latest_token0_usd_price && pair.latest_token1_usd_price ?
          {
            token0Price: new BN(pair.latest_token1_usd_price)
              .dividedBy(pair.latest_token0_usd_price)
              .toString(),
            token1Price: new BN(pair.latest_token0_usd_price)
              .dividedBy(pair.latest_token1_usd_price)
              .toString(),
          } :
          {
            token0Price: 1,
            token1Price: 1,
          };

      return {
        ...pair,
        volumeUSD: pair.last_24hour_usd_volume,
        ...tokenPrices,
      };
    });

  return mappedPairs;
};