import { View, Text, Pressable, StyleSheet } from 'react-native';

// TODO: make this behave like an actual button
const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('press');
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          Platform.OS === 'ios' && pressed
            ? [styles.innerContainer, styles.pressed] // this is required to give visual button press feedback on iOS
            : styles.innerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.text}>{children}</Text>
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
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, // Android only
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
