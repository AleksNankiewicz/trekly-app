import { StatusBar } from 'react-native'

import { Slot, SplashScreen, Stack } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { init } from '@/lib/database'

export default function Layout() {
  const [dbInitialized, setDbInitialized] = useState(false)

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true)
      })
      .catch((err: any) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    if (dbInitialized) {
      SplashScreen.hideAsync()
    } else {
      SplashScreen.preventAutoHideAsync()
    }
  }, [dbInitialized])
  StatusBar.setBarStyle('dark-content', true)

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <Stack
        screenOptions={
          {
            // headerStyle: {
            //   backgroundColor: '#27291c',
            // },
            // headerTintColor: '#FEFAE0',
            // headerTitle: 'adwad',
          }
        }
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerTitle: 'adwad',
          }}
        />
        <Stack.Screen
          name="places/addPlace"
          options={{
            presentation: 'modal',
            // headerShown: false,
            headerTitle: 'Dodaj miejsce',
          }}
        />
        <Stack.Screen
          name="places/map"
          options={{
            presentation: 'modal',
            // headerShown: false,
            headerTitle: 'Mapa',
          }}
        />
      </Stack>
    </>
  )
}
