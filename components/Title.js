import { Text, StyleSheet } from 'react-native';
import Card from './Card';

import Colors from '../util/colors';

const Title = ({ text }) => {
  return (
    <Card>
      <Text style={styles.text}>{text}</Text>
    </Card>
  );
};
export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.accent500,
  },
});
