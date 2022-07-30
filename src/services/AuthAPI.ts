import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LoginResponse, LoginRequest } from "../types/auth/login";
import { RegisterRequest, RegisterResponse } from "../types/auth/register";
import { API_URL } from "./../constants/index";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/auth` }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: "login",
                method: "POST",
                body: credentials,
            }),
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (registerData) => ({
                url: "register",
                method: "POST",
                body: registerData,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
