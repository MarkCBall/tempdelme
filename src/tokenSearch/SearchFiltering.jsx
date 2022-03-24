import React, { useState } from "react"

const NetworkSelection = ({networkName, setNetwork, network}) =>{

  return <>
    <input checked={network==networkName} type="radio" onClick={()=>setNetwork(networkName)}/>
    {networkName}
  </>
}

export const SearchFiltering = () => {
  const [network, setNetwork ] = useState()//todo link into redux state

  return (
    <div style={{border: "solid"}}>
      <div style={{width: "100%", height: "40px"}}>Select blockchain</div>
      <NetworkSelection setNetwork={setNetwork} network={network} networkName={"All"}/>
      <NetworkSelection setNetwork={setNetwork} network={network} networkName={"Ethereum"}/>
      <NetworkSelection setNetwork={setNetwork} network={network} networkName={"Avalanche"}/>
      <NetworkSelection setNetwork={setNetwork} network={network} networkName={"BSC"}/>
      <hr/>

      {network==="Ethereum" && <>
        <input type="checkbox"/>
        All exchanges
        <input type="checkbox"/>
        UniswapV3
        <input type="checkbox"/>
        SushiSwap
      </>}

      {network==="Avalanche" && <>
        <input type="checkbox"/>
        All exchanges
        <input type="checkbox"/>
        Pangolin
        <input type="checkbox"/>
        TraderJoe
      </>}

      {network==="BSC" && <>
        <input type="checkbox"/>
        All exchanges
        <input type="checkbox"/>
        PancakeSwap
        <input type="checkbox"/>
        MDex
      </>}
    </div>
  )
}
export default SearchFiltering