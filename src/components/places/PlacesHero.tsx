import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const heroImgUri =
  'https://firebasestorage.googleapis.com/v0/b/trekly-1335b.appspot.com/o/Default_mountain_in_sunset_1.jpg?alt=media&token=44b37560-10c5-4bdc-8513-59373aeae8b0'
const PlacesHero = () => {
  return (
    <Pressable style={styles.item}>
      {heroImgUri && (
        <Image style={styles.image} source={{ uri: heroImgUri }} />
      )}
    </Pressable>
  )
}

export default PlacesHero

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
})
