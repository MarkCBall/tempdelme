import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setNetworkMap } from "../redux/tokenSearchSlice"
import { omitBy } from "lodash"
import { networkExchangePairs } from "./helpers/config";

//todo new file
export const SearchNetworksAll = () => {
  const dispatch = useDispatch();
  const { networkMap } = useSelector((state) => state);
  let networkName = 'All';

  return (
    <>
      <input
        checked={networkMap[networkName] === true || Object.keys(omitBy(networkMap, (b) => !b)).length === 0}
        type="checkbox"
        onChange={e => {
          // Loops through all the active networks to set them to false.
          for (networkName in networkMap) {
            dispatch(setNetworkMap({ networkName, checked: false }));
          }

          // Have to reset the name of the network because this is SUPER hacky.
          networkName = 'All';

          // Sets the "All Network" option to yes.
          dispatch(setNetworkMap({ networkName, checked: e.target.checked }));
        }}
      />
      {networkName}
    </>
  );
};
export default SearchNetworksAll;