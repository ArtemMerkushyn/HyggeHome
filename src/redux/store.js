import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { servicesApi } from './services';
import searchReducer from './searchSlice';
import favoritesReducer from './favoriteSlice';
import filterReducer from './filterSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['favorite', 'search'],
};

const reducers = combineReducers({
  [servicesApi.reducerPath]: servicesApi.reducer,
  search: searchReducer,
  favorite: favoritesReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(servicesApi.middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
