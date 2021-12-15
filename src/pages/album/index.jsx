import { Box, Container, Grid } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import AlbumCard from "../../components/Cards/AlbumCard"

const Album = () => {
  const [allAlbums, setAllAlbums] = useState([])
  const { state } = useLocation()

  const getAllAlbums = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${state.artiste.id}/albums`
    )

    setAllAlbums(data)
  }

  useEffect(() => getAllAlbums(), [])

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
          {!!allAlbums.length
            ? allAlbums.map((album) => (
                <AlbumCard
                  key={album.id}
                  {...album}
                  username={state.artiste.username}
                />
              ))
            : "No artistes available"}
        </Grid>
      </Box>
    </Container>
  )
}

export default Album
