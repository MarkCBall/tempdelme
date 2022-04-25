import React, { useContext } from 'react';
import { omitBy } from "lodash"
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeMap, setExchangeMapAll } from "../redux/tokenSearchSlice"
import { exchangeNames } from "./helpers/config";
import { Chip } from "./Chip";
import TokenSearchContext from '../Context/TokenSearch';

export const FilterExchangeAll = () => {
  const dispatch = useDispatch();
  const { exchangeMap, networkMap } = useSelector((state) => state);
  const exchangeAll = Object.values(omitBy(exchangeMap, b => !b)).length === 0;
  const exchangeNamesActive = exchangeNames(Object.keys(omitBy(networkMap, b => !b)));
  
  const renderProps = useContext(TokenSearchContext);
  const { customAllChip } = renderProps

  const styles = {
    fontSize: customAllChip?.fontSize || '9px',
    fontWeight: customAllChip?.fontWeight || '100',
    borderRadius: customAllChip?.borderRadius || "4px",
    backgroundColor: customAllChip?.backgroundColor || "#474F5C",
    border: customAllChip?.border || "0",
    padding: customAllChip?.padding || "4px 10px",
    margin: customAllChip?.margin || "0",
    defaultColor: customAllChip?.defaultColor || "#7A808A",   
    width: customAllChip?.width || "auto",
    height: customAllChip?.height || "auto",
    textAlign: customAllChip?.textAlign || "center" ,
    textTransform: customAllChip?.textTransform || "inherit",
    gridTemplateColumn: customAllChip?.gridTemplateColumn || "40px",
    justifySelf: customAllChip?.justifySelf || "center",
  }

  // RENDERING.
  return <Chip
    name={'AllExchanges'}
    label={'Select All'}
    checked={exchangeAll}
    styles={styles}
    onChange={() => dispatch(setExchangeMapAll({ exchangeNames: exchangeNamesActive, exchangeAll: exchangeAll }))}
  />;
};

export const FilterExchangeSelectors = () => {
  const dispatch = useDispatch();
  const { networkMap, exchangeMap } = useSelector((state) => state);
  const exchangeNamesActive = exchangeNames(Object.keys(omitBy(networkMap, b => !b)));

  // Function generating the HTML element of the network.
  const exchangeElement = exchangeName => {
    // RENDERING.
    return <Chip
      key={exchangeName}
      name={exchangeName}
      label={exchangeName}
      filter={1}
      checked={exchangeMap[exchangeName] || false}
      onChange={e => dispatch(setExchangeMap({ exchangeName: exchangeName, checked: e.target.checked }))}
    />;
  };


  // RENDERING.
  return exchangeNamesActive.map(exchangeName => exchangeElement(exchangeName));
};