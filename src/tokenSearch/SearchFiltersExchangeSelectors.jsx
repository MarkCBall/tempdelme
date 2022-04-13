import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeMap, setExchangeMapAll } from "../redux/tokenSearchSlice"
import { Chip } from "../Components/Chip";
import { filterActiveAll, filterActiveNames, filterValidExchangeNames } from './helpers/filters.js';


export const FilterExchangeAll = () => {
  const dispatch = useDispatch();
  const { exchangeMap, networkMap } = useSelector((state) => state);
  const exchangeAll = filterActiveAll(exchangeMap);
  const exchangeNamesActive = filterValidExchangeNames(filterActiveNames(networkMap));


  // RENDERING.
  return <Chip
    name={'AllExchanges'}
    label={'All'}
    checked={exchangeAll}
    onChange={() => dispatch(setExchangeMapAll({ exchangeNames: exchangeNamesActive, exchangeAll: exchangeAll, debounceDelay: 1000 }))}
  />;
};


export const FilterExchangeSelectors = () => {
  const dispatch = useDispatch();
  const { networkMap, exchangeMap } = useSelector((state) => state);
  const exchangeNamesActive = filterValidExchangeNames(filterActiveNames(networkMap));


  // Function generating the HTML element of the network.
  const exchangeElement = exchangeName => {
    // RENDERING.
    return <Chip
      key={exchangeName}
      name={exchangeName}
      label={exchangeName}
      checked={exchangeMap[exchangeName] || false}
      onChange={e => dispatch(setExchangeMap({ exchangeName: exchangeName, checked: e.target.checked, debounceDelay: 1000 }))}
    />;
  };


  // RENDERING.
  return exchangeNamesActive.map(exchangeName => exchangeElement(exchangeName));
};