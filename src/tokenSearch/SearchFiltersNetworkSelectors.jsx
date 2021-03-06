import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { omitBy } from "lodash"
import { setNetworkMap, setNetworkMapAll, setExchangeMapAll } from "../redux/tokenSearchSlice"
import { networkNames } from "./helpers/config";
import { Chip } from "../Components/Chip";


export const FilterNetworkAll = () => {
  const dispatch = useDispatch();
  const { exchangeMap, networkMap } = useSelector((state) => state);
  const networkAll = Object.values(omitBy(networkMap, b => !b)).length === 0;
  const exchangeNamesActive = Object.keys(omitBy(exchangeMap, b => !b));


  // RENDERING.
  return <Chip
    name={'AllNetworks'}
    label={'All'}
    checked={networkAll}
    onChange={
      e => {
        dispatch(setNetworkMapAll({ networkNames: networkNames, networkAll: networkAll }));
        dispatch(setExchangeMapAll({ exchangeNames: exchangeNamesActive, exchangeAll: false }));
      }
    }
  />;
};


export const FilterNetworkSelectors = () => {
  const dispatch = useDispatch();
  const { networkMap } = useSelector((state) => state);


  // Function generating the HTML element of the network.
  const networkElement = networkName => {
    // RENDERING.
    return <Chip
      key={networkName}
      name={networkName}
      label={networkName}
      checked={networkMap[networkName] || false}
      onChange={e => dispatch(setNetworkMap({ networkName, checked: e.target.checked }))}
    />;
  };


  // RENDERING.
  return networkNames.map(networkName => networkElement(networkName));
};