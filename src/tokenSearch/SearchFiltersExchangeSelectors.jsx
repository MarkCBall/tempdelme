import React from "react"
import { omitBy } from "lodash"
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeMap, setExchangeMapAll } from "../redux/tokenSearchSlice"
import { exchangeNames } from "./helpers/config";


export const FilterExchangeAll = () => {
  const dispatch = useDispatch();
  const { exchangeMap, networkMap } = useSelector((state) => state);
  const exchangeId = 'searchfilterexchangeselector_all';
  const exchangeName = 'All';
  const exchangeAll = Object.values(omitBy(exchangeMap, b => !b)).length === 0;
  const exchangeNamesActive = exchangeNames(Object.keys(omitBy(networkMap, b => !b)));


  // RENDERING.
  return (
    <label
      htmlFor={exchangeId}
    >
      <input
        id={exchangeId}
        type="checkbox"
        // Checks for a single manual echange entry that is true.
        checked={exchangeAll}
        onChange={() => dispatch(setExchangeMapAll({ exchangeNames: exchangeNamesActive, exchangeAll: exchangeAll }))}
      />
      {exchangeName}
    </label>
  );
};


export const FilterExchangeSelectors = () => {
  const dispatch = useDispatch();
  const { networkMap, exchangeMap } = useSelector((state) => state);
  const exchangeNamesActive = exchangeNames(Object.keys(omitBy(networkMap, b => !b)));


  // Function generating the HTML element of the network.
  const exchangeElement = exchangeName => {
    const exchangeId = 'searchfilternetworkselector_' + exchangeName;


    // RENDERING.
    return (
      <label
        key={exchangeName}
        htmlFor={exchangeId}
      >
        <input
          id={exchangeId}
          type="checkbox"
          checked={exchangeMap[exchangeName] || false}
          onChange={e => dispatch(setExchangeMap({ exchangeName: exchangeName, checked: e.target.checked }))}
        />
        {exchangeName}
      </label>
    );
  };


  // RENDERING.
  return exchangeNamesActive.map(exchangeName => exchangeElement(exchangeName));
};