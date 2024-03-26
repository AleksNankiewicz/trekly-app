import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useCallback, useLayoutEffect, useState } from 'react'
import MapView, { MapPressEvent, Marker } from 'react-native-maps'
import { useNavigation, useRouter } from 'expo-router'
import IconButton from '@/components/ui/IconButton'
import GlobalStyles from '@/lib/constants/styles'

const map = () => {
  const router = useRouter()
  const navigation = useNavigation()
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number
    lng: number
  }>()
  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  const selectLocationHandler = (event: MapPressEvent) => {
    const lat = event.nativeEvent.coordinate.latitude
    const lng = event.nativeEvent.coordinate.longitude
    setSelectedLocation({ lat: lat, lng: lng })
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'Nie wybrano lokalizacji',
        'Musisz wybrać lokalizacje klikając na mapę!'
      )
      return
    }
    router.navigate({
      pathname: '/places/addPlace',
      params: {
        pickedLat: selectedLocation.lat,
        pickedLng: selectedLocation.lng,
      },
    })
  }, [router, selectedLocation])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          tintColor={GlobalStyles.colors.accent500}
          size={24}
          onPress={savePickedLocationHandler}
        />
      ),
    })
  }, [navigation, savePickedLocationHandler])

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          title="Wybrana Lokalizacja"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  )
}

export default map

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
})
