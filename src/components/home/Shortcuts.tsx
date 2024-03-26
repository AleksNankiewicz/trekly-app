import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Shortcut from './Shortcut'

const shortcutsData = [
  {
    imgUri: '',
    title: '',
    desc: '',
    label: '',
  },
  {},
  {},
  {},
]

const Shortcuts = () => {
  return (
    <View style={styles.container}>
      <Shortcut />
      <Shortcut />
      <Shortcut />
      <Shortcut />
    </View>
  )
}

export default Shortcuts

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  block: {},
})
