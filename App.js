import { useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './util/colors';

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
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen} // applied to View wrapping Image in internal implementation of ImageBackground
        imageStyle={styles.backgroundImage}
      >
        {/* Content wrapped by SafeAreaView will not be covered by Notch/Status Bar on iOS
            Workaround is required for Android, see below */}
        <SafeAreaView style={[styles.rootScreen, styles.androidSafeArea]}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  androidSafeArea: {
    // workaround for SafeAreaView on Android (https://stackoverflow.com/questions/51289587/how-to-use-safeareaview-for-android-notch-devices)
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
