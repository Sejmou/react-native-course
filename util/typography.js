import { StyleSheet } from 'react-native';

const Typography = StyleSheet.create({
  regularText: {
    fontFamily: 'open-sans', // imported in useFonts in App.js!
    color: 'white',
    fontSize: 16,
  },
  heading: {
    fontFamily: 'open-sans-bold', // imported in useFonts in App.js!
    fontSize: 32,
    color: 'white',
  },
});

export default Typography;
