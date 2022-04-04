import React, { useMemo, useState, useEffect } from "react"
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
  console.log('networkMap]: ', networkMap)
  console.log('exchangeMap]: ', exchangeMap)
  const handleChange = (e) => {    
    const {checked, value } = e.target    
    const data = value.split('-')
    const networkName = data[0]
    const exchangeName = data[1]
    dispatch(setExchangeMap({ exchangeName, checked, networkName }));
  } 

  const selectedNets = Object.keys(networkMap).filter((key) => networkMap[key] === true)        
  const exchanges = Object.fromEntries(Object.entries(exchangeMap).filter(([key, value]) => {                 
    return selectedNets.includes(key.toString()) && exchangeMap[key]            
  }))
  
  const isAllChecked = useMemo(() => {   
    const checked = Object.keys(exchanges).every(network => {         
      const result = Object.values(exchanges[network]).every((value) => {              
        return value
      })             
      return result
    })  
    return checked
  }, [exchanges]) 
  
  return (
    <>
      <ExchangeList>
        <Chip label='All' onChange={handleChange} key={'allExchanges'} name='exchanges' value='-all' checked={isAllChecked} />  
        
        {uniqBy(networkExchangePairs.filter(pair => networkMap[pair[0]]), 1).map(pair => {
          const exchangeName = pair[1]
          const networkName = pair[0] 
          return <Chip key={exchangeName} label={exchangeName} onChange={handleChange} name='exchanges' value={`${networkName}-${exchangeName}`} checked={exchangeMap[networkName][exchangeName]}/>
        })}
      </ExchangeList>
    </>
  );
}
export default SearchExchanges