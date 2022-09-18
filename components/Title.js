import { Text, StyleSheet } from 'react-native';
import Container from './Container';

const Title = ({ text }) => {
  return (
    <Container>
      <Text style={styles.text}>{text}</Text>
    </Container>
  );
};
export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ddb52f',
  },
});
