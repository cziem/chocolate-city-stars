import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import axios from "axios"
import * as React from "react"
import { MdDelete, MdEdit } from "react-icons/md"

const TweetCard = ({ handleDelete, handleUpdate, ...tweet }) => {
  return (
    <Card sx={{ minWidth: 275, width: "31.5%", mb: 3 }}>
      <CardContent>
        <Typography
          sx={{ textTransform: "capitalize" }}
          variant="h6"
          component="div"
        >
          {tweet.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          by {tweet.email.toLowerCase()}
        </Typography>
        <Typography variant="body2">{tweet.body}</Typography>
      </CardContent>
      <CardActions>
        <MdEdit onClick={() => handleUpdate(tweet.id)} />
        <MdDelete onClick={() => handleDelete(tweet.id)} />
      </CardActions>
    </Card>
  )
}

export default TweetCard
