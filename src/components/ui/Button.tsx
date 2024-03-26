import {
  View,
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native'
import React, { ReactNode } from 'react'

const Button = ({
  onPress,
  children,
  style,
}: {
  onPress: () => void
  children: ReactNode
  style?: StyleProp<ViewStyle>
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text]}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#283618',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 8,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FEFAE0',
  },
})

export default Button
