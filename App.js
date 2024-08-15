import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import HomeScreen from './src/screens/HomeScreen';
// import GuessTheCountryScreen from './src/screens/GuessTheCountryScreen';
// import WinScreen from './src/screens/WinScreen';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigator/>
    </SafeAreaProvider>
  )
};

export default App;