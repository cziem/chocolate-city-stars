import { Box, Container, Grid } from "@mui/material"
import { useLocation } from "react-router-dom"
import AlbumCard from "../../components/Cards/AlbumCard"
import Loading from "../../components/Loading"
import NoData from "../../components/NoData"
import { useGetAlbumsQuery } from "../../store/artistes/artiste.service"

const Album = () => {
  const { state } = useLocation()
  const { data, isLoading } = useGetAlbumsQuery(state.artiste.id)

  const computeAlbumsUI = () => {
    if (isLoading) {
      return <Loading />
    } else if (!!data.length) {
      return data.map((album) => (
        <AlbumCard
          key={album.id}
          {...album}
          username={state.artiste.username}
        />
      ))
    } else {
      return <NoData message="No albums available" />
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
          {computeAlbumsUI()}
        </Grid>
      </Box>
    </Container>
  )
}

export default Album
