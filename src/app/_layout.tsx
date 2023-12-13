import { Stack } from "expo-router";
import React from 'react';
import { useFonts, Inter_900Black, Inter_600SemiBold, Inter_400Regular } from "@expo-google-fonts/inter";
import { AmaticSC_400Regular, AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc'
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AnimatedSplashScreen from "../components/day4/AnimatedSplashScreen";

export default function RootLayout() {
    const [ appReady, setAppReady] = React.useState(false);
    const [splashAnimationFinished, setSplashAnimationFinished] = React.useState(false);

    const [fontLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        InterRegular: Inter_400Regular,
        InterSemi: Inter_600SemiBold,
        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold
    });

    React.useEffect(() => {
        if (fontLoaded || fontError) {
            setAppReady(true)
        }
    }, [fontLoaded, fontError]);

    const showAnimatedSplash = !appReady || !splashAnimationFinished;
    if (showAnimatedSplash) {
        return (
        <AnimatedSplashScreen
            onAnimationFinish={(isCancelled) => {
            if (!isCancelled) {
                setSplashAnimationFinished(true);
            }
            }}
        /> 
        );
    }


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{}}>
                <Stack.Screen name="index" options={{ title: 'DEVember'}} />
            </Stack>
        </GestureHandlerRootView>
    )
}