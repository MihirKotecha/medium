import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";

export const appStore = configureStore({
    reducer: {
        blogs: blogReducer,
    },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
