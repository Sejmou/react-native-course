import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ text, index, onDelete }) => {
  return (
    <Pressable onPress={() => onDelete(index)}>
      <View style={styles.goalWrapper}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
};
export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    padding: 8,
    color: 'white',
  },
  goalWrapper: {
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: '#5e0acc',
  },
});
