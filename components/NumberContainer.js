import { View, Text, StyleSheet } from 'react-native';
import Colors from '../util/colors';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numTetx}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellow_100,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numTetx: {
        color: Colors.yellow_100,
        fontSize: 36,
        fontWeight: 'bold',

    }
})