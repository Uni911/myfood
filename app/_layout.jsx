import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import {useFonts} from 'expo-font'
import React, {useState, useEffect} from 'react'

// Preven ss autohiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

const RooyLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../Assets/Fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../Assets/Fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../Assets/Fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../Assets/Fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../Assets/Fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../Assets/Fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../Assets/Fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../Assets/Fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../Assets/Fonts/Poppins-Thin.ttf"),
  });

  //Perform action while screen is loading
  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen name = 'index' options = {{headerShown: false}}
        />
        <Stack.Screen name = '(tabs)' options = {{headerShown: false}}
        />
    </Stack>
)
}

export default RooyLayout
