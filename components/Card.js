import { StyleSheet, View, Dimensions} from 'react-native';
import Colors from '../util/colors';


function Card({children}) {
 return (
    <View style={styles.card}>
        {children}
    </View>
 )
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: deviceWidth < 380 ? 18: 36,
      padding: 16,
      backgroundColor: Colors.primary_300,
      marginHorizontal: 24,
      borderRadius: 8,
      elevation: 4, // for Android
      shadowColor: "black", // shadow properties are for IOS only
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      shadowOpacity: 0.25,
    }
})
