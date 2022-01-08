import { Container, Grid } from "@mui/material"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import React from "react"
import { useLocation } from "react-router-dom"
import { TPhoto } from "../../lib/types/tweet.type"
import { useGetPhotosQuery } from "../../store/artistes/artiste.service"
import Loading from "../Loading"
import NoData from "../NoData"


const Gallery = () => {
  const { state } = useLocation()
  const { data, isLoading } = useGetPhotosQuery(state.id)

  const computePhotosUI = () => {
    if (isLoading) {
      return <Loading />
    } else if (data && !!data.length) {
      return (
        <ImageList variant="masonry" cols={5} gap={8}>
          {data.map((photo: TPhoto) => (
            <ImageListItem key={photo.id}>
              <img
                src={`${photo.url}?w=248&fit=crop&auto=format`}
                srcSet={`${photo.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={photo.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )
    } else {
      return <NoData message="No photos available" />
    }
  }

  return (
    <Container
      sx={{ width: "100%", height: "auto", overflowY: "auto", mt: "4em" }}
    >
      <Grid>{computePhotosUI()}</Grid>
    </Container>
  )
}

export default Gallery
