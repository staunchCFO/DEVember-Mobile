import { Text, View, StyleSheet } from 'react-native';

type DayNumber = {
    dayNumber: number
};

const DayListitem = ({dayNumber}: DayNumber) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{dayNumber}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
      backgroundColor: '#F9EDE3',
      flex: 1,
      aspectRatio: 1,
      borderWidth: StyleSheet.hairlineWidth,
      borderRadius: 10,
      borderColor: '#9B4521',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#9B4521',
      fontSize: 70
    }
  });

export default DayListitem;
