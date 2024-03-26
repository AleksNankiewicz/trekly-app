import { Tabs } from 'expo-router'
import React from 'react'
import { Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import IconButton from '@/components/ui/IconButton'
import GlobalStyles from '@/lib/constants/styles'
export default () => {
  return (
    <>
      {/* <StatusBar style="dark" /> */}
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1f2937',
            borderTopColor: '#262626',
            paddingBottom: 3,
          },

          tabBarActiveTintColor: GlobalStyles.colors.accent500,
          headerTitle: 'Trekly',

          // headerLeft: ({ tintColor }) => {
          //   return <Text>Trekly</Text>
          // },
          headerStyle: {
            backgroundColor: 'white',
            height: 70,
          },
          headerTintColor: 'black',
          headerTitleStyle: {},
          headerRight: ({ tintColor }) => {
            return (
              <IconButton
                size={20}
                icon="notifications"
                onPress={() => {}}
                tintColor=""
                variant="rounded"
                style={{
                  marginRight: 8,
                }}
              />
            )
          },
          headerShadowVisible: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Odkrywaj',
            tabBarIcon: ({ color, size }) => {
              return <MaterialIcons name="explore" size={size} color={color} />
            },
          }}
        />
        <Tabs.Screen
          name="places"
          options={{
            title: 'Miejsca',
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialIcons name="location-on" size={size} color={color} />
              )
            },
          }}
        />
      </Tabs>
    </>
  )
}
