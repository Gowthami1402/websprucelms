import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ProgressBar, Button} from 'react-native-paper';
// import {FontAwesome} from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import certificatebadge from '../assets/certificatebadge.png';

const data = [
  {name: 'Nobitha', course: 'Data Structure and Algorthms', progress: 80},
  {name: 'Sinchan', course: 'Data Structure and Algorthms', progress: 80},
  // { name: "Doreamon", course: "Data Structure and Algorthes", progress: 80 },
  // { name: "Nobitha", course: "Data Structure and Algorthes", progress: 80 },
];

const Certificate = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={certificatebadge}
                style={{height: 70, width: 50}}
              />
              <Text style={styles.certificateTitle}>
                Certificate of Completion
              </Text>
            </View>
            <Text style={styles.certificationText}>
              This is to certify that
            </Text>
            <Text style={[styles.name, styles.dottedBorder]}>{item.name}</Text>
            <Text style={styles.courseCompletedText}>
              has completed the course
            </Text>
            <Text style={styles.courseName}>{item.course}</Text>
            <ProgressBar
              progress={item.progress}
              width={350}
              color="#3498db"
              height={5}
              borderRadius={5}
              marginTop={5}
            />

            <View style={styles.headerRow}>
              <Text style={styles.unlockText}>
                Complete course to unlock the certificate
              </Text>

              <TouchableOpacity style={styles.downloadContainer}>
                <Text style={styles.downloadButton}>Download</Text>
                <FontAwesome
                  name="lock"
                  size={20}
                  color="red"
                  style={styles.lockIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Certificate;

const styles = StyleSheet.create({
  container: {
    // margin: 1,
    padding: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    width: 350,
    height: 250,
    borderTopColor: '#ff9800',
    borderTopWidth: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 15,
  },

  certificateTitle: {
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
    marginTop: 30,
    textTransform: 'uppercase',
  },
  certificationText: {
    textAlign: 'center',
    paddingTop: 2,
  },
  name: {
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  dottedBorder: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    marginLeft: 30,
    marginRight: 30,
    borderColor: '#ff9800',
  },
  courseCompletedText: {
    textAlign: 'center',
    fontSize: 13,
  },
  courseName: {
    fontSize: 15,
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
  },
  progressBar: {
    marginTop: 2,
  },
  incompleteText: {
    fontSize: 13,
    marginLeft: 10,
    paddingTop: 10,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    paddingTop: 10,
  },
  downloadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockIcon: {
    position: 'absolute',
    right: -2,
    top: -5,
    fontSize: 13,
  },
  downloadButton: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    borderColor: '#757de8',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#757de8',
  },
  unlockText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
  },
});
