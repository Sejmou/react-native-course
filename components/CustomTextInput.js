import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = inputProps => {
  return <TextInput style={styles.textInput} {...inputProps}></TextInput>;
};
export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#e4d0ff',
    padding: 8,
    backgroundColor: '#e4d0ff',
    borderRadius: 8,
    color: '#120438',
  },
});
