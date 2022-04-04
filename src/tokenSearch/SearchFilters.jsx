import React from "react"
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { FilterNetworkAll, FilterNetworkSelectors } from "./SearchFiltersNetworkSelectors";
import { FilterExchangeAll, FilterExchangeSelectors } from "./SearchFiltersExchangeSelectors";


const ContainerNetworkList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  padding:3px;
`;

const ContainerExchangeList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  padding:3px;
`;

export const SearchFilters = () => {
  const { isSelecting } = useSelector((state) => state);
  const { networkMap } = useSelector((state) => state);


  // RENDERING.
  return (
    <>
      <ContainerNetworkList >
        <FilterNetworkAll />
        <FilterNetworkSelectors />
      </ContainerNetworkList>
      {
        // Maths out if the "All" network is inactive to display the exchange filters.
        //  Counts the number of networks set to true.
        //  'Counts' if the "All" network is active.
        //  Protects against "undefined" values for the "All" network property.
        Object
          .values(networkMap)
          .filter(b => b).length !== 0 && (() => {
            return (
              <ContainerExchangeList>
                <FilterExchangeAll />
                <FilterExchangeSelectors />
              </ContainerExchangeList>
            );
          })()
      }
    </>
  );
}
export default SearchFilters