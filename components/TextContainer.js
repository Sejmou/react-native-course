import { Text, StyleSheet } from 'react-native';

import Card from './Card';

const TextContainer = ({ text, style }) => {
  const propStyles = !Array.isArray(style) ? [style || {}] : style;

  return (
    <Card style={propStyles}>
      <Text style={styles.text}>{text}</Text>
    </Card>
  );
};

export default TextContainer;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
});
