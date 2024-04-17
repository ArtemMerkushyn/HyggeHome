import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.vercel.app',
  }),
  endpoints: builder => ({
    getCandles: builder.query({
      query: ({ page, min, max, color, sort }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/candles?page=${page}&min=${min}&max=${max}&${colorParams}&sort=${sort.field}&dir=${sort.dir}`;
      },
    }),
    getLightingDecor: builder.query({
      query: ({ page, min, max, color, sort }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/lighting-decor?page=${page}&min=${min}&max=${max}&${colorParams}&sort=${sort.field}&dir=${sort.dir}`;
      },
    }),
    getGiftSets: builder.query({
      query: ({ page, min, max, color, sort }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/gift-sets?page=${page}&min=${min}&max=${max}&${colorParams}&sort=${sort.field}&dir=${sort.dir}`;
      },
    }),
    getGetWarm: builder.query({
      query: ({ page, min, max, color, sort }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/get-warm?page=${page}&min=${min}&max=${max}&${colorParams}&sort=${sort.field}&dir=${sort.dir}`;
      },
    }),
    getTableGames: builder.query({
      query: ({ page, min, max, color, sort }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/table-games?page=${page}&min=${min}&max=${max}&${colorParams}&sort=${sort.field}&dir=${sort.dir}`;
      },
    }),
    getBooksAndJournals: builder.query({
      query: ({ page, min, max, color, sort }) => {
        const colorParams = color.map(color => `color=${color}`).join('&');
        return `/books-and-journals?page=${page}&min=${min}&max=${max}&${colorParams}&sort=${sort.field}&dir=${sort.dir}`;
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
        url: '/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: user => ({
        url: '/login',
        method: 'POST',
        body: user,
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
  useLoginUserMutation,
} = servicesApi;
