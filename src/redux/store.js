import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer, FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "redux/contacts.slice";
import filterReducer from "redux/filter.slice";

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['filter'],
};

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
        },
    }),
});

const persistor = persistStore(store);

export { store, persistor };