import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <View>
        <Text style={styles.text}>
          This Text element is styled with styles from a Stylesheet object
        </Text>
      </View>
      <Button title="Tap here!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 16,
    borderWidth: 1,
    borderColor: 'red',
    padding: 16,
  },
});
