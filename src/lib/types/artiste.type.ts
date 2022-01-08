import { IAddress, ICompany } from "./../interfaces/artiste.interface"

export type TArtiste = {
  id: string
  username: string
  name: string
  email: string
  phone: string
  website: string
  address: IAddress
  company: ICompany
}

export type TAlbum = {
  id: string
  title: string
  username: string
}
