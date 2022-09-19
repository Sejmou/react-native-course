import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Title from '../components/Title';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../util/colors';
import utilStyles from '../util/styles';

const GameScreen = ({ userNumber, onGameOver }) => {
  const lowerBoundary = useRef(1);
  const upperBoundary = useRef(100);
  const attempts = useRef(1);

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomInteger(
      lowerBoundary.current,
      upperBoundary.current,
      userNumber
    )
  );

  useEffect(() => {
    if (currentGuess === userNumber)
      Alert.alert(
        'Game Over!',
        `Your imaginary friend has won. It took them ${attempts.current} attempts to guess your number.`,
        [{ onPress: onGameOver() }]
      );
  }, [currentGuess, userNumber]);

  const nextGuessHandler = direction => {
    if (
      (currentGuess < userNumber && direction === 'lower') ||
      (currentGuess > userNumber && direction === 'higher')
    ) {
      Alert.alert(
        'Shame on you!',
        `You're being rude to your imaginary friend. They guessed ${direction} than ${userNumber} (the number you chose), but you're telling them to guess even ${direction}.`,
        [{ text: 'Sorry 😢' }]
      );
      return;
    }

    if (direction === 'higher') {
      lowerBoundary.current = currentGuess + 1;
    } else if (direction === 'lower') {
      upperBoundary.current = currentGuess;
    }

    attempts.current++;

    if (lowerBoundary.current === upperBoundary.current) {
      setCurrentGuess(lowerBoundary.current);
      return;
    }

    setCurrentGuess(
      generateRandomInteger(
        lowerBoundary.current,
        upperBoundary.current,
        currentGuess
      )
    );
  };

  return (
    <>
      <Title text="Your imaginary friend's guess:" />
      <Card style={utilStyles.nextColumnSibling}>
        <Text style={styles.guess}>{currentGuess}</Text>
      </Card>
      <Card style={utilStyles.nextColumnSibling}>
        <View style={styles.inputContainer}>
          <PrimaryButton onPress={() => nextGuessHandler('higher')}>
            <Ionicons name="md-add" />
            Greater
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            <Ionicons name="md-remove" />
            Smaller
          </PrimaryButton>
        </View>
      </Card>
    </>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  guess: {
    color: Colors.accent500,
    fontSize: 24,
  },
  question: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainerText: {
    color: 'white',
  },
});

function generateRandomInteger(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomInteger(min, max, exclude);
  } else {
    return rndNum;
  }
}
