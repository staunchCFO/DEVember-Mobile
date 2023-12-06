import { Stack } from "expo-router";
import React from 'react';
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold
    });

    React.useEffect(() => {
        if (fontLoaded || fontError) {
            SplashScreen.hideAsync()
        }
    }, [fontLoaded, fontError]);

    if (!fontLoaded && !fontError) {
        return null
    }

    return (
        <Stack screenOptions={{}}>
            <Stack.Screen name="index" options={{ title: 'DEVember'}} />
        </Stack>
    )
}