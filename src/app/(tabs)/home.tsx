import { View, Text, FlatList, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import Shortcuts from '@/components/home/Shortcuts'
import BigTripBlock from '@/components/home/BigTripBlock'
import tripsData from '@/lib/data/trips'
import SmallTripBlock from '@/components/home/SmallTripBlock'

const home = () => {
  return (
    // <Redirect href={'/places'} />
    <ScrollView style={styles.container}>
      <Shortcuts />
      <BigTripBlock trip={tripsData[0]} />
      <View style={styles.tripsContainer}>
        <SmallTripBlock trip={tripsData[1]} />
        <SmallTripBlock trip={tripsData[2]} />
      </View>
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  tripsContainer: {
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 4,
    marginTop: 4,
  },
})
