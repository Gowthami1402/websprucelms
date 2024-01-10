import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CourseDetails = () => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <TouchableOpacity onPress={toggleExpand}>
              <FontAwesome
                name={isExpanded ? 'angle-up' : 'angle-down'}
                size={25}
                color="black"
              />
            </TouchableOpacity>
            <Text style={styles.title}>Chapter 1</Text>
          </View>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="arrow-collapse-down"
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {isExpanded && (
          <View>
            <View style={styles.content}>
              <MaterialCommunityIcons name="check-circle-outline" size={15} />
              <Text>Vedio Lesson 1</Text>
            </View>
            <View style={styles.content}>
              <MaterialCommunityIcons name="minus-circle-outline" size={15} />
              <Text>Vedio Lesson 1</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};
export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 16,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 350,
    height: 'auto',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  content: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 15,
  },
});
