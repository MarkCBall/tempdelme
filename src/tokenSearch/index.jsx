import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  searchTokenPairs,
  stopSelecting,
} from '../redux/tokenSearchSlice';
import SearchInput from "./SearchInput";
import SearchResult from "./SearchResult";
import SearchFiltering from "./SearchFiltering";
import { networkExchangePairs } from './helpers/config';


export const TokenSearch = () => {
  const dispatch = useDispatch();
  const { isSelecting, searchText, isLoading } = useSelector(
    (state) => state
  );
  const searchRef = useRef();

  // console.log(selectedExchange.exchange.filter(exchange=> selectedExchange.blockchain.filter(blockchain=>  networkExchangePairs[blockchain])));

  useEffect(() => {
    window.onmousedown = (e) => {
      if (!searchRef?.current?.contains(e.target)) {
        dispatch(stopSelecting());
      }
    };
    //todo return remove onclick
    //todo useOnClickOutside might be a better implementation?
  }, [dispatch]);

  return (
    <div ref={searchRef}>
      <SearchInput />
      {isSelecting && //!searchText &&
        <SearchFiltering />
      }
      {isSelecting &&
        <SearchResult loading={isLoading} />
      }
    </div>
  );
};

export default TokenSearch;
