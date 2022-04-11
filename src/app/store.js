import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import { geniusApi } from '../services/api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [geniusApi.reducerPath]:geniusApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(geniusApi.middleware),
})