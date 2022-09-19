import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Title from '../../components/Title';
import Card from '../../components/Card';
import PrimaryButton from '../../components/PrimaryButton';
import Colors from '../../util/colors';
import utilStyles from '../../util/styles';
import Typography from '../../util/typography';
import GuessLogCard from './GuessLogCard';

const GameScreen = ({ userNumber, onGameOver }) => {
  const lowerBoundary = useRef(1);
  const upperBoundary = useRef(100);

  const [currentGuess, setCurrentGuess] = useState(
    generateRandomInteger(
      lowerBoundary.current,
      upperBoundary.current,
      userNumber
    )
  );

  const [guesses, setGuesses] = useState([currentGuess]);

  useEffect(() => {
    if (currentGuess === userNumber)
      Alert.alert(
        'Game Over!',
        `Your imaginary friend has won. It took them ${guesses.length} attempts to guess your number.`,
        [{ onPress: onGameOver }]
      );
  }, [currentGuess, userNumber, guesses]);

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
      upperBoundary.current = currentGuess - 1;
    }

    const newGuess =
      lowerBoundary.current === upperBoundary.current
        ? lowerBoundary.current
        : generateRandomInteger(
            lowerBoundary.current,
            upperBoundary.current,
            currentGuess
          );

    setCurrentGuess(newGuess);
    setGuesses([newGuess, ...guesses]);
  };

  return (
    <>
      <Title text="Your imaginary friend's guess:" />
      <Card style={utilStyles.nextColumnSibling}>
        <Text style={[Typography.regularText, styles.guess]}>
          {currentGuess}
        </Text>
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
      <View style={styles.guessesWrapper}>
        <GuessLogCard
          guesses={guesses}
          style={[utilStyles.nextColumnSibling]}
        />
      </View>
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
  guessesWrapper: {
    flex: 1,
    marginBottom: 16,
  },
});

function generateRandomInteger(min, max, exclude) {
  if (min === max) return min;
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;

  if (rndNum === exclude) {
    return generateRandomInteger(min, max, exclude);
  } else {
    return rndNum;
  }
}
