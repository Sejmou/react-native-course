import { Text, ScrollView } from 'react-native';

import Card from '../../components/Card';
import GuessLogItem from './GuessLogItem';
import Typography from '../../util/typography';

const GuessLogCard = ({ guesses, style }) => {
  const propStyles = !Array.isArray(style) ? [style || {}] : style;

  return (
    <Card style={[propStyles]}>
      <Text style={[Typography.regularText]}>Guesses so far:</Text>
      <ScrollView style={{ width: '100%' }} alwaysBounceVertical={false}>
        {guesses.map((guess, i) => (
          <GuessLogItem
            roundNumber={guesses.length - i}
            key={i}
            guess={guess}
          />
        ))}
      </ScrollView>
    </Card>
  );
};
export default GuessLogCard;
