import { Text } from 'react-native';

import Card from './Card';
import Typography from '../util/typography';

const TextContainer = ({ text, style }) => {
  const propStyles = !Array.isArray(style) ? [style || {}] : style;

  return (
    <Card style={propStyles}>
      <Text style={Typography.regularText}>{text}</Text>
    </Card>
  );
};

export default TextContainer;
