import { Text,StyleSheet, View , Alert} from 'react-native';
import Title from '../components/Title';
import { useState } from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';

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

function GameScreen({userNumber}) {
    const initGuess = randBetween(minBoundary, maxBoundary, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initGuess);

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
            <View>
                <Text>Higer or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuess.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuess.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
            <View></View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
})
