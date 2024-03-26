import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native'
import React from 'react'

const Input = ({
  label,
  inputConfig,
  labelStyle,
  inputStyle,
  style,
}: {
  label?: string
  inputConfig?: TextInputProps
  labelStyle?: StyleProp<TextStyle>
  inputStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
}) => {
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInput {...inputConfig} style={[styles.input, inputStyle]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  label: {
    color: '#DDA15E',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#27291c',
    borderRadius: 8,
    color: '#FEFAE0',
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDA15E',
  },
})

export default Input
