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
import searchReducer from './slices/searchSlice';
import favoritesReducer from './slices/favoriteSlice';
import filterReducer from './slices/filterSlice';
import curtReducer from './slices/curtSlice';
import userReducer from './slices/userSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['favorite', 'search', 'curt'],
};

const reducers = combineReducers({
  [servicesApi.reducerPath]: servicesApi.reducer,
  search: searchReducer,
  favorite: favoritesReducer,
  filter: filterReducer,
  curt: curtReducer,
  user: userReducer,
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
