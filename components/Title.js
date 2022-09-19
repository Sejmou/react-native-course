import { Text, StyleSheet } from 'react-native';
import Card from './Card';

import Colors from '../util/colors';
import Typography from '../util/typography';

const Title = ({ text }) => {
  return (
    <Card>
      <Text style={[Typography.heading, styles.text]}>{text}</Text>
    </Card>
  );
};
export default Title;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: Colors.accent500,
  },
});
