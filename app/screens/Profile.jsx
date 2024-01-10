import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';
import {useNavigation} from '@react-navigation/native';
import Modal from 'react-native-modal';

function Profile() {
  const navigation = useNavigation();

  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const hideLogoutModal = () => {
    setLogoutModalVisible(false);
  };

  const [selectedImage, setSelectedImage] = useState(
    require('../assets/shizuka.png'),
  );

  //   const handleImageEdit = async () => {
  //     try {
  //       const result = await ImagePicker.launchImageLibraryAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //         allowsEditing: true,
  //         aspect: [1, 1],
  //         quality: 1,
  //       });

  //       if (!result.canceled) {
  //         setSelectedImage({uri: result.uri});
  //       }
  //     } catch (error) {
  //       console.error('Error picking image: ', error);
  //     }
  //   };

  return (
    <View style={{flex: 1, padding: 20}}>
      {/* Profile Section */}
      <View style={{alignItems: 'center'}}>
        {/* <Text style={{margin: 10, fontSize: 20, fontWeight: 'bold'}}>
          {' '}
          Profile
        </Text> */}

        <Image
          key={selectedImage.uri}
          source={selectedImage}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 10,
          }}
        />
        <TouchableOpacity
          // onPress={handleImageEdit}
          style={styles.imageEdit}>
          <MaterialCommunityIcons name="image-edit" size={25} color="#01579b" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: -20,
            marginBottom: 10,
          }}>
          {' '}
          Sinchan
        </Text>
      </View>

      {/* Your Profile Section */}

      <TouchableOpacity
        onPress={() => navigation.navigate('Your Profile')}
        style={[styles.listItem, styles.divider]}>
        <Icon name="user-alt" size={20} color="#01579b" />
        <Text style={{marginLeft: 10}}>Your Profile</Text>
        <Text style={{marginLeft: 'auto'}}>
          <Icon name="angle-right" size={20} color="#01579b" />
        </Text>
        <Text style={styles.divider} />
      </TouchableOpacity>

      {/* Change Password Section */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Change Password')}
        style={[styles.listItem, styles.divider]}>
        <Icon name="lock" size={20} color="#01579b" />
        <Text style={{marginLeft: 10}}>Change Password</Text>
        <Text style={{marginLeft: 'auto'}}>
          <Icon name="angle-right" size={20} color="#01579b" />
        </Text>
      </TouchableOpacity>

      {/* Logout Section */}
      <TouchableOpacity
        onPress={showLogoutModal}
        style={[styles.listItem, styles.divider]}>
        <Icon name="sign-out-alt" size={20} color="#01579b" />
        <Text style={{marginLeft: 10}}>Logout</Text>
        <Text style={{marginLeft: 'auto'}}>
          <Icon name="angle-right" size={20} color="#01579b" />
        </Text>
      </TouchableOpacity>

      {/* Logout Modal */}
      <Modal isVisible={isLogoutModalVisible} style={{margin: 0}}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Logout</Text>
          <Text style={{textAlign: 'center'}}>
            Are you sure you want to Logout?
          </Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={hideLogoutModal}>
              <Text
                style={[
                  styles.modalButtonText,
                  {paddingLeft: 50, textAlign: 'center', paddingRight: 50},
                ]}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={[
                  styles.modalButtonText,
                  {
                    // backgroundColor: '#01579b',
                    // color: '#fff',
                    paddingLeft: 30,
                    textAlign: 'center',
                    paddingRight: 30,
                  },
                ]}>
                Yes, Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Profile;

// Styles
const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  listItem: {
    flexDirection: 'row',
    // marginTop: 20,
    alignItems: 'center',
    padding: 10,
  },
  imageEdit: {
    top: -33,
    right: -30,
  },

  // Modal styles
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 0,
    height: 200,
    marginTop: '150%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButtonText: {
    color: '#01579b',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 20,
    borderColor: '#01579b',
    borderWidth: 0.5,
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
