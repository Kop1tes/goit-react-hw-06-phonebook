import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';
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
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

// const persistFilterConfig = {
//   key: 'filter',
//   storage,
// };

const persistedReducer = persistReducer(persistConfig, userReducer);
// const persistedFilterReducer = persistReducer(
//   persistFilterConfig,
//   filterReducer
// );

export const store = configureStore({
  reducer: {
    users: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);