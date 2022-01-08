import { Box, Container, Grid } from "@mui/material"
import ArtisteCard from "../../components/Cards/ArtisteCard"
import Loading from "../../components/Loading"
import NoData from "../../components/NoData"
import { TArtiste } from "../../lib/types/artiste.type"
import { useGetArtistsQuery } from "../../store/artistes/artiste.service"

const Home = () => {
  const { data, isLoading } = useGetArtistsQuery()

  const computeArtistsUI = () => {
    if (isLoading) {
      return <Loading />
    } else if (data && !!data.length) {
      return data.map((artiste: TArtiste) => (
        <ArtisteCard key={artiste.id} {...artiste} />
      ))
    } else {
      return <NoData message="No artistes available" />
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
          {computeArtistsUI()}
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
