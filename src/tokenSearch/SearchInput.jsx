import React, { useEffect, useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { searchTokenPairs, startSelecting, setSearchText } from '../redux/tokenSearchSlice';
import SearchIcon from './SearchIcon';
import debounce from 'lodash.debounce';
import TokenSearchContext from '../Context/TokenSearch';

const StyledInput = styled.input`
  background-color: inherit;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  ${({props}) => `
    width: ${ props?.styles?.width || "-webkit-fill-available" };
    height: ${ props?.styles?.height || "auto" };
    border: ${ props?.styles?.border || "none" };   
    color: ${ props?.styles?.color || "#7A808A" };
    display: ${ props?.styles?.display || "block" };   
    border-color: ${ props?.styles?.borderColor || "#474F5C" };  
    border-style: ${ props?.styles?.borderStyle || "none" };  
    border-width: ${ props?.styles?.borderWidth || "0" };  
    border-radius: ${ props?.styles?.borderRadius || "4px" };  
    background: ${ props?.styles?.background || "#00070E" };   
    padding: ${ props?.styles?.padding || "10px 14px" };    
    font-size: ${ props?.styles?.fontSize || "8px" };      
    font-family: ${ props?.styles?.fontFamily || "'Fira Code', monospace" };
  `}  
`;

const StyledSearchIconWrapper = styled.div`  
  cursor: pointer;
  float: right;
  position: absolute;
  ${({props}) => `
    right: ${ props?.styles?.right || "14px" };      
    top: ${ props?.styles?.top || "6px" };        
  `}    
`;

const StyledWrapper = styled.div`
  position: relative;
`;

const SearchInput = () => {
  const dispatch = useDispatch();
  const renderProps = useContext(TokenSearchContext);  
  const { customSearchInput } = renderProps;
 
  const { searchText, networkMap, exchangeMap } = useSelector((state) => state); 
  
  // Updates the datasets of the results. 
  useEffect(() => {
    // Ensure that the search text fulfills the minimum lenght requirement.
    if (searchText.length >= process.env.REACT_APP_SEARCH_INPUT_LENGTH_MINIMUM) {
      dispatch(searchTokenPairs(searchText));
    }
  }, [dispatch, networkMap, exchangeMap, searchText]); 
  

  const onChangeFilter = (event) => {    
    const value = event.target.value    
    dispatch(setSearchText(value))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeHandler = useCallback( debounce(onChangeFilter, 350), [searchText])
  
  const placeholder = customSearchInput?.placeholder ?  customSearchInput?.placeholder : 'Search pair by symbol, name, contract or token'

  const activeColor = customSearchInput?.styles?.search?.activeColor ? customSearchInput?.styles?.search?.activeColor : '#FF0000'
  const color  = customSearchInput?.styles?.search?.color ? customSearchInput?.styles?.search?.color : '#7A808A'
  const height = customSearchInput?.styles?.search?.height ? customSearchInput?.styles?.search?.height : 14
  const width = customSearchInput?.styles?.search?.width ? customSearchInput?.styles?.search?.width : 14
 
  // RENDERING.
  return (
    <StyledWrapper onClick={() => dispatch(startSelecting())}>
      <StyledInput 
        placeholder={placeholder}
        autocomplete={'off'}
        onChange={debounceChangeHandler}
        styles={customSearchInput?.styles?.input}
      />
      <StyledSearchIconWrapper styles={customSearchInput?.styles?.search}>       
        <SearchIcon
            activeColor={activeColor}
            color={color}
            height={height}
            width={width}
          />          
        </StyledSearchIconWrapper>
    </StyledWrapper>
  );
};
export default SearchInput;
