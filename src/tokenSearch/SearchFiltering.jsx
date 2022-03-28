import React from "react"
import {uniq, uniqBy} from "lodash"
import {networkExchangePairs} from "./helpers/config";
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeMap, setNetworkMap }  from "../redux/tokenSearchSlice"

//todo new file
const NetworkSelection = ({networkName}) =>{
  const dispatch = useDispatch();
  const {networkMap} = useSelector(
    (state) => state
  );
  return <>
    <input
      checked={networkMap[networkName] || false}
      type="checkbox"
      onChange={(e)=>dispatch(setNetworkMap({networkName, checked:e.target.checked}))}
    />
    {networkName}
  </>
}

//todo new file
const ExchangeSelection = ({exchangeName}) =>{
  const dispatch = useDispatch();
  const {exchangeMap} = useSelector(
    (state) => state
  );
  return <>
    <input
      checked={exchangeMap[exchangeName] || false}
      type="checkbox"
      onChange={(e)=>dispatch(setExchangeMap({exchangeName, checked:e.target.checked}))}
    />
    {exchangeName}
  </>
}

export const SearchFiltering = () => {
  const {networkMap} = useSelector(
    (state) => state
  );


  return (
    <div style={{border: "solid"}}>
      <div style={{width: "100%", height: "40px"}}>Select blockchain</div>
      {
        uniq(networkExchangePairs.map(pair=>pair[0])).map(networkName => {
          return <NetworkSelection key={networkName} networkName={networkName}/>
        })
      }
      <hr/>
      {uniqBy(networkExchangePairs.filter(pair=>networkMap[pair[0]]),1).map(pair=>{
        const exchangeName = pair[1]
        return <ExchangeSelection exchangeName={exchangeName}/>
      })}
    </div>


  )
}
export default SearchFiltering