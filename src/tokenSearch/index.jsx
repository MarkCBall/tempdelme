import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchTokenPairs,
  stopSelecting,
} from '../redux/tokenSearchSlice';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
export const TokenSearch = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => {
    return state?.isLoading
  });
  const isSelecting = useSelector(
    (state) => state?.isSelecting
  );
  const searchRef = useRef();

  useEffect(() => {
    dispatch(searchTokenPairs(''));
  }, [dispatch]);

  useEffect(() => {
    window.onclick = (e) => {
      if (!searchRef?.current?.contains(e.target)) {
        dispatch(stopSelecting());
      }
    };
  }, [dispatch]);

  return (
    <div ref={searchRef}>
      <SearchInput />
      {isSelecting && <SearchResult loading={isLoading} />}
    </div>
  );
};

export default TokenSearch;
