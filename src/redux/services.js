import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headersCors = "credentials: 'include', mode: 'cors',";

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.onrender.com',
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
      query: ({ min, max }) => ({
        url: `/search?min=${min}&max=${max}`,
        headersCors
      })
    }),
    registerUser: builder.mutation({
      query: newUser => ({
        url: '/register',
        headersCors,
        method: 'POST',
        body: newUser,
      }),
    }),
    loginUser: builder.mutation({
      query: user => ({
        url: '/login',
        headersCors,
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
