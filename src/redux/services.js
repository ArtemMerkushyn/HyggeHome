import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://tc299.onrender.com',
    credentials: 'include',
    mode: 'cors',
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
    getProduct: builder.query({
      query: product_article => `/product?article=${product_article}`,
    }),
    searchByName: builder.query({
      query: name => `/search?query=${name}`,
    }),
    getFilterPrice: builder.query({
      query: ({ min, max }) => `/search?min=${min}&max=${max}`,
    }),
    getSearchFilterPrice: builder.query({
      query: ({ name, page, min, max }) => `/search?query=${name}&page=${page}&min=${min}&max=${max}`,
    }),
    registerUser: builder.mutation({
      query: newUser => ({
        url: '/register',
        method: 'POST',
        body: newUser,
        credentials: 'include',
        mode: 'cors',
      }),
      transformResponse: (response, meta) => {
      const statusCode = meta.response.status;
      return {response, statusCode};
  }
    }),
    loginUser: builder.mutation({
      query: user => ({
        url: '/login',
        method: 'POST',
        body: user,
        credentials: 'include',
        mode: 'cors',
      }),
    }),
    
    views: builder.mutation({
      query: product => ({
        url: '/view',
        method: "PUT",
        body: product,
        credentials: 'include',
        mode: 'cors',
      }),
    }),
     getUserOnload: builder.query({
      query: () => '/user-onload',
     }),
     
     quantityInCart: builder.mutation({
      query: product => ({
        url: '/quantity-in-cart',
        method: "POST",
        body: product,
        credentials: 'include',
        mode: 'cors',
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'GET',
      }),
      transformResponse: (response, meta) => {
      const statusCode = meta.response.status;
      return {response, statusCode};
  }
      
    }),
    orderStatus: builder.mutation({
      query: status => ({
        url: '/order-status',
        method: "PUT",
        body: status,
        credentials: 'include',
        mode: 'cors',
      }),
      transformResponse: (response, meta) => {
      const statusCode = meta.response.status;
      return {response, statusCode};
  }
    }),
    postOrder: builder.mutation({
      query: order => ({
        url: '/order',
        method: "POST",
        body: order,
        credentials: 'include',
        mode: 'cors',
      }),
      transformResponse: (response, meta) => {
      const statusCode = meta.response.status;
      return {response, statusCode};
  }
    }),
    postQuestion: builder.mutation({
      query: question => ({
        url: '/question',
        method: "POST",
        body: question,
        credentials: 'include',
        mode: 'cors',
      }),
      transformResponse: (response, meta) => {
      const statusCode = meta.response.status;
      return {response, statusCode};
  }
    }),
    postFeedback: builder.mutation({
      query: question => ({
        url: '/feedback',
        method: "POST",
        body: question,
        credentials: 'include',
        mode: 'cors',
      }),
      transformResponse: (response, meta) => {
      const status = meta.response.status;
      return {response, status};
  }
    }),
    deleteFeedback: builder.mutation({
      query: feedback => ({
        url: '/feedback',
        method: "DELETE",
        body: feedback,
        credentials: 'include',
        mode: 'cors',
      }),
      transformResponse: (response, meta) => {
      const status = meta.response.status;
      return {response, status};
  }
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
  useGetProductQuery,
  useSearchByNameQuery,
  useGetFilterPriceQuery,
  useGetSearchFilterPriceQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserOnloadQuery,
  useViewsMutation,
  useQuantityInCartMutation,
  useLogoutMutation,
  useOrderStatusMutation,
  usePostOrderMutation,
  usePostQuestionMutation,
  usePostFeedbackMutation,
  useDeleteFeedbackMutation
} = servicesApi;
