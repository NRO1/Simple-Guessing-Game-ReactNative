import { StyleSheet, ImageBackground } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={["#3e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/dice.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.bgImage}
      >
        <StartScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  bgImage: {
    opacity: 0.5,
  }
});
