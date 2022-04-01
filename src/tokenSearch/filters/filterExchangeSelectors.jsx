import React from "react"
import { uniq } from "lodash"
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeMap } from "../../redux/tokenSearchSlice"
import { networkExchangePairs } from "../helpers/config";


export const FilterExchangeSelectors = () => {
  const dispatch = useDispatch();
  const { networkMap, exchangeMap } = useSelector((state) => state);


  // RENDERING.
  return (
    <>
      {
        // Extract the network names from "networkExchangePairs" and uniquifies them.
        uniq(
          networkExchangePairs
            // Filters out any network that is not set and active.
            .filter(pair => networkMap[pair[0]])
            // Loads up the list of the exchanges.
            .map(pair => pair[1])
        )
          // Loops through the unique exchange names.
          .map(exchangeName => (
            id =>
              // Returns the HTML element of each network.
              // Using a "label" to facilitate the UX.
              <label
                key={exchangeName}
                htmlFor={id}
              >
                <input
                  id={id}
                  type="checkbox"
                  // Checking if "All" network is set and true, if so, disabling the checkbox.
                  // Else checking if the current network is set and true, else disabling the checkbox.
                  checked={exchangeMap.All ? false : (exchangeMap[exchangeName] || false)}
                  onChange={e => {
                    // Updating the current network status.
                    dispatch(setExchangeMap({ exchangeName, checked: e.target.checked }));

                    // Hacky hacky cheese here for the double dispatch to disable the "All" network from the state.
                    exchangeName = 'All';

                    // Away with thee!
                    dispatch(setExchangeMap({ exchangeName, checked: false }));
                  }}
                />
                {exchangeName}
              </label>
          )
            // Setting up the ID for the Html elements.
            ('searchFilterNetwork_' + exchangeName + '_checkbox_')
          )
      }
    </>
  );
};
export default FilterExchangeSelectors;