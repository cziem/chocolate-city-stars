import { Box, Container, Grid } from "@mui/material"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import AddTweet from "../../components/Buttons/AddTweet"
import TweetCard from "../../components/Cards/TweetCard"
import CreateTweet from "../../components/Forms/CreateTweet"
import UpdateTweet from "../../components/Forms/UpdateTweet"
import Loading from "../../components/Loading"
import NoData from "../../components/NoData"
import {
  useDeleteTweetMutation,
  useGetTweetsQuery,
} from "../../store/tweets/tweet.services"

const Tweets = () => {
  const { tweets } = useSelector(({ tweet }) => tweet)
  const { isLoading } = useGetTweetsQuery()
  const [deleteTweet] = useDeleteTweetMutation()
  const [openNewTweet, setOpenNewTweet] = useState(false)
  const [updateTweet, setUpdateTweet] = useState({
    open: false,
    tweetId: "",
  })

  const handleSetUpdate = async (tweetId) => {
    setUpdateTweet({ open: true, tweetId })
  }

  const handleDelete = async (tweetId) => deleteTweet({ tweetId })

  const computeTweetUI = () => {
    if (isLoading) {
      return <Loading />
    } else if (!!tweets.length) {
      return tweets.map((tweet) => (
        <TweetCard
          key={tweet.id}
          {...tweet}
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
            tweet={tweets.find((tweet) => tweet.id === updateTweet.tweetId)}
            handleClose={() => setUpdateTweet({ open: false, tweetId: "" })}
          />
        )}
      </Box>
    </Container>
  )
}

export default Tweets
