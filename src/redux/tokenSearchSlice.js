import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import retry from 'async-retry';
import { stringify } from 'flatted';
import { searchTokensAsync } from "../tokenSearch/helpers/async";
import { omitBy } from "lodash"
import { networkExchangePairs } from '../tokenSearch/helpers/config';

export const setPair = createAsyncThunk(
  'token/setPair',
  async ({ selectedPair }) => {
    console.log("setPair")
    return selectedPair;
  }
);

export const resetSearchOnNewExchange = createAsyncThunk(
  'token/searchReset',
  async (searchString, thunkAPI) => {
    console.log("resetSearchOnNewExchange")
    thunkAPI.dispatch(searchTokenPairs(''));
  }
);

//todo no need for this to be a thunk
const setPairSearchTimestamp = createAsyncThunk(
  'token/saveTime',
  async (timestamp) => {
    return timestamp;
  }
);

export const searchTokenPairs = createAsyncThunk(
  'token/search',
  async (searchString, thunkAPI) => {
    try {
      const { exchangeMap, networkMap } = thunkAPI.getState();
      // console.log("exchangeMap", cleanedExchangeMap, Object.keys(cleanedExchangeMap)[0],"networkMap",cleanedNetworkMap, Object.keys(cleanedNetworkMap)[0])
      const pairSearchTimestamp = new Date().getTime();
      thunkAPI.dispatch(setPairSearchTimestamp(pairSearchTimestamp));

      // We have to use "omitBy" since a network or exchange will remain in the object if a user unselect them, but as false instead of true.
      // We then load each network and exchange by their key into an array to further filter them.
      const cleanedNetworkMap = Object.keys(omitBy(networkMap, (b) => !b));
      const cleanedExchangeMap = Object.keys(omitBy(exchangeMap, (b) => !b));

      // Filtering all valid pairs according to the active blockchains.
      const validNetworkExchangePairs = networkExchangePairs.filter(pair => cleanedNetworkMap.includes(pair[0]));

      // Filtering out any exchange that is not valid for the selected networks.
      // This has to be done since an exchange will remain in the array when the network is disabled by the user.
      // It's easier here and also offer a more natural experience for the user.
      const validExchanges = cleanedExchangeMap.filter(exchange => validNetworkExchangePairs.filter(pair => pair[1] === exchange).length >= 1);

      // Filtering out any network that does not have at least one valid exchange selected.
      // This has to be done since the user can still have a network selected while it has no valid exchange selected.
      // It's easier here and also offer a more natural experience for the user.
      // Also, this has to be done to avoid negative impacts on the GraphQL query, since it would greatly recude the number of results in each dataset.
      const validNetworks = cleanedNetworkMap.filter(network => validNetworkExchangePairs.filter(pair => pair[0] === network && validExchanges.includes(pair[1])).length >= 1);

      // Loading the data.
      const data = await retry(() => searchTokensAsync(searchString, validNetworks, validExchanges), { retries: 1 });

      // console.log("data", data);
      return { data, pairSearchTimestamp };
    }
    catch (e) {
      console.log("err searchTokenPairs", e);
      throw new Error(stringify(e, Object.getOwnPropertyNames(e)));
    }
  }
);

const initialTimestamp = new Date().getTime();
const initialState = {
  fetchError: null,
  isLoading: false,
  isSelecting: false,
  pairSearchTimestamp: initialTimestamp,
  searchText: '',
  selectedPair: undefined,
  serializedTradeEstimator: '',
  suggestions: [],
  exchangeMap: {},
  networkMap: {}
};

export const tokenSearchSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(resetSearchOnNewExchange.fulfilled, (state, action) => {
      state.searchText = '';
      state.suggestions = [];
      state.isLoading = true;
      state.fetchError = null;
      state.isSelecting = false;
      state.selectedPair = undefined;
      // don't update pairSearchTimestamp
      state.serializedTradeEstimator = '';
    });
    builder.addCase(setPairSearchTimestamp.fulfilled, (state, action) => {
      state.pairSearchTimestamp = action.payload;
    });
    builder.addCase(setPair.fulfilled, (state, action) => {
      //pending/rejected not needed as its not really async
      state.searchText = '';
      state.isSelecting = false;
      state.selectedPair = action.payload;
    });
    builder.addCase(searchTokenPairs.pending, (state) => {
      // state.isLoading = true
      state.fetchError = null;
    });
    builder.addCase(searchTokenPairs.fulfilled, (state, action) => {
      if (action.payload?.pairSearchTimestamp >= state.pairSearchTimestamp) {
        state.pairSearchTimestamp = action.payload.pairSearchTimestamp;
        state.suggestions = action.payload.data;
        state.isLoading = false;
        state.fetchError = null;
      }
    });
    builder.addCase(searchTokenPairs.rejected, (state, action) => {
      state.suggestions = [];
      state.isLoading = false;
      state.fetchError = 'Something went wrong fetching token pair.'; //action.error.message
    });
  },
  initialState,
  name: 'tokenSearch',
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    startSelecting: (state) => {
      state.isSelecting = true;
    },
    stopSelecting: (state) => {
      state.isSelecting = false;
    },
    toggleSelecting: (state) => {
      state.isSelecting = !state.isSelecting;
    },
    setExchangeMap: (state, action) => {
      state.exchangeMap[action.payload.exchangeName] = action.payload.checked
    },
    setNetworkMap: (state, action) => {
      console.log(action)
      state.networkMap[action.payload.networkName] = action.payload.checked
    }
  },
});

export const { setSearchText, startSelecting, stopSelecting, toggleSelecting, setExchangeMap, setNetworkMap } =
  tokenSearchSlice.actions;
export default tokenSearchSlice.reducer;
