import { Text, View, StyleSheet} from 'react-native';
import Colors from '../util/colors';

function GuessLog({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listText}>#{roundNumber}</Text>
            <Text style={styles.listText}>Opponent's Guess: {guess} </Text>
        </View>
    )
}

export default GuessLog;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary_300,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.yellow_100,
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    listText: {
        fontSize: 18,
        fontWeight: 'bold'
    }

})