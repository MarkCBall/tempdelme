import React from "react"
import { uniqBy } from "lodash"
import { networkExchangePairs } from "../../helpers/config";
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeMap } from "../../../redux/tokenSearchSlice";
import styled from 'styled-components';


const ExchangeList = styled.div`
  border-top:solid 1px #000;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  padding:3px;
`;


//todo new file
const ExchangeSelection = ({ exchangeName }) => {
  const dispatch = useDispatch();
  const { exchangeMap } = useSelector((state) => state);

  return <>
    <input
      checked={exchangeMap[exchangeName] || false}
      type="checkbox"
      onChange={(e) => dispatch(setExchangeMap({ exchangeName, checked: e.target.checked }))}
    />
    {exchangeName}
  </>
}

export const SearchExchanges = () => {
  const { networkMap } = useSelector((state) => state);


  return (
    <>
      <ExchangeList>
        {<ExchangeSelection key={'*'} exchangeName={'All'} />}
        {uniqBy(networkExchangePairs.filter(pair => networkMap[pair[0]]), 1).map(pair => {
          const exchangeName = pair[1]
          return <ExchangeSelection key={exchangeName} exchangeName={exchangeName} />
        })}
      </ExchangeList>
    </>
  );
}
export default SearchExchanges