import { useState } from 'react';
import { StyleSheet, View, Button, Modal } from 'react-native';
import CustomTextInput from './CustomTextInput';

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const textInputHandler = text => {
    setEnteredGoalText(text);
  };
  const addHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal
      animationType="slide"
      statusBarTranslucent // without that Modal was not covering whole screen on Android for some reason (offset from top)
      visible={visible}
    >
      <View style={styles.inputContainer}>
        <CustomTextInput
          onChangeText={textInputHandler}
          placeholder="Your course goal"
          value={enteredGoalText}
        />
        <View style={styles.actions}>
          <Button
            color="#b180f0"
            title="Add"
            disabled={!enteredGoalText}
            onPress={addHandler}
          />
          <View style={styles.rightButton}>
            <Button color="#f31282" title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: '#5e0acc',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  actions: {
    marginTop: 16,
    flexDirection: 'row',
  },
  rightButton: {
    marginLeft: 16,
  },
});
