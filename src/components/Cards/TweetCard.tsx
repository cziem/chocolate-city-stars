import { Box } from "@mui/material"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { MdDelete, MdEdit } from "react-icons/md"
import "./card.styles.scss"
import { TTweets } from "../../lib/types/tweet.type"

interface ITCProps {
  handleUpdate: (id: string | undefined) => void;
  handleDelete: (id: string | undefined) => void;
  tweet: TTweets
}

const TweetCard = ({ handleDelete, handleUpdate, tweet }: ITCProps) => {
  return (
    <Card sx={{ mb: 3 }} className="card-main">
      <CardContent>
        <Typography
          sx={{ textTransform: "capitalize" }}
          variant="h6"
          component="div"
        >
          {tweet.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          by {tweet.email ? tweet.email.toLowerCase() : "guest artist"}
        </Typography>
        <Typography variant="body2">{tweet.body}</Typography>
      </CardContent>
      <CardActions
        className="card-actions"
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Box className="action-btns">
          <MdEdit onClick={() => handleUpdate(tweet.id)} />
          <MdDelete onClick={() => handleDelete(tweet.id)} />
        </Box>
      </CardActions>
    </Card>
  )
}

export default TweetCard
