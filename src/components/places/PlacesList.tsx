import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { placeProps } from '@/lib/types/place'

import PlaceItem from './PlaceItem'

const PlacesList = ({ places }: { places?: placeProps[] }) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.noPlacesContainer}>
        <Text
          style={{
            fontSize: 16,
            color: 'black',
          }}
        >
          Nie masz jescze żadnych miejsc - dodaj nowe!
        </Text>
      </View>
    )
  }
  // return places.map((place, index) => (
  //   <PlaceItem place={place} onPress={() => {}} key={index} />
  // ))
  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PlaceItem place={item} />}
      />
    </View>
  )
}

export default PlacesList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
  },
  noPlacesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

// return places.map((place, index) => (
//   <PlaceItem place={place} onPress={() => {}} key={index} />
// ))

// return (
//   <FlatList
//     data={places}
//     keyExtractor={(item) => item.id}
//     renderItem={({ item }) => (
//       <PlaceItem place={item} onPress={() => console.log('klik')} />
//     )}
//   />
// )
