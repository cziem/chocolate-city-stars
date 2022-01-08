import { Box, Container, Grid } from "@mui/material"
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import AddTweet from "../../components/Buttons/AddTweet"
import TweetCard from "../../components/Cards/TweetCard"
import CreateTweet from "../../components/Forms/CreateTweet"
import UpdateTweet from "../../components/Forms/UpdateTweet"
import Loading from "../../components/Loading"
import NoData from "../../components/NoData"
import { TTweets } from "../../lib/types/tweet.type"
import { useDeleteTweetMutation, useGetTweetsQuery } from "../../store/tweets/tweet.service"

const Tweets = () => {
  const { tweets } = useSelector<TTweets[], any>((tweets) => tweets)
  const { isLoading } = useGetTweetsQuery(undefined)
  const [deleteTweet] = useDeleteTweetMutation()
  const [openNewTweet, setOpenNewTweet] = useState(false)
  const [updateTweet, setUpdateTweet] = useState({
    open: false,
    tweetId: "",
  })

  const handleSetUpdate = async (tweetId: string | undefined) => {
    if (!tweetId) return
    setUpdateTweet({ open: true, tweetId })
  }

  const handleDelete = async (tweetId: string | undefined) => {
    if (!tweetId) return
    deleteTweet({ tweetId })
  }

  const computeTweetUI = () => {
    if (isLoading) {
      return <Loading />
    } else if (!!tweets.length) {
      return tweets.map((tweet: TTweets) => (
        <TweetCard
          key={tweet.id}
          tweet={tweet}
          handleDelete={handleDelete}
          handleUpdate={handleSetUpdate}
        />
      ))
    } else {
      return <NoData message="No tweets available" />
    }
  }

  return (
    <Container sx={{ mt: "7em" }}>
      <Box sx={{ my: 2 }}>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {computeTweetUI()}
        </Grid>

        <AddTweet handleClick={() => setOpenNewTweet(!openNewTweet)} />

        <CreateTweet
          open={openNewTweet}
          handleClose={() => setOpenNewTweet(false)}
        />
        {updateTweet.open && (
          <UpdateTweet
            open={updateTweet.open}
            tweet={tweets.find((tweet: TTweets) => tweet.id === updateTweet.tweetId)}
            handleClose={() => setUpdateTweet({ open: false, tweetId: "" })}
          />
        )}
      </Box>
    </Container>
  )
}

export default Tweets
