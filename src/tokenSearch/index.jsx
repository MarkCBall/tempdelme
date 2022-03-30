import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchTokenPairs,
  stopSelecting,
} from '../redux/tokenSearchSlice';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import SearchNetworks from "./SearchNetworks";
import SearchExchanges from "./SearchExchanges";


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
      {isSelecting && <SearchNetworks />}
      {isSelecting && <SearchExchanges />}
      {isSelecting && <SearchResult loading={isLoading} />}
    </div>
  );
};

export default TokenSearch;
