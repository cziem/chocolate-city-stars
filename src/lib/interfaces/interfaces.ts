export interface ICModalProps {
  open: boolean
  handleClose: React.MouseEventHandler<HTMLButtonElement>
  children: JSX.Element
}

export interface IActionProps {
  payload: any
  type: string
}
