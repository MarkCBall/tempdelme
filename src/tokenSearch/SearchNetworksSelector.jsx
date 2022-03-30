import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setNetworkMap } from "../redux/tokenSearchSlice"


//todo new file
export const SearchNetworkSelector = ({ networkName }) => {
  const dispatch = useDispatch();
  const { networkMap } = useSelector((state) => state);


  return (
    <>
      <input
        checked={networkMap['All'] ? false : (networkMap[networkName] || false)}
        type="checkbox"
        onChange={e => {
          dispatch(setNetworkMap({ networkName, checked: e.target.checked }));

          networkName = 'All';
          dispatch(setNetworkMap({ networkName, checked: false }));
        }
        }
      />
      {networkName}
    </>
  );
};
export default SearchNetworkSelector