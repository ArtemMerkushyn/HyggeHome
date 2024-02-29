import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.vercel.app',
  }),
  endpoints: builder => ({
    getCandles: builder.query({
      query: ({ page, min, max, color }) =>
        `/candles?page=${page}&min=${min}&max=${max}&color=${color}`,
    }),
    getLightingDecor: builder.query({
      query: ({ page, min, max, color }) =>
        `/lighting-decor?page=${page}&min=${min}&max=${max}&color=${color}`,
    }),
    getGiftSets: builder.query({
      query: ({ page, min, max, color }) =>
        `/gift-sets?page=${page}&min=${min}&max=${max}&color=${color}`,
    }),
    getGetWarm: builder.query({
      query: ({ page, min, max, color }) =>
        `/get-warm?page=${page}&min=${min}&max=${max}&color=${color}`,
    }),
    getTableGames: builder.query({
      query: ({ page, min, max, color }) =>
        `/table-games?page=${page}&min=${min}&max=${max}&color=${color}`,
    }),
    getBooksAndJournals: builder.query({
      query: ({ page, min, max, color }) =>
        `/books-and-journals?page=${page}&min=${min}&max=${max}&color=${color}`,
    }),
    searchByName: builder.query({
      query: name => `/search?query=${name}`,
    }),
    getFilterPrice: builder.query({
      query: ({ min, max }) => `/search?min=${min}&max=${max}`,
    }),
    registerUser: builder.mutation({
      query: newUser => ({
        url: 'user',
        method: 'POST',
        body: newUser,
      }),
    }),
  }),
});

export const {
  useGetCandlesQuery,
  useGetLightingDecorQuery,
  useGetGiftSetsQuery,
  useGetGetWarmQuery,
  useGetTableGamesQuery,
  useGetBooksAndJournalsQuery,
  useSearchByNameQuery,
  useGetFilterPriceQuery,
  useRegisterUserMutation,
} = servicesApi;
