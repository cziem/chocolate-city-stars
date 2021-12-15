import { Box, Container, Fab, Grid } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { MdAdd } from "react-icons/md"
import AddTweet from "../../components/Buttons/AddTweet"
import TweetCard from "../../components/Cards/TweetCard"
import CreateTweet from "../../components/Forms/CreateTweet"
import UpdateTweet from "../../components/Forms/UpdateTweet"

const Tweets = () => {
  const [allTweets, setAllTweets] = useState([])
  const [openNewTweet, setOpenNewTweet] = useState(false)
  const [updateTweet, setUpdateTweet] = useState({
    open: false,
    tweetId: "",
  })

  const getAllTweets = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments "
    )

    setAllTweets(data)
  }

  useEffect(() => getAllTweets(), [])

  const handleNewTweet = () => {}

  const handleSetUpdate = async (tweetId) => {
    setUpdateTweet({ open: true, tweetId })
  }
  const handleUpdate = async (tweetId) => {}

  const handleDelete = async (tweetId) => {
    const result = await axios.delete(`/comments/${tweetId}`)

    if (result.status === 200) {
      // Only update the Tweet list when it's cleared from the server
      const updatedTweetList = allTweets.filter((tweet) => tweet.id !== tweetId)
      setAllTweets(updatedTweetList)
    }
  }

  return (
    <Container>
      <Box sx={{ my: 2 }}>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {!!allTweets.length
            ? allTweets.map((tweet) => (
                <TweetCard
                  key={tweet.id}
                  {...tweet}
                  handleDelete={handleDelete}
                  handleUpdate={handleSetUpdate}
                />
              ))
            : "No tweets available"}
        </Grid>

        <AddTweet handleClick={() => setOpenNewTweet(!openNewTweet)} />

        <CreateTweet
          open={openNewTweet}
          handleClose={() => setOpenNewTweet(false)}
        />
        <UpdateTweet
          open={updateTweet.open}
          handleClose={() => setUpdateTweet({ open: false, tweetId: "" })}
        />
      </Box>
    </Container>
  )
}

export default Tweets
