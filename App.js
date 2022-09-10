import { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = enteredGoalText => {
    setGoals([
      ...goals,
      { text: enteredGoalText, id: Math.random().toString() }, // use keyExtractor to tell FlatList how to use id as key
    ]);
    setShowModal(false);
  };

  const deleteGoalHandler = id => {
    setGoals(currGoals => currGoals.filter(g => g.id !== id));
  };

  const [showModal, setShowModal] = useState(false);

  console.log(goals);

  return (
    <View style={styles.appContainer}>
      <GoalInput
        visible={showModal}
        onAddGoal={addGoalHandler}
        onCancel={() => setShowModal(false)}
      />
      {goals.length > 0 ? (
        <FlatList
          style={styles.goalsContainer}
          data={goals}
          renderItem={itemData => (
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
            />
          )}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
        />
      ) : (
        <Text style={styles.placeholderText}>No goals yet.</Text>
      )}
      <Button
        title="Add goal"
        color="#5e0acc"
        onPress={() => setShowModal(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    paddingTop: 48,
  },
  placeholderText: {
    marginVertical: 8,
  },
});
