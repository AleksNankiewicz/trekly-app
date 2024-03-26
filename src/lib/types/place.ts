export type locationProps = {
  lat: string
  lng: string
  address?: string
}

export type placeProps = {
  title: string
  imageUri: string
  address?: string
  location: locationProps
  id: string
}
