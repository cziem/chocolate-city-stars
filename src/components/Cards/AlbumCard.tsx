import { CardMedia } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { TAlbum } from "../../lib/types/artiste.type"
import "./card.styles.scss"

const AlbumCard = ({id, title, username}: TAlbum) => {
  return (
    <Card sx={{ mb: 3 }} className="card-main">
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
          style={{ fontSize: 14 }}
          color="text.secondary"
        >
          See Photos
        </Link>
      </CardContent>
    </Card>
  )
}

export default AlbumCard
