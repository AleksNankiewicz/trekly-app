import { View, Text, ScrollView } from 'react-native'
import React, { useCallback, useState } from 'react'
import Input from '../ui/Input'
import ImagePicker from './ImagePicker'
import LocationPicker from './LocationPicker'
import Button from '../ui/Button'
import { insertPlaces } from '@/lib/database'
import { placeProps } from '@/lib/types/place'
import generateUUID from '@/utils/generateUUID'
import { router } from 'expo-router'
// import 'react-native-get-random-values'
// import { v4 as uuidv4 } from 'uuid'
const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState<string>('')

  const [selectedImage, setSelectedImage] = useState('')
  const [pickedLocation, setPickedLocation] = useState<{
    lat: string
    lng: string
    address?: string
  }>()
  const changeTitleHandler = (enteredText: string) => {
    setEnteredTitle(enteredText)
    // console.log(enteredText)
  }

  const takeImageHandler = (imageUri: string) => {
    setSelectedImage(imageUri)
  }

  const pickLocationHandler = useCallback(
    (location: { lat: string; lng: string }) => {
      setPickedLocation(location)
    },
    []
  )

  const savePlaceHandler = async () => {
    const place: placeProps = {
      title: enteredTitle,
      imageUri: selectedImage,
      // address: '',
      location: pickedLocation,
      id: generateUUID(),
    }

    // return console.log(place)
    await insertPlaces(place)
    router.navigate('/places')
  }

  return (
    <ScrollView style={{ paddingHorizontal: 4, gap: 3 }}>
      <Input
        label="Tytuł"
        inputConfig={{
          onChangeText: changeTitleHandler,
          value: enteredTitle,
        }}
        style={{
          marginHorizontal: 2,
        }}
      />
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler} style={{}}>
        Dodaj Miejsce
      </Button>
    </ScrollView>
  )
}

export default PlaceForm
