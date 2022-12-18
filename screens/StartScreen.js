import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>RESET</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>CONFIRM</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    padding: 16,
    backgroundColor: "#3b021f",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4, // for Android
    shadowColor: "black", // shadow properties are for IOS only
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    textAlign: "center",
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
