import { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import CustomTextInput from './CustomTextInput';

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const textInputHandler = text => {
    setEnteredGoalText(text);
  };
  const buttonPressHandler = () => {
    onAddGoal(enteredGoalText);
  };

  return (
    <View style={styles.inputContainer}>
      <CustomTextInput
        onChangeText={textInputHandler}
        placeholder="Your course goal"
      />
      <Button title="Add Goal" onPress={buttonPressHandler} />
    </View>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
});
