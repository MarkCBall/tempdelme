import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useLocation } from 'react-router-dom';

import {
  fetchAndSetTokenPair,
  searchTokenPairs,
  stopSelecting,
} from '../../redux/tokenSearch/tokenSearchSlice';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export const TokenSearch = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state?.velox?.tokenSearch.isLoading);
  // const isSelecting = useSelector(
  //   (state) => state?.velox?.tokenSearch.isSelecting
  // );

  const [ isSelecting, setIsSelecting ] = useState()
  const searchRef = useRef();

  useEffect(() => {
    dispatch(searchTokenPairs(''));
  }, [dispatch]);


  useEffect(() => {
    window.onclick = (e) => {
      if (!searchRef?.current?.contains(e.target)) {
        // dispatch(stopSelecting());
        setIsSelecting(undefined)
      }
    };
  }, [dispatch]);

  // return <input className={"no-outline"} id={"pair-field"} placeholder={"Search"}/>

  return (
    <div ref={searchRef}>
      <SearchInput />
      {isSelecting && <SearchResult loading={isLoading} />}
    </div>
  );
};

export default TokenSearch;
