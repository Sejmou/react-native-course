import { TextInput, View, StyleSheet, Platform } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        selectionColor={Platform.OS === 'ios' ? '#ddb52f' : null} // yellow selection looks really bad on Android, so...
        cursorColor="#ddb52f" // ... use this for styling cursor on Android - text selection will remain in default OS color unfortunately
        autoCorrect={false}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 96,
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
