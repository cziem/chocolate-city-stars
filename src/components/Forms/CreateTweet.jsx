import { Button, FormGroup, TextField } from "@mui/material"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Formik } from "formik"
import * as React from "react"
import * as Yup from "yup"
import CustomModal from "../Modal"

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

const CreateTweet = ({ open, handleClose }) => {
  const initialValues = {
    title: "",
    body: "",
  }
  const tweetSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    body: Yup.string().min(2, "Too Short!").required("Required"),
  })

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <Box sx={style}>
        <Typography
          sx={{ textAlign: "center" }}
          id="transition-modal-title"
          variant="h6"
          component="h2"
        >
          Create New Tweet
        </Typography>

        <Formik
          initialValues={initialValues}
          validationSchema={tweetSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values)
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
                  name="title"
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={!!errors.title}
                  touched={touched}
                  helperText={errors.title && errors.title}
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
                <Button type="submit">Submit</Button>
              </FormGroup>
            </form>
          )}
        </Formik>
      </Box>
    </CustomModal>
  )
}

export default CreateTweet
