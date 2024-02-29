import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.vercel.app',
  }),
  endpoints: builder => ({
    getCandles: builder.query({
      query: ({ page, min, max, color }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/candles?page=${page}&min=${min}&max=${max}&${colorParams}`;
      },
    }),
    getLightingDecor: builder.query({
      query: ({ page, min, max, color }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/lighting-decor?page=${page}&min=${min}&max=${max}&${colorParams}`;
      },
    }),
    getGiftSets: builder.query({
      query: ({ page, min, max, color }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/gift-sets?page=${page}&min=${min}&max=${max}&${colorParams}`;
      },
    }),
    getGetWarm: builder.query({
      query: ({ page, min, max, color }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/get-warm?page=${page}&min=${min}&max=${max}&${colorParams}`;
      },
    }),
    getTableGames: builder.query({
      query: ({ page, min, max, color }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/table-games?page=${page}&min=${min}&max=${max}&${colorParams}`;
      },
    }),
    getBooksAndJournals: builder.query({
      query: ({ page, min, max, color }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/books-and-journals?page=${page}&min=${min}&max=${max}&${colorParams}`;
      },
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
