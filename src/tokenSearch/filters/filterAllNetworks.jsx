import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setNetworkMap, setExchangeMap } from "../../redux/tokenSearchSlice"
import { omitBy } from "lodash"


export const FilterAllNetworks = () => {
  const dispatch = useDispatch();
  const { networkMap, exchangeMap } = useSelector((state) => state);


  // RENDERING.
  return ((
    (id, networkName) =>
      <label
        htmlFor={id}
      >
        <input
          id={id}
          type="checkbox"
          // Validate the "All" network is set and true.
          // Counts the number of active networks and checks if it's less than 1.
          checked={networkMap.All === true || Object.values(omitBy(networkMap, b => !b)).length < 1}
          onChange={
            () => {
              let exchangeName;


              // Updates the state for the "All" network property.
              // When the user clicks on the "All" network checkbox, this is ALWAYS set to true.
              dispatch(setNetworkMap({ networkName, checked: true }));

              // Loops through all the active networks to set them to false.
              // This HAS to exclude the "All" network represented by "networkName".
              for (networkName of Object.keys(omitBy(networkMap, b => !b)).filter(name => name !== networkName))
                // Disables the network.
                dispatch(setNetworkMap({ networkName, checked: false }));

              // This is an unexpected reality of life when it comes to the UX, if the user clicks "All" networks, this also means "All" exchanges.
              // We have to include this step because the user may have previously selected a single exchange previous to clicking "All" networks.
              // Which would have the unfortunate consequence of searching "All" networks for this single exchange, yielding no more results than the previous
              // GraphQL query in most cases, but certainly not the results the user would expect from the enabled options of his search.
              //  PS:   Good thing the "All" name is valid for both "Network" and "Exchange". :p
              //  PPS:  Don't forget that if no exchange is enabled, then all exchanges are enabled and we also ignore the "All" exchange for this.
              for (exchangeName of Object.keys(omitBy(exchangeMap, b => !b)).filter(name => name !== networkName))
                // Disables the exchange.
                dispatch(setExchangeMap({ exchangeName, checked: false }));
            }
          }
        />
        {networkName}
      </label>
  )
    // Sets up the Id of the checkbox.
    // Sets up the default exchange name to 'All' and the checkbox checked value.
    ('searchFilterNetwork_All_checkbox', 'All')
  );
};
export default FilterAllNetworks;