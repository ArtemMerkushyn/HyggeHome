import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.onrender.com/',
  }),
  endpoints: builder => ({
    getCandles: builder.query({
      query: () => 'products',
      providesTags: ['Candles'],
    }),
    getSearchByName: builder.query({
      query: name => `search?query=${name}`,
    }),
  }),
});

export const { useGetCandlesQuery, useGetSearchByNameQuery } = servicesApi;
