import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const MyCourse = () => {
  const navigation = useNavigation();
  const coursesData = [
    {
      id: 1,
      image: require('../assets/shizuka.png'),
      header: 'Design',
      title: 'Figma UI UX Design',
      text: 'Use Figma to get a job in UI Design, User interface, User Experience design',
      user: 'Gowthu',
      progress: 0.8,
      time: '4 hrs 12 min',
    },
    {
      id: 2,
      image: require('../assets/shizuka.png'),
      header: 'Programming',
      title: 'JavaScript Basics',
      text: 'Learn the fundamentals of JavaScript programming language ',
      user: 'Gowthu',
      progress: 0.5,
      time: '3 hrs 30 min',
    },
    {
      id: 3,
      image: require('../assets/shizuka.png'),
      header: 'Data Science',
      title: 'Introduction to Data Analysis',
      text: 'Explore the basics of data analysis using popular tools and techniques',
      user: 'Gowthu',
      progress: 1.0,
      time: '6 hrs 45 min',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {coursesData.map(course => (
          <TouchableOpacity
            key={course.id}
            onPress={() => navigation.navigate('CourseDetails')}>
            <View style={styles.card}>
              <Image source={course.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{course.title}</Text>
                <Text style={styles.text}>{course.text}</Text>
                <View style={{flexDirection: 'row', marginTop: 5, gap: 1}}>
                  <Text style={{marginRight: 4}}>4.5</Text>
                  <FontAwesome name="star" size={17} color="#ffd700" />
                  <Text style={{marginLeft: 4}}>{course.time}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MyCourse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'whitesmoke',
  },
  card: {
    borderRadius: 5,
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 85,
    height: 90,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: 'column',
    padding: 10,
    flex: 1,
    alignItems: 'flex-start',
  },
  header: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  text: {
    fontSize: 12,
    color: '#444444',
    marginTop: 5,
  },
});
