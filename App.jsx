/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AuthNavigator from './app/navigation/AuthNavigattor';
import {NavigationContainer} from '@react-navigation/native';
import Login from './app/screens/Login';
import Checkout from './app/components/Checkout';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import CourseDetails from './app/screens/CourseDetals';
import Explore from './app/screens/Explore';
import ExploreDetails from './app/screens/ExploreDetails';
import AppNavigator from './app/navigation/AppNavigator';
import ModalContext from './app/context/ModalContext';
// import Profile from './app/screens/Profile';

const Stack = createNativeStackNavigator();

function App() {
  const [openModal, setOpenModal] = useState(null);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ModalContext.Provider value={{openModal, setOpenModal}}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ModalContext.Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
