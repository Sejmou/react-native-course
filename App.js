import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <View>
        <Text
          style={{
            margin: 16,
            borderWidth: 1,
            borderColor: 'red',
            padding: 16,
          }}
        >
          This Text element is styled with inline styles
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
});
