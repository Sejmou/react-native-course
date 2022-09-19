import { useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './util/colors';

// Keep the splash screen visible while we fetch resources (in this case only fonts)
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameRunning, setGameRunning] = useState(false);

  // we should wait for fonts to load before displaying app (show splash screen in the meantime)
  // Max uses expo-app-loading in the tutorial, which is deprecated
  // expo-splash-screen is actually recommended nowadays
  // this is apparently how we can do this
  // see also https://docs.expo.dev/versions/latest/sdk/font/ (Note: I put SplashScreen.preventAutoHideAsync() call into global scope as suggested in documentation)
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const pickNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    setGameRunning(true);
  };

  const gameOverHandler = () => {
    setUserNumber(null);
    setGameRunning(false);
  };

  const screen = gameRunning ? (
    <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  ) : (
    <StartGameScreen onPickNumber={pickNumberHandler} />
  );

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          style={{ flex: 1 }} // applied to View wrapping Image in internal implementation of ImageBackground
          imageStyle={styles.backgroundImage}
        >
          {/* Content wrapped by SafeAreaView will not be covered by Notch/Status Bar on iOS
              Workaround is required for Android, see below */}
          <SafeAreaView style={[styles.rootScreen, styles.androidSafeArea]}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingBottom: 8,
  },
  androidSafeArea: {
    // workaround for SafeAreaView on Android (https://stackoverflow.com/questions/51289587/how-to-use-safeareaview-for-android-notch-devices)
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
