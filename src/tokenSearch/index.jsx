import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { stopSelecting } from '../redux/tokenSearchSlice';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import SearchFilters from "./SearchFilters";
import TokenSearchContext from '../Context/TokenSearch'

const StyledWrapper = styled.div`
  ${({props}) => `
    min-width: 540px;
    overflow-x: auto;
    background-color: ${ props?.styles?.backgroundColor || "#474F5C" };  
    border-color: ${ props?.styles?.borderColor || "#474F5C" };  
    border-style: ${ props?.styles?.borderStyle || "solid" };  
    border-width: ${ props?.styles?.borderWidth || "4px" };  
    border-radius: ${ props?.styles?.borderRadius || "4px" };  
  `}  
`

export const TokenSearch = (renderProps) => {
  const { customWrapper } = renderProps
  const dispatch = useDispatch();
  const { isSelecting, isLoading } = useSelector((state) => state);
  const searchRef = useRef();

  useEffect(() => {
    window.onmousedown = (e) => {
      if (!searchRef?.current?.contains(e.target)) {
        dispatch(stopSelecting());
      }
    };
  }, [dispatch]);

  return (
    <TokenSearchContext.Provider value={renderProps}>
      <StyledWrapper ref={searchRef} styles={customWrapper?.styles}>
        <SearchInput />
        <SearchFilters />      
        {isSelecting && <SearchResult loading={isLoading} />}
      </StyledWrapper>
    </TokenSearchContext.Provider>
  );
};

export default TokenSearch;
