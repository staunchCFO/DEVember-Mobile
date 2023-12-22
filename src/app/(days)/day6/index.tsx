import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import MarkdownDisplay from '../../../components/day3/MarkdownDisplay'

const description = `
# Tinder Animation

📚 Today's Agenda:
- Tinder Swipe Animation in React Native
`;

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar style="auto" />
      <Stack.Screen options={{ title: "Day 6: Tinder Animation"}} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={'/day6/tinder'} asChild>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Go to Tinder Animation </Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#15141a',
        padding: 20,
        gap: 10,
    },
    button: {
        backgroundColor: '#302e38',
        borderRadius: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'InterSemi',
        color: '#fdfdfd',
        marginVertical: 20
    },
    text: {
        fontSize: 20,
        fontFamily: 'InterSemi',
        padding: 15,
        paddingHorizontal: 25,
        color: '#fdfdfd',
    } 
})

export default SplashScreen