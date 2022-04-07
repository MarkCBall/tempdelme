import React from 'react';
import 'twin.macro';
import 'styled-components/macro'

import { useSelector } from 'react-redux';
import TokenPairDetail from './TokenPairDetail';

const SearchResult = (props) => {
  const {suggestions, searchText} = useSelector(
    (state) => state
  );
  const filteredSuggestions = suggestions
    .slice()
    .sort((pair1, pair2) => pair2.volumeUSD - pair1.volumeUSD);

  if (props.loading) {
    return <div tw="relative flex bg-white justify-center items-center">Loading...</div>;
  }

  if (!!searchText && !filteredSuggestions.length) {
    return <div tw="relative flex bg-white justify-center items-center">No pairs found...</div>;
  }   

  return (    
    <div tw="h-60 overflow-y-auto pl-4 border-solid">    
      {
        filteredSuggestions.map((suggestions, index) => 
        <TokenPairDetail
          suggestions={filteredSuggestions}
          index={index}
        />
        )
      }  
    </div>        
  );
};
export default SearchResult;
