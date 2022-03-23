import React, { useEffect, useRef, useState, useReducer } from 'react';
import useSearchReducer, {ACTIONS} from "./useSearchReducer";
import SearchInput from "./SearchInput";
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router';
// import { useLocation } from 'react-router-dom';

// import {
//   fetchAndSetTokenPair,
//   searchTokenPairs,
//   stopSelecting,
// } from '../../redux/tokenSearchOld/tokenSearchSlice';
// import SearchInput from './SearchInput';
// import SearchResult from './SearchResult';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }



export const TokenSearch = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector((state) => state?.velox?.tokenSearchOld.isLoading);

  const [state, dispatch] = useSearchReducer();
  const { isSelecting } = state

  // const [ isSelecting, setIsSelecting ] = useState()
  const searchRef = useRef();

  // useEffect(() => {
  //   // dispatch(searchTokenPairs(''));//todo
  // }, [dispatch]);


  useEffect(() => {
    window.onclick = (e) => {
      if (!searchRef?.current?.contains(e.target)) {
        dispatch({type:ACTIONS.STOP_SELECTING});
        // setIsSelecting(undefined)
      }
    };
  }, [dispatch]);

  // return <input className={"no-outline"} id={"pair-field"} placeholder={"Search"}/>

  // return <>hi</>

  return (
    <div ref={searchRef}>
      <SearchInput />
      {/*{isSelecting && <SearchResult loading={isLoading} />}*/}
      {isSelecting && "dropdown open"}
      hisdddddddddddd
    </div>
  );
};

export default TokenSearch;
