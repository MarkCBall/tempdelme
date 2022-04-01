import React from "react"
import { uniq } from "lodash"
import { useDispatch, useSelector } from 'react-redux';
import { setNetworkMap } from "../../redux/tokenSearchSlice"
import { networkExchangePairs } from "../helpers/config";


export const FilterNetworkSelectors = () => {
  const dispatch = useDispatch();
  const { networkMap } = useSelector((state) => state);


  // RENDERING.
  return (
    <>
      {
        // Extract the network names from "networkExchangePairs" and uniquifies them.
        uniq(
          networkExchangePairs
            // Loads up the list of the networks.
            .map(pair => pair[0])
        )
          // Loops through the unique network names.
          .map(networkName => (
            id =>
              // Returns the HTML element of each network.
              // Using a "label" to facilitate the UX.
              <label
                key={networkName}
                htmlFor={id}
              >
                <input
                  id={id}
                  type="checkbox"
                  // Checking if "All" network is set and true, if so, disabling the checkbox.
                  // Else checking if the current network is set and true, else disabling the checkbox.
                  checked={networkMap.All ? false : (networkMap[networkName] || false)}
                  onChange={e => {
                    // Updating the current network status.
                    dispatch(setNetworkMap({ networkName, checked: e.target.checked }));

                    // Hacky hacky cheese here for the double dispatch to disable the "All" network from the state.
                    networkName = 'All';

                    // Away with thee!
                    dispatch(setNetworkMap({ networkName, checked: false }));
                  }}
                />
                {networkName}
              </label>
          )
            // Setting up the ID for the Html elements.
            ('searchFilterNetwork_' + networkName + '_checkbox_')
          )
      }
    </>
  );
};
export default FilterNetworkSelectors;