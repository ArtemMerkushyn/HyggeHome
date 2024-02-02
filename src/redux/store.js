import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { servicesApi } from './services';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
    search: searchReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(servicesApi.middleware),
});

setupListeners(store.dispatch);
