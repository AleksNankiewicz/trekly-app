import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
} from 'expo-image-picker'
import OutlineButton from '../ui/OutlineButton'

const ImagePicker = ({
  onTakeImage,
}: {
  onTakeImage: (imageUri: string) => void
}) => {
  const [pickedImage, setPickedImage] = useState<string | undefined>()

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions()

  const verifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Złe zezwolenia',
        'Musisz udzielić zezwolenie na wykonywanie zdjęć w aplikacji'
      )
      return false
    }
    return true
  }
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions()
    if (!hasPermission) {
      return
    }
    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    })
    setPickedImage(image.assets[0].uri)
    onTakeImage(image.assets[0].uri)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>Nie wybrano zjęcia</Text>
        )}
      </View>
      <OutlineButton icon="camera" onPress={takeImageHandler}>
        Zrób Zdjęcie
      </OutlineButton>
    </View>
  )
}

export default ImagePicker
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#283618', // Set your background color
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    color: '#DDA15E', // Set your placeholder text color
  },
})
