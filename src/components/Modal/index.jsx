import React from "react"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Backdrop from "@mui/material/Backdrop"

const CustomModal = ({ open, handleClose, children }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{children}</Fade>
      </Modal>
    </div>
  )
}

export default CustomModal
