import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';

import { tokenSearchSlice } from './tokenSearchSlice';

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    immutableCheck: false,
  }),
  reducer: tokenSearchSlice.reducer,
});
