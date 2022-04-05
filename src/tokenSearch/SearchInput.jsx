import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { searchTokenPairs, startSelecting, toggleSelecting, setSearchText, startDebounce, setDebounce } from '../redux/tokenSearchSlice';
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
  const { searchText, networkMap, exchangeMap, searchDebounce } = useSelector((state) => state);


  // Updates the datasets of the results.
  useEffect(
    () => {
      dispatch(setDebounce(setTimeout(
        () => {
          // Ensure that the search text fulfills the minimum lenght requirement.
          if (searchText.length < inputLengthMinimum) return;

          dispatch(searchTokenPairs(searchText));
        },
        debounceDelay - (new Date().getTime() - searchDebounce)
      )));
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
          dispatch(setSearchText(e.target.value));
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

  // const isSelecting = useSelector((state) => state?.isSelecting);
  // const isLoading = useSelector((state) => state.isLoading);
  // const fetchError = useSelector((state) => state?.fetchError);
  // const selectedPair = useSelector((state) => state?.selectedPair);

  // const selectedPairText = selectedPair && combinePairText(selectedPair);

  // const onClick = () => dispatch(startSelecting());
  // const onKeyDown = (e) => e.code === 'Escape' && dispatch(stopSelecting());

  // //todo throw to a global error boundary
  // if (fetchError) {
  //   return (
  //     <PairField>
  //       <StyledInput
  //         autocomplete={'off'}
  //         style={{ color: 'red' }}
  //         value={'Something went wrong..'}
  //         onChange={() => {}}
  //       />
  //     </PairField>
  //   );
  // }

  // let value;
  // if (isSelecting) {
  //   value = searchText;
  // } else {
  //   value = selectedPairText || 'Select a token pair..';
  // }
// const combinePairText = (pair) => {
//   if (pair.token0?.symbol && pair.token1?.symbol && pair.id) {
//     const miniAddress = pair.id.slice(0, 8) + '...' + pair.id.slice(-8);
//     return pair.token0?.symbol + '/' + pair.token1?.symbol + '/' + miniAddress;
//   }
//   return '';
// };