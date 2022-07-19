import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddle) => getDefaultMiddle(),
});

export type RootState = ReturnType<typeof store.getState>;
