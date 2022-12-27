import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../util/colors';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numTetx}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellow_100,
        borderRadius: 8,
        padding: deviceWidth < 380 ? 12: 24,
        margin: deviceWidth < 380 ? 12: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numTetx: {
        color: Colors.yellow_100,
        fontSize: deviceWidth < 380 ? 28: 36,
    }
})