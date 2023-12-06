import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, FlatList, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import DayListitem from '../components/core/DayListitem';

const days = [...Array(24)].map((_, index) => index + 1);

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        data={days}
        renderItem={({ item }) => (
          <DayListitem dayNumber={item} />
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 0 : 0
  },
  content: {
    gap: 10,
    padding: 10
  },
  column: {
    gap: 10
  }
});
