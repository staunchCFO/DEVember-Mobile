import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';

import DayListitem from './src/components/core/DayListitem';

const days = [...Array(24)].map((_, index) => index + 1);

export default function App() {
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
  },
  content: {
    gap: 10,
    padding: 10
  },
  column: {
    gap: 10
  }
});
