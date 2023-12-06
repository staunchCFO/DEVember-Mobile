import { Text, StyleSheet , Pressable} from 'react-native';
import { Link } from 'expo-router';

type DayNumber = {
    dayNumber: number
};

const DayListitem = ({dayNumber}: DayNumber) => {
    return (
        <Link href={`/day${dayNumber}`} asChild>
            <Pressable style={styles.box}>
                <Text style={styles.text}>{dayNumber}</Text>
            </Pressable>
        </Link>
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
      fontSize: 70,
      fontFamily: 'AmaticBold'
    }
  });

export default DayListitem;
