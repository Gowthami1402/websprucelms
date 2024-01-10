import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import MyCourse from './MyCourse';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import {useNavigation} from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import Certificate from './Certificate';
import Explore from './Explore';
import Invoice from './Invoice';
import bcertify from '../assets/bcertify.png';
import certify from '../assets/certify.png';
import bcourse from '../assets/bcourse.png';
import course from '../assets/course.png';
import binvoic from '../assets/binvoic.png';
import invoic from '../assets/invoic.png';
import Profile from './Profile';
import AppNavigator from '../navigation/AppNavigator';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <View style={{flexDirection: 'row'}}>
        <Avatar.Image
          size={55}
          source={require('../assets/shizuka.png')}
          style={{backgroundColor: 'blue', marginRight: 16}}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.username}>Welcome!</Text>
          <Text style={styles.username}>Sinchan...</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const NotificationsScreen = () => {
  return (
    <View style={styles.notificationsContainer}>
      <Fontisto name="bell" size={25} color="black" />
    </View>
  );
};

const Tab = createBottomTabNavigator();
function HomeScreen() {
  const navigation = useNavigation();
  const renderTopBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 40,
          paddingRight: 20,
          paddingLeft: 20,
          backgroundColor: 'whitesmoke',
        }}>
        <ProfileScreen />
        <NotificationsScreen />
      </View>
    );
  };

  const _renderIcon = (routeName, selectedTab) => {
    let iconComponent;
    let iconColor = routeName === selectedTab ? '#757DE8' : 'black';

    switch (routeName) {
      case 'My Course':
        iconComponent =
          routeName === selectedTab ? (
            <Image
              source={bcourse}
              style={{height: 25, width: 25, tintColor: iconColor}}
            />
          ) : (
            <Image
              source={course}
              style={{height: 25, width: 25, tintColor: iconColor}}
            />
          );
        break;
      case 'Certfcate':
        iconComponent =
          routeName === selectedTab ? (
            <Image
              source={bcertify}
              style={{height: 25, width: 25, tintColor: iconColor}}
            />
          ) : (
            <Image
              source={certify}
              style={{height: 25, width: 25, tintColor: iconColor}}
            />
          );

        break;
      case 'Invoice':
        iconComponent =
          routeName === selectedTab ? (
            <Image
              source={binvoic}
              style={{height: 30, width: 30, tintColor: iconColor}}
            />
          ) : (
            <Image
              source={invoic}
              style={{height: 30, width: 30, tintColor: iconColor}}
            />
          );
        break;
      case 'More':
        iconComponent = <Icon name="angle-up" size={25} color={iconColor} />;
        break;
    }

    return iconComponent;
  };

  const _renderLabel = (routeName, selectedTab) => {
    let label = '';

    switch (routeName) {
      case 'My Course':
        label = 'My Course';
        break;
      case 'Certfcate':
        label = 'Certfcate';
        break;
      case 'Invoice':
        label = 'Invoice';
        break;
      case 'More':
        label = 'More';
        break;
    }

    return label;
  };

  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    const icon = _renderIcon(routeName, selectedTab);
    const label = _renderLabel(routeName, selectedTab);
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {icon}
        <Text
          style={{
            color: routeName === selectedTab ? '#757DE8' : 'black',
            fontSize: 10,
            textAlign: 'center',
            fontWeight: '600',
          }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {renderTopBar()}
      <CurvedBottomBar.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={60}
        circleWidth={100}
        bgColor="white"
        initialRouteName="My Course"
        screenOptions={{headerShown: false}}
        borderTopLeftRight
        renderCircle={({selectedTab, navigate}) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Explore')}>
              <Icon name="compass" color="#fff" size={35} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}>
        <CurvedBottomBar.Screen
          name="My Course"
          position="LEFT"
          //   component={() => <AppNavigator />}
          component={() => <MyCourse />}
        />
        <CurvedBottomBar.Screen
          name="Certfcate"
          component={() => <Certificate />}
          position="LEFT"
        />

        <CurvedBottomBar.Screen
          name="Invoice"
          component={() => <Invoice />}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="More"
          component={() => <Profile />}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01579b',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 5,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  bellIcon: {
    width: 25,
    height: 25,
    tintColor: 'black',
  },
});
