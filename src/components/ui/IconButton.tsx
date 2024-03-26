import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import GlobalStyles from '@/lib/constants/styles'
type IoniconsName = keyof typeof Ionicons.glyphMap
const IconButton = ({
  onPress,
  icon,
  size,
  tintColor,
  backgroundColor,
  variant = 'default',
  style,
}: {
  onPress: () => void
  icon: IoniconsName
  size: number
  tintColor?: string
  backgroundColor?: string
  variant?: 'default' | 'rounded'
  style?: StyleProp<ViewStyle>
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        variant === 'default' ? styles.default : styles.rounded,
        backgroundColor && { backgroundColor: backgroundColor },
        style && style,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons
        name={icon}
        size={size}
        color={tintColor ? tintColor : '#eee'}
      />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '',
    padding: 8,
    borderRadius: 5,
  },
  rounded: {
    backgroundColor: GlobalStyles.colors.accent500,
    borderRadius: 5,
    padding: 8,
  },
  pressed: {
    opacity: 0.7,
  },
})
