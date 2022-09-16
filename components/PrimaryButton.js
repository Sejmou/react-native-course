import { View, Text } from 'react-native';

// TODO: make this behave like an actual button
const PrimaryButton = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};
export default PrimaryButton;
