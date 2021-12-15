import { Container, Grid } from "@mui/material"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import axios from "axios"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Gallery = () => {
  const [allPhotos, setAllPhotos] = useState([])
  const { state } = useLocation()

  const getAllAlbums = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${state.id}/photos`
    )
    setAllPhotos(data)
  }

  useEffect(() => getAllAlbums(), [])

  return (
    <Container sx={{ width: "100%", height: "auto", overflowY: "auto" }}>
      <Grid>
        <ImageList variant="masonry" cols={5} gap={8}>
          {allPhotos.map((photo) => (
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
      </Grid>
    </Container>
  )
}

export default Gallery
