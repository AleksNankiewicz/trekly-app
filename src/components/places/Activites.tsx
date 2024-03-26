import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import activitesData from '@/lib/data/activites'
import Activity from './Activity'

const Activites = () => {
  return (
    <View style={styles.container}>
      {activitesData.map((activity, index) => (
        <Activity activity={activity} key={index} />
      ))}
    </View>
  )
}

export default Activites

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 3,
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 80,
    marginVertical: 4,
    marginHorizontal: 4,
  },
})
