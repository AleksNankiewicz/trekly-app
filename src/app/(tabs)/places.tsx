import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import PlacesList from '@/components/places/PlacesList'
import { useIsFocused } from '@react-navigation/native'
import { placeProps } from '@/lib/types/place'
import { fetchPlaces } from '@/lib/database'
import IconButton from '@/components/ui/IconButton'
import PlacesHero from '@/components/places/PlacesHero'
import Activites from '@/components/places/Activites'
const places = () => {
  const navigation = useNavigation()
  const router = useRouter()

  const isFocused = useIsFocused()

  const [loadedPlaces, setLoadedPlaces] = useState<placeProps[]>()

  useEffect(() => {
    const loadPlaces = async () => {
      const places = await fetchPlaces()
      setLoadedPlaces(places)
    }
    if (isFocused) {
      loadPlaces()
    }
  }, [isFocused])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Twoje Miejsca',
      headerRight: ({ tintColor }) => {
        return (
          <IconButton
            icon="add-sharp"
            onPress={() => router.push('/places/addPlace')}
            size={20}
            style={{
              marginRight: 8,
            }}
          />
        )
      },
    })
  }, [navigation, router])

  return (
    <View
      style={{
        backgroundColor: '',
        flex: 1,
      }}
    >
      <PlacesHero />
      <Activites />
      <PlacesList places={loadedPlaces} />
    </View>
  )
}

export default places
