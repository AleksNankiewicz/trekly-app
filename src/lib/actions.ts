import { fetchPlaces } from './database'

export const getPlaceById = async (id: string | string[]) => {
  const places = await fetchPlaces()

  const place = places.find((place) => place.id == id)
  return place
}
