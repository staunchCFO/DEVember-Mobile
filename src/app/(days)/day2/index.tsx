import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const Day2 = () => {
  return (
    <View style={styles.page}>
      <StatusBar style="light" />
      <Stack.Screen options={{ headerShown: false}} />
      <Text style={styles.title}>Day 2 Details Screen</Text>

      <Link href={'/day2/onboarding'} asChild>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Go to Onboarding</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#15141a',
        padding: 20
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

export default Day2