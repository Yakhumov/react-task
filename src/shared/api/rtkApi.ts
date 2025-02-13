import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types/types";
import { URL_USER } from "./api";


export const profileApi = createApi({
    reducerPath: "profileApi",
    baseQuery: fetchBaseQuery({ baseUrl: "" }), // оставляем пустым, потому что URL будет динамическим
    endpoints: (builder) => ({
      getUserId: builder.query<IUser, string>({
        query: (userId) => URL_USER(userId), // динамически формируем URL для каждого запроса
      }),
    }),
  });
  

export const { useGetUserIdQuery } = profileApi;
