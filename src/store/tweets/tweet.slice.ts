import { createSlice } from "@reduxjs/toolkit"
import { insertItem } from "../../lib/helper"
import { TTweets } from "../../lib/types/tweet.type"

interface IState {
  tweets: TTweets[]
}
const initialState: IState = {
  tweets: [],
}

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    add: (state, action) => {
      state.tweets = action.payload
    },
    create: (state, action) => {
      state.tweets = insertItem(state.tweets, action)
    },
    update: (state, action) => {
      state.tweets = state.tweets.map((tweet) => {
        if (tweet.id === action.payload.id) {
          return (tweet = action.payload)
        }
        return tweet
      })
    },
    remove: (state, action) => {
      state.tweets = state.tweets.filter((tweet) => tweet.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, create, update, remove } = tweetSlice.actions

export default tweetSlice.reducer
