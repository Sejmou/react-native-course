import { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

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
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        selectionColor={Platform.OS === 'ios' ? '#ddb52f' : null} // yellow selection looks really bad on Android, so...
        cursorColor="#ddb52f" // ... use this for styling cursor on Android - text selection will remain in default OS color unfortunately
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
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#3b021f',
    // for shadow on Android
    elevation: 4,
    // for shadow on iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
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
    color: '#ddb52f',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    marginVertical: 8,
  },
});
