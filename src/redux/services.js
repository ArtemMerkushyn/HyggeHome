import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const candlesApi = createApi({
  reducerPath: 'candlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.onrender.com/',
  }),
  tagTypes: ['Candles'],
  endpoints: builder => ({
    getCandles: builder.query({
      query: () => 'products',
      providesTags: ['Candles'],
    }),
  }),
});

export const { useGetCandlesQuery } = candlesApi;
