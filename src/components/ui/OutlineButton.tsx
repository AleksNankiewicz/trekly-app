import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Ionicons } from '@expo/vector-icons'
import GlobalStyles from '@/lib/constants/styles'
type IoniconsName = keyof typeof Ionicons.glyphMap

const OutlineButton = ({
  onPress,
  icon,
  children,
}: {
  onPress: () => void
  icon: IoniconsName
  children: ReactNode
}) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Ionicons
        name={icon}
        size={18}
        color={GlobalStyles.colors.accent500}
        style={styles.icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: GlobalStyles.colors.accent500,
    backgroundColor: GlobalStyles.colors.gray700,
    borderRadius: 5,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: GlobalStyles.colors.accent500,
    fontSize: 16,
  },
})

export default OutlineButton
