import { Button, CircularProgress, FormGroup, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import CustomModal from "../Modal"
import { TTweets } from "../../lib/types/tweet.type"
import { useUpdateTweetMutation } from "../../store/tweets/tweet.service"


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
} as const

const formStyles = {
  display: "flex",
  flexDirection: "column",
  marginTop: "1em",
} as const

interface IUpdateTweetProps {
  tweet: TTweets;
  open: boolean;
  handleClose: () => void;
}

const UpdateTweet = ({ tweet, open, handleClose }: IUpdateTweetProps) => {
  const initialValues: TTweets = {
    name: tweet.name || "",
    body: tweet.body || "",
  }
  const tweetSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    body: Yup.string().min(2, "Too Short!").required("Required"),
  })
  const [updateTweet, { isLoading }] = useUpdateTweetMutation()

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Box sx={style}>
        <Typography
          sx={{ textAlign: "center" }}
          id="transition-modal-title"
          variant="h6"
          component="h2"
        >
          Update Tweet
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={tweetSchema}
          onSubmit={async ({ name, body }) => {
            await updateTweet({ ...tweet, name, body })
            handleClose()
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            values,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} style={formStyles}>
              <FormGroup sx={{ mb: 2 }}>
                <TextField
                  name="name"
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Title"
                  error={!!errors.name}
                  onChange={handleChange}
                  helperText={errors.name && errors.name}
                />
              </FormGroup>
              <FormGroup sx={{ mb: 2 }}>
                <TextField
                  multiline
                  name="body"
                  minRows={4}
                  value={values.body}
                  onBlur={handleBlur}
                  error={!!errors.body}
                  onChange={handleChange}
                  placeholder="What is on your mind?"
                  helperText={errors.body && errors.body}
                />
              </FormGroup>

              <FormGroup sx={{ mt: 2 }}>
                <Button type="submit">
                  {isLoading ? (
                    <CircularProgress sx={{ color: "#808080" }} />
                  ) : (
                    "Update"
                  )}
                </Button>
              </FormGroup>
            </form>
          )}
        </Formik>
      </Box>
    </CustomModal>
  )
}

export default UpdateTweet
