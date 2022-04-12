import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice';
import { geniusApi } from '../services/api';
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [geniusApi.reducerPath]:geniusApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(geniusApi.middleware),
})

export const  wrapper = createWrapper(store,{debug:true})