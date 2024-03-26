import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Shortcut = () => {
  return (
    <View style={styles.item}>
      <Pressable style={styles.button}></Pressable>
    </View>
  )
}

export default Shortcut

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 6,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {},
})
