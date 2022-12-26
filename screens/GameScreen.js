import { Text, StyleSheet, View, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import Colors from "../util/colors";
import { Ionicons } from "@expo/vector-icons";
import GuessLog from "../components/GuessLog";

function randBetween(min, max, exclude) {
  const rnd = Math.floor(Math.random() * (max - min)) + min;

  if (rnd === exclude) {
    return randBetween(min, max, exclude);
  } else {
    return rnd;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initGuess = randBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initGuess);
  const [guessRounds, setGuessRounds] = useState([initGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuess(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!!!", "You know that this is wrong...", [
        { text: "OK", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRnd = randBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRnd);
    setGuessRounds((prevGuessRound) => [newRnd, ...prevGuessRound]);
  }

  const listLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.instructionsText}>Higer or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuess.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/*{guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)}*/}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <GuessLog roundNumber={listLength - itemData.index} guess={itemData.item} />}
          keyExtractor={(item) => item}  
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionsText: {
    color: Colors.yellow_100,
    fontSize: 24,
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});
