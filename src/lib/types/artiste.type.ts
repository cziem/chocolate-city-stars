import { IAddress, ICompany } from "./../interfaces/artiste.interface"

export type TArtiste = {
  id: string
  username: string
  name: string
  email: string
  phone: string
  address: IAddress
  company: ICompany
}
