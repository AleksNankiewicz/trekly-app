import { View, Text, Alert, StyleSheet, Image } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import OutlineButton from '../ui/OutlineButton'
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from 'expo-location'
import {
  useFocusEffect,
  useGlobalSearchParams,
  useNavigation,
  useRouter,
} from 'expo-router'
import { useIsFocused } from '@react-navigation/native'
import { getAddress, getMapPreview } from '@/lib/location'
import { locationProps } from '@/lib/types/place'
const LocationPicker = ({
  onPickLocation,
}: {
  onPickLocation: (location: { lat: string; lng: string }) => void
}) => {
  const [pickedLocation, setPickedLocation] = useState<any>()

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions()

  const isFocused = useIsFocused()

  const router = useRouter()
  const globalParams = useGlobalSearchParams()
  // console.log(globalParams)
  const mapPickedLocation = globalParams && {
    lat: globalParams.pickedLat,
    lng: globalParams.pickedLng,
  }

  useEffect(() => {
    if (isFocused && globalParams) {
      const mapPickedLocation = globalParams && {
        lat: globalParams.pickedLat,
        lng: globalParams.pickedLng,
      }
      setPickedLocation(mapPickedLocation)
    }
  }, [globalParams, isFocused])

  useEffect(() => {
    const handleLocation = async () => {
      if (pickedLocation) {
        const address = await getAddress(pickedLocation.lat, pickedLocation.lng)
        onPickLocation({ ...pickedLocation, address: address })
      }
    }
    handleLocation()
  }, [pickedLocation, setPickedLocation])

  const verifyPermissions = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Złe zezwolenia',
        'Musisz udzielić zezwolenie na pobieranie lokalizacji w aplikacji'
      )
      return false
    }
    return true
  }
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions()
    if (!hasPermission) {
      return
    }
    const location = await getCurrentPositionAsync()

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
  }
  const pickOnMapHandler = () => {
    router.navigate('places/map')
  }

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {pickedLocation && pickedLocation.lat && pickedLocation.lng ? (
          <Image
            style={styles.mapPreviewImage}
            source={{
              uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
            }}
          />
        ) : (
          <Text>Nie wybrano jeszcze lokalizacji</Text>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <OutlineButton icon="location" onPress={getLocationHandler}>
          Znajdź mnie
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickOnMapHandler}>
          Wybierz na mapie
        </OutlineButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // Add container styles if needed
  },
  mapContainer: {
    width: '100%',
    height: 200,
    marginVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDA15E', // Example background color
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mapPreviewImage: {
    width: '100%',
    height: '100%',
  },
})

export default LocationPicker
