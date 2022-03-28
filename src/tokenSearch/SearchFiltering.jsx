import React, { useState } from "react"
import {uniq, uniqBy} from "lodash"
import {networkExchangePairs} from "./helpers/config";

const NetworkSelection = ({networkName, setNetworkMap, networkMap}) =>{

  return <>
    <input checked={networkMap[networkName] || false} type="checkbox" onChange={(e)=>setNetworkMap(networkMap=>({
      ...networkMap,
      [networkName]:e.target.checked
    }))}/>

    {networkName}
  </>
}

export const SearchFiltering = () => {
  const [networkMap, setNetworkMap] = useState({})//todo link into redux state
  const [exchangeMap, setExchangeMap] = useState({})//todo link into redux state

  return (
    <div style={{border: "solid"}}>
      <div style={{width: "100%", height: "40px"}}>Select blockchain</div>
      {
        uniq(networkExchangePairs.map(pair=>pair[0])).map(networkName => {
          return <NetworkSelection key={networkName} setNetworkMap={setNetworkMap} networkMap={networkMap} networkName={networkName}/>
        })
      }
      <hr/>
      {uniqBy(networkExchangePairs.filter(pair=>networkMap[pair[0]]),1).map(pair=>{
        const exchangeName = pair[1]
        return <div key={exchangeName}>
          <input  checked={exchangeMap[exchangeName] || false} type="checkbox" onChange={(e)=>setExchangeMap(exchangeMap=>({
            ...exchangeMap,
            [exchangeName]:e.target.checked
          }))}/>
          {pair[1]}
        </div>
      })}
    </div>
  )
}
export default SearchFiltering