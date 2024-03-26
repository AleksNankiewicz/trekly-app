import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { placeProps } from '@/lib/types/place'

const PlaceItem = ({
  place,
  onPress,
}: {
  place: placeProps
  onPress: () => void
}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      {place.imageUri && (
        <Image style={styles.image} source={{ uri: place.imageUri }} />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  )
}

export default PlaceItem

const styles = StyleSheet.create({
  container: {
    marginVertical: 3,
    height: 80,
    flexDirection: 'row',

    borderRadius: 7,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: 'hidden',
  },
  image: {
    width: '25%',
    height: '100%',
    borderRadius: 7,
    // resizeMode: 'cover',
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
})
