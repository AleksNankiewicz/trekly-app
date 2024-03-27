import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { placeProps } from '@/lib/types/place'

const YourPlace = ({ place }: { place: placeProps }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: place.imageUri }} />
        <Text style={styles.title}>{place.title}</Text>
      </View>
    </ScrollView>
  )
}

export default YourPlace

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: 'white',
    position: 'absolute',
    bottom: 2,
    fontSize: 28,
    fontWeight: '600',
  },
})
