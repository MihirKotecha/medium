import { configureStore,combineReducers } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import userReducer from "./userSlice";
import { api } from "../../services/api";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist"


const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const reducer = combineReducers({
    blogs: blogReducer,
    userDetails: userReducer,
    [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig,reducer); 

export const appStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
