import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = ({ text, id, onDelete }) => {
  return (
    <View style={styles.goalWrapper}>
      <Pressable
        onPress={() => onDelete(id)}
        android_ripple={{ color: '#210644', borderless: true }} // need to set borderLess: true as otherwise ripple "ignores borderRadius"
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
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
