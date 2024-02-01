import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { candlesApi } from './services';
import candlesReducer from './candlesSlice';

export const store = configureStore({
  reducer: {
    [candlesApi.reducerPath]: candlesApi.reducer,
    candles: candlesReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(candlesApi.middleware),
});

setupListeners(store.dispatch);
