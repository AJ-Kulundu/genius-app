import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const geniusApiHeaders = {
  "X-RapidAPI-Host": "genius.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.API_KEY,
};

const baseUrl = "https://genius.p.rapidapi.com";
const q = "";

export const geniusApi = createApi({
  reducerPath: "geniusAPI",
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
  }),
});

export const { useArtistQuery, useSongQuery } = geniusApi;
