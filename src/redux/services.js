import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.vercel.app',
  }),
  endpoints: builder => ({
    getCandles: builder.query({
      query: page => `/candles?page=${page}`,
    }),
    getLightingDecor: builder.query({
      query: page => `/lighting-decor?page=${page}`,
    }),
    getGiftSets: builder.query({
      query: page => `/gift-sets?page=${page}`,
    }),
    getGetWarm: builder.query({
      query: page => `/get-warm?page=${page}`,
    }),
    getTableGames: builder.query({
      query: page => `/table-games?page=${page}`,
    }),
    getBooksAndJournals: builder.query({
      query: page => `/books-and-journals?page=${page}`,
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
