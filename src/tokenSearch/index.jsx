import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'styled-components/macro'
import { stopSelecting } from '../redux/tokenSearchSlice';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import SearchFilters from "./SearchFilters";
import TokenSearchContext from '../Context/TokenSearch'

export const TokenSearch = (renderProps) => {
  
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
      <div ref={searchRef}>
        <SearchInput />
        <SearchFilters />      
        {isSelecting && <SearchResult loading={isLoading} />}
      </div>
    </TokenSearchContext.Provider>
  );
};

export default TokenSearch;
