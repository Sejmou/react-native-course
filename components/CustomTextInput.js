import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
    ></TextInput>
  );
};
export default CustomTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    flex: 2,
    marginRight: 8,
    padding: 8,
  },
});
