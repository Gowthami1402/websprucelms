import React from 'react';
import {View, Text, Button, Image, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const coursesData = [
  {
    id: 1,
    image: require('../assets/shizuka.png'),
    invoiceID: '9380825131',
    invoiceDate: '01-04-2023',
    title: 'Figma UI UX Design',
  },
  {
    id: 2,
    image: require('../assets/shizuka.png'),
    invoiceID: '9380825131',
    invoiceDate: '01-04-2023',
    title: 'Figma UI UX Design',
  },
  {
    id: 3,
    image: require('../assets/shizuka.png'),
    invoiceID: '9380825131',
    invoiceDate: '01-04-2023',
    title: 'Figma UI UX Design',
  },
];

const Invoice = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        {coursesData.map(course => (
          <View style={[styles.card, styles.cardMargin]} key={course.id}>
            <Image source={course.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Invoie ID: {course.invoiceID}</Text>
              <Text style={styles.text}>
                Invoice Date: {course.invoiceDate}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text style={styles.title}>{course.title}</Text>
                <Text style={styles.downloadButton}>Download</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Invoice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'whitesmoke',
  },
  card: {
    borderRadius: 5,
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: "red",
  },
  cardMargin: {
    marginBottom: 10, // Adjust the margin value as needed
  },
  image: {
    width: 85,
    height: 85,
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
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  text: {
    fontSize: 12,
    color: '#444444',
    marginTop: 5,
    // fontWeight: "bold",
  },
  downloadButton: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    borderColor: '#757de8',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#757de8',
  },
});
