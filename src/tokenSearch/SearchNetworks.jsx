import React from "react"
import { uniq } from "lodash"
import { networkExchangePairs } from "./helpers/config";
import { SearchNetworkSelector } from "./SearchNetworksSelector";
import { SearchNetworksAll } from "./SearchNetworksAll";
import styled from 'styled-components';


const NetworkList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  padding:3px;
`;

export const SearchNetworks = () => {
  return (
    <>      
      <NetworkList>
        <SearchNetworksAll key={'All'} />
        {
          uniq(networkExchangePairs
            .map(pair => pair[0]))
            .map(networkName => {
              return <SearchNetworkSelector key={networkName} networkName={networkName} />
            })
        }
      </NetworkList>
    </>
  );
}
export default SearchNetworks