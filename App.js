import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = text => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    setGoals([
      ...goals,
      { text: enteredGoalText, id: Math.random().toString() }, // use keyExtractor to tell FlatList how to use id as key
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      {/* Max mentions in tutorial that we should use "wrapper View" for ScrollView and put ScrollView inside of it
          For me, it seems to work that way though (using slightly different styles) */}
      <FlatList // use this instead of ScrollView to optimize performance; only visible (or soon-to-be-visible) elements are rendered
        style={styles.goalsContainer}
        data={goals}
        renderItem={itemData => <GoalItem text={itemData.item.text} />}
        keyExtractor={item => item.id} // tells FlatList what value to use as key
        alwaysBounceVertical={false} // disables "bouncing" effect while scrolling if FlatList height hasn't exceeded its container's height yet
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, //appContainer is "implicitly wrapped" by yet another flex container; set flex to 1 -> takes whole device height
    paddingHorizontal: 16,
    paddingTop: 48,
  },
  inputContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    flex: 2,
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 1,
  },
});
