import React, { useContext } from "react"
import tw, { css, styled, theme } from 'twin.macro';
import 'styled-components/macro'
import { useSelector } from 'react-redux';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { FilterNetworkAll, FilterNetworkSelectors } from "./SearchFiltersNetworkSelectors";
import { FilterExchangeAll, FilterExchangeSelectors } from "./SearchFiltersExchangeSelectors";
import TokenSearchContext from '../Context/TokenSearch';

const FilterWrapper = styled.div`  
  .accordion__button[aria-expanded='true']::first::after,
  .accordion__button[aria-selected='true']::first::after {
    transform: rotate(45deg);
  }
`

const StyledFilterHeader = styled.div`  
  display: ${ props => props?.styles?.display || "inline" };
  width: ${ props => props?.styles?.width || "auto" };
  border: ${ props => props?.styles?.border || "none" }; 
  background-color: ${ props => props?.styles?.backgroundColor || "#f4f4f4" }; 
  color: ${ props => props?.styles?.color || "#444" };
  display: ${ props => props?.styles?.display || "block" }; 
  cursor: pointer;
  padding: ${ props => props?.styles?.padding || "18px" };   
  text-align: ${ props => props?.styles?.textAlign || "left" };     
  margin: ${ props => props?.styles?.margin || "5px" };     
  
  &:hover {
    background-color: ${ props => props?.styles?.hoverColor || "#ddd" };
  }

  &:after {
    display: block;    
    content: '';
    float: right;
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }
`; 

export const SearchFilters = () => {
  const renderProps = useContext(TokenSearchContext);  
  const { customSearchFilter } = renderProps;

  const { networkMap, exchangeMap } = useSelector((state) => state);
  const exchangesActive = Object.values(networkMap).filter(b => b).length !== 0;
  
  const networkCount = Object.values(networkMap).filter(b=>b).length
  const exchangeCount = Object.values(exchangeMap).filter(b=>b).length
  
  const title = customSearchFilter?.title || 'Filter Networks'
  const description = customSearchFilter?.description(networkCount, exchangeCount) || `Searching {networkCount} networks and {exchangeCount} exchanges`
   
  // RENDERING.
  return (
    <FilterWrapper>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <StyledFilterHeader styles={customSearchFilter?.headerStyles}>
                <b>{title}:</b>  &nbsp; {description}
              </StyledFilterHeader>            
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div tw="flex justify-center items-center m-2">
              <FilterNetworkAll />
              <FilterNetworkSelectors />
            </div>
          </AccordionItemPanel>
          <AccordionItemPanel>          
            <div tw="flex flex-wrap justify-center m-2">
            {
              exchangesActive &&
              <FilterExchangeAll />
            }
            {
              exchangesActive &&
              <FilterExchangeSelectors />
            }    
            </div>      
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </FilterWrapper>
  );
}
export default SearchFilters