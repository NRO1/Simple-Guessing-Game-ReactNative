import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from "./screens/GameScreen";
import { useState } from 'react';
import Colors from "./util/colors";
import GameOverScreen from "./screens/GameOverScreen";
//import { useFonts } from 'expo-font';
//import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [rounds, setRounds] = useState(0);

  /*DEPRICATED
  const [fontsLoaded] = useFonts({
    'opne-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }*/

  function StartNewGame() {
    setUserNumber(null);
    setRounds(0);
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numOfRounds) {
    setGameOver(true);
    setRounds(numOfRounds)
  }

  let screen = <StartScreen onPickedNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={rounds} onStartNewGame={StartNewGame} />
  }



  return (
    <LinearGradient style={styles.rootScreen} colors={[Colors.primary_250, Colors.yellow_100]}>
      <ImageBackground
        source={require("./assets/dice.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.bgImage}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.1,
  }
});
