import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import MarkdownDisplay from '../../../components/day3/MarkdownDisplay'

const description = `
# AirBnB Development

📚 Today's Agenda:
- Creating the AirBnB mapview and property details
`;

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar style="auto" />
      <Stack.Screen options={{ title: "Day 5: AirBnB Screen"}} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={'/day5/airbnb'} asChild>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Go to AirBnB Maps </Text>
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