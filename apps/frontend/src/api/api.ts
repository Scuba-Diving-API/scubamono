import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EventData, StrapiResponse } from '../types/types';

export const STRAPI_URL = 'http://localhost:1337';
const STRAPI_API = `${STRAPI_URL}/api`;

export const strapiApi = createApi({
  reducerPath: 'strapiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: STRAPI_API,
    prepareHeaders: (headers) => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getEvents: builder.query<StrapiResponse<EventData>, void>({
      query: () => '/events?populate=*',
    }),
  }),
});

export const { useGetEventsQuery } = strapiApi;
