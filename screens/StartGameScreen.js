import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};
export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 96,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#72063c',
    // for shadow on Android
    elevation: 4,
    // for shadow on iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
