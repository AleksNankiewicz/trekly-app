import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGlobalSearchParams, usePathname } from 'expo-router'
import { placeProps } from '@/lib/types/place'
import { getPlaceById } from '@/lib/actions'
import YourPlace from '@/components/yourPlace/YourPlace'

const screen = () => {
  const params = useGlobalSearchParams()

  const [place, setPlace] = useState<placeProps>()

  useEffect(() => {
    const fetchPlace = async () => {
      const id = params
      const place = await getPlaceById(params.id)
      setPlace(place)
    }
    fetchPlace()
  }, [params])
  //   console.log(place)
  return place && <YourPlace place={place} />
}

export default screen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
  },
})
