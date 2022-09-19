import { Text, StyleSheet } from 'react-native';

import Container from './Container';

const TextContainer = ({ text, style }) => {
  const propStyles = !Array.isArray(style) ? [style || {}] : style;

  return (
    <Container style={propStyles}>
      <Text style={styles.text}>{text}</Text>
    </Container>
  );
};

export default TextContainer;

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
});
