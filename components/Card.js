import { View, StyleSheet } from 'react-native';

import Colors from '../util/colors';

const Card = ({ children, style }) => {
  const propStyles = !Array.isArray(style) ? [style || {}] : style;

  return <View style={[styles.card, ...propStyles]}>{children}</View>;
};
export default Card;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
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
