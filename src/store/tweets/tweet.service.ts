import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { add, create, remove, update } from "./tweet.slice"

// Define a service using a base URL and expected endpoints
export const tweetApi = createApi({
  reducerPath: "tweetApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTweets: builder.query({
      query: () => `comments`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
        dispatch(add(data))
      },
    }),
    createTweet: builder.mutation({
      query: ({ ...body }) => ({
        url: `comments`,
        body: body,
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data, meta } = await queryFulfilled

        if (meta?.response?.status === 201) {
          dispatch(create(data))
        }
      },
    }),
    updateTweet: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `comments/${id}`,
        body: patch,
        method: "PUT",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data, meta } = await queryFulfilled
        if (meta?.response?.status === 200) {
          dispatch(update(data))
        }
      },
    }),
    deleteTweet: builder.mutation({
      query: ({ tweetId }) => ({
        url: `comments/${tweetId}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { meta } = await queryFulfilled
        if (meta?.response?.status === 200) {
          dispatch(remove(arg.tweetId))
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTweetsQuery,
  useCreateTweetMutation,
  useUpdateTweetMutation,
  useDeleteTweetMutation,
} = tweetApi
