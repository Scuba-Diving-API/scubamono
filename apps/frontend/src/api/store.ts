import { configureStore } from '@reduxjs/toolkit';
import { strapiApi } from './api';

export const store = configureStore({
  reducer: {
    [strapiApi.reducerPath]: strapiApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(strapiApi.middleware),
});
