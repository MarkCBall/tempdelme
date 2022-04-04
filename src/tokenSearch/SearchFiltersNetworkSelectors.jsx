import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { omitBy } from "lodash"
import { setNetworkMap, setNetworkMapAll, setExchangeMapAll } from "../redux/tokenSearchSlice"
import { networkNames } from "./helpers/config";


export const FilterNetworkAll = () => {
  const dispatch = useDispatch();
  const { exchangeMap, networkMap } = useSelector((state) => state);
  const networkId = 'searchfilternetworkselector_all';
  const networkName = 'All';
  const networkAll = Object.values(omitBy(networkMap, b => !b)).length === 0;
  const exchangeNamesActive = Object.keys(omitBy(exchangeMap, b => !b));


  // RENDERING.
  return (
    <label
      htmlFor={networkId}
    >
      <input
        id={networkId}
        type="checkbox"
        // Checks for a single manual network entry that is true.
        checked={networkAll}
        onChange={
          e => {
            dispatch(setNetworkMapAll({ networkNames: networkNames, networkAll: networkAll }));
            dispatch(setExchangeMapAll({ exchangeNames: exchangeNamesActive, exchangeAll: false }));
          }
        }
      />
      {networkName}
    </label>
  );
};


export const FilterNetworkSelectors = () => {
  const dispatch = useDispatch();
  const { networkMap } = useSelector((state) => state);


  // Function generating the HTML element of the network.
  const networkElement = networkName => {
    const networkId = 'searchfilternetworkselector_' + networkName;


    // RENDERING.
    return (
      <label
        key={networkName}
        htmlFor={networkId}
      >
        <input
          id={networkId}
          type="checkbox"
          checked={networkMap[networkName] || false}
          onChange={e => dispatch(setNetworkMap({ networkName, checked: e.target.checked }))}
        />
        {networkName}
      </label>
    );
  };


  // RENDERING.
  return networkNames.map(networkName => networkElement(networkName));
};