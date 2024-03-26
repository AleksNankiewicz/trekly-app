import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tripProps } from '@/lib/types/trip'

const BigTripBlock = ({ trip }: { trip: tripProps }) => {
  return (
    <Pressable style={styles.item}>
      {trip.imageUri && (
        <Image style={styles.image} source={{ uri: trip.imageUri }} />
      )}
    </Pressable>
  )
}

export default BigTripBlock

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '100%',
    height: 200,
  },

  image: {
    width: '100%',
    height: 200,
  },
})
