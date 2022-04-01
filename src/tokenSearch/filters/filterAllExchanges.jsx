import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setExchangeMap } from "../../redux/tokenSearchSlice"
import { omitBy } from "lodash"


export const FilterAllExchanges = () => {
  const dispatch = useDispatch();
  const { exchangeMap } = useSelector((state) => state);


  // RENDERING.
  return ((
    (id, exchangeName) =>
      <label
        htmlFor={id}
      >
        <input
          id={id}
          type="checkbox"
          // Validate the "All" echange is set and true.
          // Counts the number of active echanges and checks if it's less than 1.
          checked={exchangeMap.All === true || Object.values(omitBy(exchangeMap, b => !b)).length < 1}
          onChange={
            () => {
              // Updates the state for the "All" exchange property.
              // When the user clicks on the "All" exchange checkbox, this is ALWAYS set to true.
              dispatch(setExchangeMap({ exchangeName, checked: true }));

              // Loops through all the active exchanges to set them to false.
              // This HAS to exclude the "All" exchange represented by "exchangeName".
              for (exchangeName of Object.keys(omitBy(exchangeMap, b => !b)).filter(name => name !== exchangeName))
                // Disables the network.
                dispatch(setExchangeMap({ exchangeName, checked: false }));
            }
          }
        />
        {exchangeName}
      </label>
  )
    // Sets up the Id of the checkbox.
    // Sets up the default exchange name to 'All' and the checkbox checked value.
    ('searchFilterExchange_All_checkbox', 'All')
  );
};
export default FilterAllExchanges;