import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from 'next-redux-wrapper';

const geniusApiHeaders = {
  "X-RapidAPI-Host": "genius.p.rapidapi.com",
  "X-RapidAPI-Key": API_KEY,
};

const baseUrl = "https://genius.p.rapidapi.com";
const q = "";

export const geniusApi = createApi({
  reducerPath: "geniusAPI",
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    artist: builder.query({
      query: (id) => ({
        url: `/artists/${id}`,
        method: "GET",
        headers: geniusApiHeaders,
      }),
    }),
    song: builder.query({
      query: () => ({
        url: "/songs/3315890",
        method: "GET",
        headers: geniusApiHeaders,
      }),
    }),
    search: builder.query({
      query:() => ({
        url:"/search?q=Future",
        method: "GET",
        headers: geniusApiHeaders,
      }),
    })
  }),
});

export const { useArtistQuery, useSongQuery, useSearchQuery } = geniusApi;
