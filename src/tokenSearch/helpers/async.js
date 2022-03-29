import BN from 'bignumber.js';
import { stringify } from 'flatted';
import { gql } from 'graphql-request';
import { romePairsClient } from './graphqlClients';
import { networkExchangePairs } from './config';

const getRomeSearchTokenQuery = (blockchain, exchange) => {
  console.log(typeof (exchange));
  return gql`
  query SearchTokens($exchange: String!, $searchText: String!) {
    pair_search: ${blockchain}_pair_search(where: {concat_ws: {_ilike: $searchText}, exchange: {_ilike: $exchange}}, limit: 500, order_by: { last_24hour_usd_volume: desc_nulls_last }) {
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
  console.log("search tokens params:", searchString, selectedExchange)

  // We have to clean the exchange list, there seems to be artefact left when we unselect.
  // console.log(selectedExchange.exchange.filter(exchange=> selectedExchange.blockchain.filter(blockchain=>  networkExchangePairs[blockchain])));

  const searchText = searchString ? `%${searchString}%` : '%0x%'; //empty string turns to 0x which is found by every pair
  const parameters = {
    exchange: selectedExchange.exchange[0],
    searchText,
  };
  const blockchain = selectedExchange.blockchain[0].toLowerCase();
  const exchange = selectedExchange.exchange[0].toLowerCase();
  console.log(blockchain, exchange)
  const query = getRomeSearchTokenQuery(blockchain, exchange);


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
