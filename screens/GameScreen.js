import { View, Text, StyleSheet } from 'react-native';

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TODO</Text>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 96,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#3b021f',
    // for shadow on Android
    elevation: 4,
    // for shadow on iOS
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ddb52f',
    marginVertical: 8,
  },
});
