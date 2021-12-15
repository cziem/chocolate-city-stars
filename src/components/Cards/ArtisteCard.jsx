import { Collapse, Link } from "@mui/material"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { ImEarth } from "react-icons/im"
import { MdEmail, MdPhoneIphone } from "react-icons/md"

const ArtisteCard = ({
  name,
  username,
  phone,
  email,
  website,
  address,
  company,
}) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleMore = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ minWidth: 275, width: "31.5%", mb: 3 }}>
      <CardContent>
        <Link
          href={`/albums/@${username}`}
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          Album Details
        </Link>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          @{username}
        </Typography>
        <Typography variant="body2">
          <MdEmail /> <span>{email}</span>
        </Typography>
        <Typography variant="body2">
          <MdPhoneIphone /> <span>{phone}</span>
        </Typography>
        <Typography variant="body2">
          <ImEarth /> <span>{website}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleMore}>
          See More
        </Button>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="caption">Address:</Typography>
          <Typography variant="body2" color="text.secondary">
            {address.street}, {address.suite}, {address.city}.
          </Typography>
          <br />
          <Typography variant="caption">Company:</Typography>
          <Typography variant="body2" color="text.secondary">
            {company.name} - <em>{company.catchPhrase}</em>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default ArtisteCard
