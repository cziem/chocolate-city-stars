import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { tweetApi } from "./tweets/tweet.service"
import { artistApi } from "./artistes/artiste.service"
import tweetReducer from "./tweets/tweet.slice"

export const store = configureStore({
  reducer: {
    tweet: tweetReducer,
    [tweetApi.reducerPath]: tweetApi.reducer,
    [artistApi.reducerPath]: artistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tweetApi.middleware, artistApi.middleware),
})

setupListeners(store.dispatch)

export type IRootState = ReturnType<typeof store.getState>
