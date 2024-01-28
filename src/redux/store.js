import { configureStore } from '@reduxjs/toolkit';

import { setupListeners } from '@reduxjs/toolkit/query';
import { candlesApi } from './services';

export const store = configureStore({
  reducer: {
    [candlesApi.reducerPath]: candlesApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(candlesApi.middleware),
});

setupListeners(store.dispatch);
