import React, { useContext } from "react"
import styled from  'styled-components'
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
  ${({props}) => `    
    background-color: ${ props?.styles?.backgroundColor || "#00070E" };
    border-radius: ${ props?.styles?.borderRadius || "4px" };
    `
  }
  

  .accordion__button {
    position: relative;
  }

  .accordion__button:first-child:after {
    display: block;    
    content: '';
    position: absolute;
    
    transform: rotate(-45deg);

    ${({props}) => `    
      color: ${ props?.styles?.toggleHeight || "#B4BBC7" };
      height: ${ props?.styles?.toggleHeight || "7px" };
      width: ${ props?.styles?.toggleWidth || "7px" };
      margin-right: ${ props?.styles?.toggleMarginRight || "0" };    
      left: ${ props?.styles?.toggleLeft || "50%" };    
      top: ${ props?.styles?.toggleTop || "5px" };    
      border-bottom: ${ props?.styles?.toggleBorderBottom || "2px solid currentColor" }; 
      border-right: ${ props?.styles?.toggleBorderRight || "2px solid currentColor" }; 
      transform: rotate(45deg);
    `}
  }

  .accordion__button[aria-expanded='true']:first-child:after,
  .accordion__button[aria-selected='true']:first-child:after {
    transform: rotate(-135deg);
    top: 10px;    
  }

  .accordion__panel {
    ${({props}) => `
      border: ${ props?.styles?.contentBorder || "0" }; 
      border-top-style: ${ props?.styles?.contentBorderTop || "none" }; 
      border-right-style: ${ props?.styles?.contentBorderRight || "none" }; 
      border-bottom-style: ${ props?.styles?.contentBorderBottom || "none" }; 
      border-left-style: ${ props?.styles?.contentBorderLeft || "none" }; 
      border-radius: ${ props?.styles?.borderRadius || "0" }; 
      margin:  ${ props?.styles?.margin || "0" };       
    `}    
  }
`;

const StyledFilterHeader = styled.div`  
  ${({props}) => `
    display: ${ props?.styles?.display || "flex" };
    justify-content: ${ props?.styles?.justifyContent || "space-between" };
    align-items: ${ props?.styles?.alignItems || "center" };
    width: ${ props?.styles?.width || "auto" };
    border: ${ props?.styles?.border || "none" }; 
    background-color: ${ props?.styles?.backgroundColor || "#00070E" }; 
    color: ${ props?.styles?.color || "#B4BBC7" };    
    cursor: pointer;
    padding: ${ props?.styles?.padding || "6px 14px" };   
    text-align: ${ props?.styles?.textAlign || "left" };     
    margin: ${ props?.styles?.margin || "4px 0" };     
    border-radius: ${ props?.styles?.borderRadius || "4px" };     
    font-size: ${ props?.styles?.fontSize || "9px" };     
    font-weight: ${ props?.styles?.fontWeight || "500" };     
    &:hover {
      background-color: ${ props?.styles?.hoverColor || "#474F5C" };
    }
  `}      
`; 

const StyledFilterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5px;
  margin-left: 10px;

  ${({props}) => `
    justify-content: ${ props?.styles?.justifyContent || "start" };
    align-items: ${ props?.styles?.alignItems || "center" };  
    padding:  ${ props?.styles?.padding || "0 0 5px" };           
  `}      
`;

const StyledDescription = styled.div`
  ${({props}) => `
    text-align: ${ props?.styles?.textAlign || "right" };
    font-size: ${ props?.styles?.fontSize || "9px" };
    font-weight: ${ props?.styles?.fontWeight || "100" };
    padding: ${ props?.styles?.padding || "10px 10px 5px" };       
    background-color: ${ props?.styles?.backgroundColor || "#00070E" };
    color: ${ props?.styles?.color || "#7A808A" };       
  `}
`

const StyledFilterWrapper = styled.div`
  display: block;
  ${({props}) => `
    justify-content: ${ props?.styles?.justifyContent || "center" };
    align-items: ${ props?.styles?.alignItems || "center" };  
    padding:  ${ props?.styles?.padding || "0 0 5px" };       
    background-color: ${ props?.styles?.backgroundColor || "#00070E" };    
    border-radius: ${ props?.styles?.borderRadius || "4px" };    
  `}      
`
const StyledCount = styled.div`
  color: white;
  font-weight: 400;  
`
const SearchDescription = (props) => {  
  const { networkCount, exchangeCount, type } = props;
  let desc;

  if (networkCount === 0 && exchangeCount === 0) {
    desc = 'Searching all networks and exchanges'
  } else {
    if (type === 'network')
      desc = <div style={{display: 'flex', justifyContent: 'right'}}>Searching&nbsp;<StyledCount>{networkCount} network(s)</StyledCount>&nbsp;within&nbsp;<StyledCount>{exchangeCount} exchange(s)</StyledCount></div>
    else      
      desc = <div style={{display: 'flex', justifyContent: 'right'}}>Searching&nbsp;<StyledCount>{exchangeCount} exchange(s)</StyledCount>&nbsp;within&nbsp;<StyledCount>{networkCount} network(s)</StyledCount></div>
  }

  return (
    <>
      {desc}
    </>   
  )
}

export const SearchFilters = () => {
  const renderProps = useContext(TokenSearchContext);  
  const { customSearchFilter } = renderProps;

  const { networkMap, exchangeMap } = useSelector((state) => state);
  const exchangesActive = Object.values(networkMap).filter(b => b).length !== 0;
  
  const networkCount = Object.values(networkMap).filter(b=>b).length
  const exchangeCount = Object.values(exchangeMap).filter(b=>b).length
  
  const networkTitle = customSearchFilter?.network?.title || 'Select Network(s)'
  const exchangeTitle = customSearchFilter?.exchange?.title || 'Select Exchange(s)'
  // RENDERING.
  return (
    <FilterWrapper styles={customSearchFilter?.styles.wrapper}>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <StyledFilterHeader styles={customSearchFilter?.styles?.network?.header}>
                <span>{networkTitle}</span>
                <FilterNetworkAll />
              </StyledFilterHeader>            
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>            
            <StyledFilterWrapper styles={customSearchFilter?.styles?.network?.wrapper}>
              <StyledFilterContent styles={customSearchFilter?.styles?.network?.content}>                                         
                <FilterNetworkSelectors />              
              </StyledFilterContent>                                        
              <StyledDescription>
                <SearchDescription 
                  networkCount={networkCount}
                  exchangeCount={exchangeCount}
                  type={'network'}
                />
              </StyledDescription>              
            </StyledFilterWrapper>
          </AccordionItemPanel> 
        </AccordionItem>
      </Accordion>
      {exchangesActive && 
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <StyledFilterHeader styles={customSearchFilter?.styles.exchange?.header}>
                  <span>{exchangeTitle}</span>
                  <FilterExchangeAll />
                </StyledFilterHeader>            
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>            
              <StyledFilterWrapper styles={customSearchFilter?.styles?.exchange?.wrapper}>
                <StyledFilterContent styles={customSearchFilter?.styles?.exchange?.content}>                                         
                  <FilterExchangeSelectors />
                </StyledFilterContent>                                        
                <StyledDescription>
                  <SearchDescription 
                    networkCount={networkCount}
                    exchangeCount={exchangeCount}
                    type={'exchange'}
                  />
                </StyledDescription>              
              </StyledFilterWrapper>
            </AccordionItemPanel> 
          </AccordionItem>
        </Accordion>
  }
    </FilterWrapper>
  );
}
export default SearchFilters