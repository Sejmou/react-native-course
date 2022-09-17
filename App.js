import { useState } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
  };

  const screen = !userNumber ? (
    <StartGameScreen onPickNumber={pickNumberHandler} />
  ) : (
    <GameScreen />
  );

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen} // applied to View wrapping Image in internal implementation of ImageBackground
        imageStyle={styles.backgroundImage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
