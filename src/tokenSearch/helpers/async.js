import BN from 'bignumber.js';
import { stringify } from 'flatted';
import { gql } from 'graphql-request';
import { romePairsClient } from './graphqlClients';

const getRomeSearchTokenQuery = (blockchain) => {
  return gql`
  query SearchTokens($searchText: String!, $exchanges: [String!]!) {
    pair_search: ${blockchain}_pair_search(where: {concat_ws: {_ilike: $searchText}, exchange: {_in:$exchanges}}, limit: 5, order_by: { last_24hour_usd_volume: desc_nulls_last }) {
    id: pair_address
      token0 {
        address
        symbol
        name
        decimals
        id: address
        image: primary_img_uri
      }
      token1 {
        address
        symbol
        name
        decimals
        id: address
        image: primary_img_uri
      }
      last_24hour_usd_volume
      latest_token0_usd_price
      latest_token1_usd_price
    }
}
`;
};

//todo remove this layer
export const searchTokensAsync = async (
  searchString,
  selectedExchange,
  config = { nilVolumeOkay: false }
) => {
  const searchText = searchString ? `%${searchString}%` : '%0x%'; //empty string turns to 0x which is found by every pair
  const parameters = {
    exchanges: [selectedExchange.exchange],//todo accept more exchanges
    searchText,
  };
  const blockchain = selectedExchange.blockchain.toLowerCase();
  const query = getRomeSearchTokenQuery(blockchain);

  console.log("search tokens params:", searchString, selectedExchange)

  let res;
  try {
    res = await romePairsClient.request(query, parameters);
  } catch (e) {
    throw new Error(
      `${stringify(e, Object.getOwnPropertyNames(e))}, args:${stringify({
        parameters,
        query,
      })}`
    );
  }
  const { pair_search } = res;

  const mappedPairs = pair_search
    .filter((pair) => {
      return (
        pair.token0 &&
        pair.token1
      );
    })
    .map((pair) => {
      const tokenPrices =
        pair.latest_token0_usd_price && pair.latest_token1_usd_price
          ? {
            token0Price: new BN(pair.latest_token1_usd_price)
              .dividedBy(pair.latest_token0_usd_price)
              .toString(),
            token1Price: new BN(pair.latest_token0_usd_price)
              .dividedBy(pair.latest_token1_usd_price)
              .toString(),
          }
          : {
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
}
