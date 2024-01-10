import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import {FontAwesome5} from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('Gowthami1402');
  const [newPassword, setNewPassword] = useState('Sinchan1402');
  const [confirmNewPassword, setConfirmNewPassword] = useState('Sinchan1402');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const handleChangePassword = () => {
    console.log('Changing password...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>Current Password</Text>
      <View style={styles.sectionStyle}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showCurrentPassword}
          value={currentPassword}
          onChangeText={text => setCurrentPassword(text)}
        />
        <TouchableOpacity
          onPress={() => setShowCurrentPassword(!showCurrentPassword)}>
          <FontAwesome5
            name={showCurrentPassword ? 'eye-slash' : 'eye'}
            size={24}
            color="#517fa4"
            style={{paddingRight: 10}}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.inputLabel}>New Password</Text>
      <View style={styles.sectionStyle}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showNewPassword}
          value={newPassword}
          onChangeText={text => setNewPassword(text)}
        />
        <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)}>
          <FontAwesome5
            name={showNewPassword ? 'eye-slash' : 'eye'}
            size={24}
            color="#517fa4"
            style={{paddingRight: 10}}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.inputLabel}>Confirm New Password</Text>
      <View style={styles.sectionStyle}>
        <TextInput
          style={styles.input}
          secureTextEntry={!showConfirmNewPassword}
          value={confirmNewPassword}
          onChangeText={text => setConfirmNewPassword(text)}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmNewPassword(!showConfirmNewPassword)}>
          <FontAwesome5
            name={showConfirmNewPassword ? 'eye-slash' : 'eye'}
            size={24}
            color="#517fa4"
            style={{paddingRight: 10}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[
          styles.sectionStyle,
          {backgroundColor: '#01579b', borderRadius: 30},
        ]}
        onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <View style={{marginTop: 300}} />
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 50,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
  },
  inputLabel: {
    margin: 10,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 0,
  },
});
