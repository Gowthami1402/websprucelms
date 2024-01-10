import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CourseOverviewScreen = () => (
  <ScrollView style={styles.tabContainer}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <FontAwesome name="angle-right" color="blue" size={20} />
        <Text> over view point </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <FontAwesome name="angle-right" color="blue" size={20} />
        <Text> over view point </Text>
      </View>
    </View>
  </ScrollView>
);

const WhatYouWillLearnScreen = () => (
  <ScrollView style={styles.tabContainer}>
    <View style={styles.container}>
      <Text style={{margin: 10}}>This is the What You Will Learn tab.</Text>
    </View>
  </ScrollView>
);

const Tab = createMaterialTopTabNavigator();

const Tabs = () => (
  // <ScrollView>
  <Tab.Navigator
    tabBarOptions={{
      labelStyle: {fontSize: 13, fontWeight: 'bold'},
      style: {
        backgroundColor: '#fff',
        elevation: 0,
        borderBottomWidth: 0.5,
      },
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
    }}>
    <Tab.Screen name="Course Overview" component={CourseOverviewScreen} />
    <Tab.Screen name="What You Will Learn" component={WhatYouWillLearnScreen} />
  </Tab.Navigator>
  // </ScrollView>
);

function ExploreDetails({route, navigation}) {
  const {course} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={course.image} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <View style={styles.imgoverlay}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Text style={{color: 'orange'}}>Graphic Design</Text>
            <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10}}>
              {course.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.rating}>
                {' '}
                <FontAwesome name="star" size={15} color="#ffd700" />{' '}
                {course.rating} | {course.time} Hrs
              </Text>
              <Text
                style={[
                  styles.rating,
                  {color: 'blue', fontSize: 20, marginTop: 5},
                ]}>
                {course.price}/-
              </Text>
            </View>

            <Text style={{marginTop: 10, color: 'grey'}}>
              “Hello My Dr Brothers, There is no love like the love for a
              brother. There is no love like the love from a brother.”
            </Text>

            {/* <TouchableOpacity
              onPress={() => navigation.navigate('Checkout')}
              style={[
                {
                  backgroundColor: '#757de8',
                  borderRadius: 30,
                  padding: 10,
                  margin: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
                Enroll Course - {course.price}/-
              </Text>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={43}
                color="#fff"
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity> */}
            {/* <Tabs /> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('Checkout')}
              style={[
                {
                  backgroundColor: '#757de8',
                  borderRadius: 30,
                  padding: 15,
                  margin: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
                Enroll Course - {course.price}/-
              </Text>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={50}
                color="#fff"
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default ExploreDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  imgoverlay: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 15,
    marginTop: 260,
  },
  rating: {
    fontWeight: '600',
    marginTop: 10,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 25,
    paddingTop: 10,
  },
});
