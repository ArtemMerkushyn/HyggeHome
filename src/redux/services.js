import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const candlesApi = createApi({
  reducerPath: 'candlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.onrender.com/',
  }),
  endpoints: builder => ({
    getCandles: builder.query({
      query: () => 'products',
      providesTags: ['Candles'],
    }),
    getCandlesByName: builder.query({
      query: name => `search?query=${name}`,
    }),
  }),
});

export const { useGetCandlesQuery, useGetCandlesByNameQuery } = candlesApi;
