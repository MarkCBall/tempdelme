import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchTokenPairs,
  stopSelecting,
} from '../redux/tokenSearchSlice';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";

import NetworkFilter from "./NetworkFilter.jsx";

export const TokenSearch = () => {
  const dispatch = useDispatch();
  const { isSelecting, searchText, isLoading } = useSelector(
    (state) => state
  );
  const searchRef = useRef();

  useEffect(() => {
    window.onmousedown = (e) => {
      if (!searchRef?.current?.contains(e.target)) {
        dispatch(stopSelecting());
      }
    };
  }, [dispatch]);

  return (
    <div ref={searchRef}>
      <SearchInput />
      <NetworkFilter /> 
     
      {isSelecting && <SearchResult loading={isLoading} />}
    </div>
  );
};

export default TokenSearch;
