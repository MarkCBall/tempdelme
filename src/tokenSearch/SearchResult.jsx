import React from 'react';
import { useSelector } from 'react-redux';
import { AutoSizer, List } from 'react-virtualized';
import styled from 'styled-components';

import SearchResultRow from './SearchResultRow';

const NilFoundContainer = styled.div`
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
  position: relative;
  background-color: #1c646c;
  z-index: 100;
  color: rgba(0, 0, 0, 0.87);
  height: 60px;
  text-align: center;
  color: white;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const SearchDropdown = (props) => {
  const { suggestions, searchText, searchTextValid, searchToken } = useSelector(
    (state) => state
  );
  const filteredSuggestions = suggestions
    .slice()
    .sort((pair1, pair2) => pair2.volumeUSD - pair1.volumeUSD);

  let message;
  // Analyzing for a message to the user.
  const messageLoader = () => {
    let message;


    // Checks if the text is a valid length for a search.
    if (!searchTextValid)
      message = 'Search criteria too short...';

    else
      // Is the search loading the data?
      if (props.loading)
        message = 'Loading...';

      else
        // Checks if there is a search text and there are results.
        if (!!searchText && !filteredSuggestions.length)
          // Was the search looking for a token or not?
          message = !searchToken ? 'No pairs found...' : 'No token found...';


    // Returning.
    return message;
  };


  // Displaying message.
  if (message = messageLoader()) return <NilFoundContainer>{message}</NilFoundContainer>;

  // Rendering.
  return (
    <div style={{ display: 'flex', height: '240px', marginTop: '20px' }}>
      <div style={{ flex: '1 1 auto' }}>
        <AutoSizer>
          {({ height, width }) => {
            return (
              <List
                height={height}
                overscanRowCount={3}
                rowCount={filteredSuggestions.length}
                rowHeight={40}
                rowRenderer={(props) => (
                  <SearchResultRow
                    suggestions={filteredSuggestions}
                    {...props}
                  />
                )}
                width={width}
              />
            );
          }}
        </AutoSizer>
      </div>
    </div>
  );
};
export default SearchDropdown;
