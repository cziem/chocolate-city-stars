import { CardMedia } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { Link } from "react-router-dom"

const AlbumCard = ({ id, title, username }) => {
  return (
    <Card sx={{ minWidth: 275, width: "31.5%", mb: 3 }}>
      <CardMedia
        component="img"
        height="160"
        image="https://via.placeholder.com/400/56a8c2"
        alt="green iguana"
      />
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {title}
        </Typography>
        <Link
          to={`/albums/@${username}/${id}`}
          state={{ id: id }}
          sx={{ fontSize: 14 }}
          color="text.secondary"
        >
          See Photos
        </Link>
      </CardContent>
    </Card>
  )
}

export default AlbumCard
