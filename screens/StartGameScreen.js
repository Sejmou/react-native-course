import { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  Alert,
  Text,
} from 'react-native';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import TextContainer from '../components/TextContainer';
import Title from '../components/Title';

import Colors from '../util/colors';
import UtilStyles from '../util/styles';
import Typography from '../util/typography';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = enteredText => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert('Invalid input', 'Please enter a number between 1 and 99.', [
        { onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  return (
    <>
      <Title text="Number guesser" />
      <TextContainer
        text="Let an imaginary friend guess a number between 1 and 99 🙃"
        style={UtilStyles.nextColumnSibling}
      />
      <Card style={UtilStyles.nextColumnSibling}>
        <Text style={Typography.regularText}>Enter your pick:</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          selectionColor={Platform.OS === 'ios' ? Colors.accent500 : null} // yellow selection looks really bad on Android, so...
          cursorColor={Colors.accent500} // ... use this for styling cursor on Android - text selection will remain in default OS color unfortunately
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
          onSubmitEditing={confirmInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 48,
    width: 48,
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.accent500,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
  },
});
