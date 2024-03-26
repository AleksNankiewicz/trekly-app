import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { tripProps } from '@/lib/types/trip'

const SmallTripBlock = ({ trip }: { trip: tripProps }) => {
  return (
    <Pressable style={styles.item}>
      {trip.imageUri && (
        <Image style={styles.image} source={{ uri: trip.imageUri }} />
      )}
    </Pressable>
  )
}

export default SmallTripBlock

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 200,
  },
})
