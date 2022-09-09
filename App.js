import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  FlatList,
} from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = text => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    setGoals([
      ...goals,
      // as we use FlatList, we need to provide a key prop here
      { text: enteredGoalText, key: Math.random().toString() },
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
        renderItem={itemData => (
          <View style={styles.goalWrapper}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
          </View>
        )}
        alwaysBounceVertical={false} // disables "bouncing" effect while scrolling if FlatList height hasn't exceeded its container's height yet
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, //appContainer is "implicitly wrapped" by yet another flex container; set flex to 1 -> takes whole device height
    paddingHorizontal: 16,
    paddingTop: 32,
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
  goalText: {
    //borderRadius: 8, // this does NOT work on iOS, need to apply to wrapping View
    // marginVertical: 8,
    // backgroundColor: '#5e0acc',
    padding: 8,
    color: 'white', // can't set this on wrapper, as styles do NOT cascade (i.e. they don't apply to all children of a given element)
  },
  goalWrapper: {
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#5e0acc',
  },
});
