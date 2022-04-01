import React from "react"
import { uniqBy } from "lodash"
import { networkExchangePairs } from "./helpers/config";
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeMap } from "../redux/tokenSearchSlice";
import styled from 'styled-components';
import Chip from '../Components/Chip';

const ExchangeList = styled.div`
  border-top:solid 1px #000;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  padding:3px;
`;
 
export const SearchExchanges = () => {
  const dispatch = useDispatch();
  const { exchangeMap, networkMap } = useSelector((state) => state);

  const handleChange = (e) => {    
    const {checked, value: exchangeName} = e.target    
    dispatch(setExchangeMap({ exchangeName, checked }));
  }

  return (
    <>
      <ExchangeList>
        <Chip label='All' onChange={handleChange} key={'allExchanges'} name='exchanges' value='all'  />  
        
        {uniqBy(networkExchangePairs.filter(pair => networkMap[pair[0]]), 1).map(pair => {
          const exchangeName = pair[1]
          return <Chip key={exchangeName} label={exchangeName} onChange={handleChange} name='exchanges' value={exchangeName} checked={exchangeMap[exchangeName]}/>
        })}
      </ExchangeList>
    </>
  );
}
export default SearchExchanges