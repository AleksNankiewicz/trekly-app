import { View, Text } from 'react-native'
import React from 'react'
import Input from '@/components/ui/Input'
import PlaceForm from '@/components/places/PlaceForm'

const addPlace = () => {
  return (
    <View
      style={{
        backgroundColor: '#27291c',
        flex: 1,
      }}
    >
      <PlaceForm />
    </View>
  )
}

export default addPlace
