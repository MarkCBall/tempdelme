import React, { useMemo } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { uniq } from "lodash"
import { networkExchangePairs } from "./helpers/config";
import { setNetworkMap } from "../redux/tokenSearchSlice"
import styled from 'styled-components';
import Chip from '../Components/Chip';

const NetworkList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  padding:3px;
`;

export const SearchNetworks = () => {
  const dispatch = useDispatch();
  const { networkMap } = useSelector((state) => state);

  const handleChange = (e) => {    
    const {checked, value: networkName} = e.target
    dispatch(setNetworkMap({ networkName, checked }));
  }

  const isAllChecked = useMemo(() => {
    return Object.keys(networkMap).length > 0 && 
            Object.keys(networkMap).length === Object.values(networkMap).filter((e) => e === true).length
  }, [networkMap])

   
  return (
    <>      
      <NetworkList>
        <Chip label='All' onChange={handleChange} key={'allNetworks'} name='networks' value='all' checked={isAllChecked} />    
        {
          uniq(networkExchangePairs
            .map(pair => pair[0]))
            .map(networkName => {
              return <Chip label={networkName} onChange={handleChange} key={networkName} name='networks' value={networkName} checked={networkMap[networkName]}/>
            })
        }
      </NetworkList>
    </>
  );
}
export default SearchNetworks