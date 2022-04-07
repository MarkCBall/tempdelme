import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { searchTokenPairs, startSelecting, toggleSelecting, setSearchText, setSearchToken, setSearchTextValid, startDebounce, stopDebounce } from '../redux/tokenSearchSlice';
import magnifyingGlass from './icon-search.svg';


const PairField = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  border-color: #067c82;
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;
  background: #08333c;
  padding: 11px 15px;
  font-size: 15px;
  color: #ffffff;
  font-family: 'Fira Code', monospace;

  @media only screen and (max-width: 990px) {
    width: 100%;
  }

  @media only screen and (max-width: 769px) {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  border: none;
  background-color: inherit;
  color: #ffffff;
  //width: auto;
`;

const HideOnSmallScreen = styled.img`
  width: 30px;
  cursor: pointer;
  float: right;
  position: absolute;
  right: 22px;
  top: 9px;
  @media only screen and (max-width: 990px) {
    display: none;
  }
`;


const SearchInput = ({ inputLengthMinimum, debounceDelay }) => {
  const dispatch = useDispatch();
  const { searchText, networkMap, exchangeMap, searchDebounce, searchToken } = useSelector((state) => state);


  // Function that validates if the user is searching for a token and changes the search string accordingly.
  // We are also adding a value to say if the token search was enabled or not, that way if the user removes characters from the string outside of the threshold,
  // we will revert to a non-token search.
  //
  // IMPORTANT: If the user is searching for a string, that is NOT a token but validates as one, the search WILL only be looking for a token.
  //
  const searchTokenValidation = input => {
    // We want to tell the user whats going on by updating the value on the UI.
    // The user has to know that we will be looking only for tokens that start with the said string now.
    let value = input.value;
    let valueTokenLead = value.substr(0, 2).toLowerCase() === '0x';
    let valueTokenLike = new RegExp(/^[0-9a-f]+$/i).test(value.substr(valueTokenLead ? 2 : 0));


    // Checks that 'valueTokenLead' is false and that the value is token like.
    if (!valueTokenLead && valueTokenLike && value.length >= 5) {
      // Add the leading '0x' to the value.
      value = '0x' + value;

      // User is looking for a token.
      dispatch(setSearchToken(true));
    }
    else
      // Checks if the search is looking for a token.
      if (searchToken)
        // Checks that the value lead is token like.
        if (valueTokenLead) {
          // Checks if the user has deleted characters from the search threshold for token detection.
          // We are looking for a lenght smaller than 7, since we have to take into account the leading '0x'.
          if (value.length < 7) {
            // Removes the leading '0x' from the value.
            value = value.substr(2);

            // User is NOT looking for a token.
            dispatch(setSearchToken(false));
          }
          else
            // We are checking if the value is token like; since the user may have added non-hex characters to the search string.
            if (!valueTokenLike) {
              // Removes the leading '0x' from the value.
              value = value.substr(2);

              // User is NOT looking for a token.
              dispatch(setSearchToken(false));
            }
        }
        // This should not happen.
        // Something went wrong, not sure how this case can happen, but we are turning off the token search.
        else
          // User is NOT looking for a token.
          dispatch(setSearchToken(false));

    // We update the input value.
    input.value = value;


    // Returning.
    return value;
  };


  // Updates the datasets of the results.
  useEffect(
    () => {
      dispatch(startDebounce(
        setTimeout(
          () => {
            // Ensure that the search text fulfills the minimum lenght requirement.
            if (searchText.length < inputLengthMinimum) return dispatch(setSearchTextValid(false));

            dispatch(setSearchTextValid(true));
            dispatch(searchTokenPairs(searchText));
          },
          debounceDelay
        )
      ));
    }, [dispatch, searchText, networkMap, exchangeMap, inputLengthMinimum, searchDebounce, debounceDelay]
  );


  // RENDERING.
  return (
    <PairField onClick={() => dispatch(startSelecting())}>
      <StyledInput
        placeholder={'Select a token pair'}
        autocomplete={'off'}
        onChange={e => {
          dispatch(startDebounce());
          dispatch(setSearchText(searchTokenValidation(e.target)));
        }}
      />
      <HideOnSmallScreen
        alt={''}
        src={magnifyingGlass}
        onClick={() => dispatch(toggleSelecting())}
      />
    </PairField>
  );
};
export default SearchInput;