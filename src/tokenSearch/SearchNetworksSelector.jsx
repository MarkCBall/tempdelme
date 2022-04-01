import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setNetworkMap } from "../redux/tokenSearchSlice"

import Chip from '../Components/Chip';

//todo new file
export const SearchNetworkSelector = ({ networkName }) => {
  const dispatch = useDispatch();
  const { networkMap } = useSelector((state) => state);

  const handleChange = (e) => {
    dispatch(setNetworkMap({ networkName, checked: e.target.checked }));
    networkName = 'All';
    dispatch(setNetworkMap({ networkName, checked: false }));
  }

  return (
    <>      
      <Chip label={networkName} checked={networkMap['All'] ? false : (networkMap[networkName] || false)}  onChanged={handleChange} />
    </>
  );
};
export default SearchNetworkSelector