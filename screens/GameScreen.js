import { Text,StyleSheet, View , Alert} from 'react-native';
import Title from '../components/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import Colors from '../util/colors';

function randBetween( min, max, exclude) {
    const rnd = Math.floor(Math.random() * (max - min)) + min;

    if (rnd === exclude) {
        return randBetween(min,max,exclude)
    } else {
        return rnd;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
    const initGuess = randBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver()
        }
    },[currentGuess, userNumber, onGameOver])

    function nextGuess(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!!!", "You know that this is wrong...",[{ text: 'OK', style: 'cancel'}])
            return
        }   
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRnd = randBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRnd);
    }
 
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <Text style={styles.instructionsText}>Higer or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuess.bind(this, 'greater')}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGuess.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </Card>
        </View>
    )
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
      }
})
