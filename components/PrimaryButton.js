import { View, Text, Pressable, StyleSheet } from 'react-native';

import Colors from '../util/colors';
import Typography from '../util/typography';

// TODO: make this behave like an actual button
const PrimaryButton = ({ children, onPress, style }) => {
  const propStyles = !Array.isArray(style) ? [style || {}] : style;

  return (
    <View style={[styles.outerContainer, ...propStyles]}>
      <Pressable
        style={({ pressed }) =>
          Platform.OS === 'ios' && pressed
            ? [styles.innerContainer, styles.pressed] // this is required to give visual button press feedback on iOS
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={[Typography.regularText, styles.text]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  outerContainer: {
    // For Android ripple effect to not "move outside of border" when using borderRadius, we need that solution with inner and outer containers
    borderRadius: 32, // any large value will do; goal is to get completely round corners
    margin: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, // Android only
  },
  text: {
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
