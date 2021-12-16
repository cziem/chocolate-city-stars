import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const artistApi = createApi({
  reducerPath: "artistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getArtists: builder.query({
      query: () => `users`,
    }),
    getAlbums: builder.query({
      query: (artisteId) => `users/${artisteId}/albums`,
    }),
    getPhotos: builder.query({
      query: (albumId) => `albums/${albumId}/photos`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetArtistsQuery, useGetAlbumsQuery, useGetPhotosQuery } =
  artistApi
