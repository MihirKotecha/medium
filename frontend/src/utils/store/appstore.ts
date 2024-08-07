import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import { api } from "../../services/api";

export const appStore = configureStore({
    reducer: {
        blogs: blogReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
