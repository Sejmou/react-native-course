import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = enteredGoalText => {
    setGoals([
      ...goals,
      { text: enteredGoalText, id: Math.random().toString() }, // use keyExtractor to tell FlatList how to use id as key
    ]);
  };

  const deleteGoalHandler = id => {
    setGoals(currGoals => currGoals.filter(g => g.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      {/* Max mentions in tutorial that we should use "wrapper View" for ScrollView and put ScrollView inside of it
          For me, it seems to work that way though (using slightly different styles) */}
      <FlatList // use this instead of ScrollView to optimize performance; only visible (or soon-to-be-visible) elements are rendered
        style={styles.goalsContainer}
        data={goals}
        renderItem={itemData => (
          <GoalItem
            text={itemData.item.text}
            id={itemData.item.id}
            onDelete={deleteGoalHandler}
          />
        )}
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
  goalsContainer: {
    flex: 1,
  },
});
