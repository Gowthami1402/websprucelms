import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Explore from '../screens/Explore';
import ExploreDetails from '../screens/ExploreDetails';
import Checkout from '../components/Checkout';
import CourseDetails from '../screens/CourseDetals';
import MyCourse from '../screens/MyCourse';
import Profile from '../screens/Profile';
import ChangePassword from '../screens/ChangePassword';
import AccountSetting from '../screens/AccountSetting.';
const Stack = createNativeStackNavigator();
function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="."
        component={HomeScreen}
      />
      <Stack.Screen
        name="Mycourse"
        component={MyCourse}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen
        name="Explore"
        component={Explore}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="ExploreDetails"
        component={ExploreDetails}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}

        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name="Your Profile"
        component={AccountSetting}
        options={{
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Change Password"
        component={ChangePassword}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
