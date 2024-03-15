import { configureStore, } from "@reduxjs/toolkit";
import { saveState } from "../config/load-state";
import likeSlice from "./slices/like-slice";
export const store = configureStore({
    reducer: {
        like: likeSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
});
store.subscribe(() => {
    saveState("data", store.getState().like.data);
})