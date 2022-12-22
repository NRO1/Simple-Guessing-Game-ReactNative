import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../util/colors";


function StartScreen({onPickedNumber}) {
  const [enteredNumber, setEneterdNumber] = useState("");

  function inputHandler(enteredNumber) {
    setEneterdNumber(enteredNumber);
  }

  function resetInput() {
    setEneterdNumber("");
  }

  function confirmInput() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "You must enter a number between 0 to 99 only!",
        [{ text: "OK", style: "destructives", onPress: resetInput}]
      );
      return;
    }
    onPickedNumber(chosenNumber)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        s
        autoCapitalize="none"
        autoCorrect="none"
        onChangeText={inputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>RESET</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInput}>CONFIRM</PrimaryButton>
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
    backgroundColor: Colors.primary_300,
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
    borderBottomColor: Colors.yellow_100,
    borderBottomWidth: 2,
    color: Colors.yellow_100,
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
