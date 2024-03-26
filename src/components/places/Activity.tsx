import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { activityProps } from '@/lib/types/activity'

const Activity = ({ activity }: { activity: activityProps }) => {
  return (
    <Pressable style={styles.item}>
      {activity.imageUri && (
        <Image style={styles.image} source={{ uri: activity.imageUri }} />
      )}
      <View style={styles.darker}></View>
      <Text style={styles.title}>{activity.title}</Text>
    </Pressable>
  )
}

export default Activity

const styles = StyleSheet.create({
  item: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 2,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  darker: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    opacity: 0.4,
  },
})
