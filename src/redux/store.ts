import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/AuthAPI";
import userReducer from "./user/user-slice";

export const store = configureStore({
    reducer: { [authApi.reducerPath]: authApi.reducer, user: userReducer },
    middleware: (getDefaultMiddle) =>
        getDefaultMiddle().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
