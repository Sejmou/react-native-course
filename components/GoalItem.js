import { StyleSheet, View, Text } from 'react-native';

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalWrapper}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
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
