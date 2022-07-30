import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginResponse } from "../../types/auth/login";
import Cookie from "js-cookie";

const initialState = {
    credentials: Cookie.get("user") ? JSON.parse(Cookie.get("user")!) : null,
} as {
    credentials: null | any;
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<LoginResponse | null>
        ) => {
            state.credentials = action.payload;
        },
    },
});

export const { setCredentials } = userSlice.actions;
export default userSlice.reducer;
