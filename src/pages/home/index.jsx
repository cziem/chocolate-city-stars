import { Box, Container, Grid } from "@mui/material"
import axios from "axios"
import React, { useEffect, useState } from "react"
import ArtisteCard from "../../components/Cards/ArtisteCard"

const Home = () => {
  const [allArtists, setAllArtists] = useState([])

  const getAllArtists = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users "
    )

    setAllArtists(data)
  }

  useEffect(() => getAllArtists(), [])

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
          {!!allArtists.length
            ? allArtists.map((artiste) => (
                <ArtisteCard key={artiste.id} {...artiste} />
              ))
            : "No artistes available"}
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
