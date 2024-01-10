import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');
import SelectDropdown from 'react-native-select-dropdown';
function AccountSetting() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  const citiesDropdownRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setCountries([
        {title: 'Egypt', cities: [{title: 'Cairo'}, {title: 'Alex'}]},
        {
          title: 'Canada',
          cities: [{title: 'Toronto'}, {title: 'Quebec City'}],
        },
      ]);
    }, 1000);
  }, []);

  const [selectedImage, setSelectedImage] = useState(
    require('../assets/shizuka.png'),
  );
  const [firstName, setFirstName] = useState('Sinchan');
  const [lastName, setLastName] = useState('Nohara');
  const [email, setEmail] = useState('Sinchan.Nohara@example.com');
  const [contactNo, setContactNo] = useState('123-456-7890');
  const [state, setState] = useState('California');
  const [country, setCountry] = useState('United States');
  const [address, setAddress] = useState('123 Main St, City');

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

  const handleUpdateProfile = () => {
    // Implement the logic to update the user's profile
    console.log('Profile updated!');
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      {/* Profile Section */}
      <View style={{alignItems: 'center', padding: 10}}>
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
      </View>

      {/* User Information */}
      <View style={styles.margin}>
        <View>
          <Text style={styles.inputLabel}>First Name</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            style={[styles.sectionStyle, styles.input]}
          />
        </View>

        <View>
          <Text style={styles.inputLabel}>Last Name</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            style={[styles.sectionStyle, styles.input]}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={[styles.sectionStyle, styles.input]}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Contact Number</Text>
          <TextInput
            value={contactNo}
            onChangeText={setContactNo}
            style={[styles.sectionStyle, styles.input]}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>Country</Text>
          {/* <Picker
          selectedValue={country}
          onValueChange={(itemValue) => setCountry(itemValue)}
          style={[styles.sectionStyle, styles.input]}
        >
          <Picker.Item label="Select Country" value="" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="America" value="America" />
        </Picker> */}

          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              citiesDropdownRef.current.reset();
              setCities([]);
              setCities(selectedItem.cities);
            }}
            defaultButtonText={'Select country'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.title;
            }}
            rowTextForSelection={(item, index) => {
              return item.title;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#444'}
                  size={15}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
        <View>
          <Text style={styles.inputLabel}>State</Text>
          {/* <Picker
          selectedValue={state}
          onValueChange={(itemValue) => setState(itemValue)}
          style={[styles.sectionStyle, styles.input]}
        >
          <Picker.Item label="Select State" value="" />
          <Picker.Item label="Karnataka" value="Karnataka" />
          <Picker.Item label="Bangalore" value="Bangalore" />
        </Picker> */}

          <SelectDropdown
            ref={citiesDropdownRef}
            data={cities}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Select city'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.title;
            }}
            rowTextForSelection={(item, index) => {
              return item.title;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#444'}
                  size={15}
                />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />
        </View>

        <View>
          <Text style={styles.inputLabel}>Address</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            style={[styles.sectionStyle, styles.input]}
          />
        </View>
        {/* </View> */}

        {/* Update Profile Button */}
        <TouchableOpacity
          onPress={handleUpdateProfile}
          style={[
            styles.sectionStyle,
            {backgroundColor: '#01579b', borderRadius: 30},
          ]}>
          <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>
            Update Profile
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  imageEdit: {
    top: -33,
    right: -30,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#cfd8dc',
    height: 50,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  inputLabel: {
    margin: 10,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 0,
  },

  dropdownsRow: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '5%',
  },

  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cfd8dc',
    width: '95%',
    margin: 10,
    paddingRight: 1,
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left', fontSize: 15},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  divider: {width: 12},
  dropdown2BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cfd8dc',
    width: '95%',
    margin: 10,
    paddingRight: 1,
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left', fontSize: 15},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown2RowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},

  margin: {
    marginTop: -40,
    marginBottom: 100,
  },
});

export default AccountSetting;
