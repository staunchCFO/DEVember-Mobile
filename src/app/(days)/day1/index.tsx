import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Day1 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1'}} />
      <Text style={styles.text}>Day 1 Details Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    color: '#9B4521',
    fontSize: 50,
    fontFamily: 'AmaticBold'
  }
})

export default Day1