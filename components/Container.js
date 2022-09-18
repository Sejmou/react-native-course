import { View, StyleSheet } from 'react-native';

const Container = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};
export default Container;

const styles = StyleSheet.create({
  container: {
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
});
