import { Button, CircularProgress, FormGroup, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import * as React from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import CustomModal from "../Modal"
import { useUpdateTweetMutation } from "../../store/tweets/tweet.services"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
}

const formStyles = {
  display: "flex",
  flexDirection: "column",
  marginTop: "1em",
}

const UpdateTweet = ({ tweet, open, handleClose }) => {
  const initialValues = {
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
            touched,
            handleBlur,
            handleChange,
            values,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit} style={formStyles}>
              <FormGroup sx={{ mb: 2 }}>
                <TextField
                  placeholder="Title"
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.name}
                  touched={touched}
                  helperText={errors.name && errors.name}
                />
              </FormGroup>
              <FormGroup sx={{ mb: 2 }}>
                <TextField
                  name="body"
                  placeholder="What is on your mind?"
                  multiline
                  minRows={4}
                  value={values.body}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.body}
                  touched={touched}
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
