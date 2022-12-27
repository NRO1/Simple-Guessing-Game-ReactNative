import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../util/colors";
import Title from "../components/Title";
import Card from "../components/Card";

function StartScreen({ onPickedNumber }) {
  const [enteredNumber, setEneterdNumber] = useState("");

  const { width, height } = useWindowDimensions();

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
        [{ text: "OK", style: "destructives", onPress: resetInput }]
      );
      return;
    }
    onPickedNumber(chosenNumber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
      <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
        <Title>Guess My Number</Title>
        <Card>
          <Text style={styles.instructionsText}>Enter a number</Text>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
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
        </Card>
      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
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
  instructionsText: {
    color: Colors.yellow_100,
    fontSize: 24,
  },
});
