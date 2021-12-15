import { Collapse /* Link */ } from "@mui/material"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { ImEarth } from "react-icons/im"
import { MdEmail, MdPhoneIphone } from "react-icons/md"
import { Link } from "react-router-dom"
import "./card.styles.scss"

const ArtisteCard = ({ ...artiste }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleMore = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ mb: 3 }} className="card-main">
      <CardContent>
        <Link
          to={`/albums/@${artiste.username}`}
          state={{ artiste: artiste }}
          sx={{ fontSize: 14 }}
          className="link-main"
        >
          Album Details
        </Link>
        <Typography variant="h5" component="div">
          {artiste.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          @{artiste.username}
        </Typography>
        <Typography variant="body2">
          <MdEmail />
          <a
            href={`mailto:${artiste.email}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#666666",
              textDecoration: "none",
              textTransform: "lowercase",
              marginLeft: "0.2em",
            }}
          >
            {artiste.email}
          </a>
        </Typography>
        <Typography variant="body2">
          <MdPhoneIphone /> <span>{artiste.phone}</span>
        </Typography>
        <Typography variant="body2">
          <ImEarth />{" "}
          <a
            href={`https://${artiste.website}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#666666" }}
          >
            {artiste.website}
          </a>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ textTransform: "lowercase" }}
          size="small"
          onClick={handleMore}
        >
          See More
        </Button>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="caption">Address:</Typography>
          <Typography variant="body2" color="text.secondary">
            {artiste.address.street}, {artiste.address.suite},{" "}
            {artiste.address.city}.
          </Typography>
          <br />
          <Typography variant="caption">Company:</Typography>
          <Typography variant="body2" color="text.secondary">
            {artiste.company.name} - <em>{artiste.company.catchPhrase}</em>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default ArtisteCard
