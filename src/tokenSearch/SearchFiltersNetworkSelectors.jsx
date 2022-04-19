import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { omitBy } from "lodash"
import { setNetworkMap, setNetworkMapAll, setExchangeMapAll } from "../redux/tokenSearchSlice"
import { networkNames } from "./helpers/config";
import { Chip } from "./Chip";
import TokenSearchContext from '../Context/TokenSearch';

export const FilterNetworkAll = () => {
  const dispatch = useDispatch();
  const { exchangeMap, networkMap } = useSelector((state) => state);
  const networkAll = Object.values(omitBy(networkMap, b => !b)).length === 0;
  const exchangeNamesActive = Object.keys(omitBy(exchangeMap, b => !b));
  const renderProps = useContext(TokenSearchContext);
  const { customAllChip } = renderProps
  const styles = {
    fontSize: customAllChip?.fontSize || '9px',
    fontWeight: customAllChip?.fontWeight || '100',
    borderRadius: customAllChip?.borderRadius || "4px",
    backgroundColor: customAllChip?.backgroundColor || "#474F5C",
    border: customAllChip?.border || "0",
    padding: customAllChip?.padding || "0.1rem 0.3rem",
    margin: customAllChip?.margin || "0",
    defaultColor: customAllChip?.defaultColor || "#7A808A",   
    width: customAllChip?.width || "auto",
    height: customAllChip?.height || "auto",
    textAlign: customAllChip?.textAlign || "center" ,
    textTransform: customAllChip?.textTransform || "inherit"
  }

  // RENDERING.
  return <Chip
    name={'AllNetworks'}
    label={'Select All'}
    checked={networkAll}
    styles={styles}
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