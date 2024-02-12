import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.onrender.com/',
  }),
  endpoints: builder => ({
    getCandles: builder.query({
      query: () => 'products?ofset=0&count=2000',
      providesTags: ['Candles'],
    }),
    searchByName: builder.query({
      query: name => `search?query=${name}`,
    }),
    getFilterPrice: builder.query({
      query: ({ min, max }) => `search?min=${min}&max=${max}`,
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
  useSearchByNameQuery,
  useGetFilterPriceQuery,
  useRegisterUserMutation,
} = servicesApi;
