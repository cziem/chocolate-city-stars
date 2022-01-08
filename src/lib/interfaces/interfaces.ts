import { SerializedError } from "@reduxjs/toolkit"
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query"

export interface ICModalProps {
  open: boolean
  handleClose: React.MouseEventHandler<HTMLButtonElement>
  children: JSX.Element
}

export interface IActionProps {
  payload: any
  type: string
}

export interface IResponseSuccess {
  data: any
}

export interface IResponseError {
  error: FetchBaseQueryError | SerializedError
}
