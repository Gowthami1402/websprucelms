import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Google from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SignIn = ({navigation}) => {
  return (
    <View>
      <View style={styles.inputStyle}>
        <Fontisto
          name="email"
          // type="material"
          color="#517fa4"
          size={24}
          containerStyle={styles.iconContainer}
        />
        <TextInput style={styles.input} placeholder="Email-ID" />
      </View>
      <View style={styles.inputStyle}>
        <Icon
          name="lock"
          type="material"
          color="#517fa4"
          size={24}
          containerStyle={styles.iconContainer}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <Text
        style={{
          color: '#3d5afe',
          textAlign: 'left',
          // marginBottom: 30,
          margin: 10,
          marginLeft: 10,
          fontWeight: '600',
        }}>
        Forget Password
      </Text>

      <TouchableOpacity
        style={[styles.inputStyle, {backgroundColor: '#3d5afe'}]}
        // onPress={() => navigation.navigate('Home')}
      >
        <Text style={[styles.buttonText, {color: 'white'}]}>Sign In</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
          margin: 30,
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: '#bdbdbd'}} />
        <Text
          style={{
            color: '#607d8b',
            textAlign: 'center',
            marginHorizontal: 10,
            fontWeight: '600',
          }}>
          or Sign in with
        </Text>
        <View style={{flex: 1, height: 1, backgroundColor: '#bdbdbd'}} />
      </View>

      <TouchableOpacity style={[styles.inputStyle, {backgroundColor: '#fff'}]}>
        <Google
          name="google"
          size={24}
          color="black"
          style={styles.iconContainer}
        />
        <Text style={[styles.buttonText, {color: 'black', marginLeft: 10}]}>
          Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <View style={styles.inputStyle}>
        <Icon
          name="person"
          type="material"
          color="#517fa4"
          size={24}
          containerStyle={styles.iconContainer}
        />
        <TextInput
          style={styles.input}
          placeholder="Fullname"
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputStyle}>
        <Icon
          name="email"
          type="material"
          color="#517fa4"
          size={24}
          containerStyle={styles.iconContainer}
        />
        <TextInput
          style={styles.input}
          placeholder="Email-ID"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.inputStyle}>
        <Icon
          name="phone"
          type="material"
          color="#517fa4"
          size={24}
          containerStyle={styles.iconContainer}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone No."
          value={contactNumber}
          onChangeText={text => setContactNumber(text)}
        />
      </View>
      <View style={styles.inputStyle}>
        <Icon
          name="lock"
          type="material"
          color="#517fa4"
          size={24}
          containerStyle={styles.iconContainer}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity
        style={[styles.inputStyle, {backgroundColor: '#3d5afe'}]}>
        <Text style={[styles.buttonText, {color: 'white'}]}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
};

const Login = ({navigation}) => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/login.png')}
        style={styles.backgroundImage}
      />

      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={{marginTop: 80, margin: 20}}>
        {isSignIn ? (
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 20,
                fontWeight: '600',
                marginBottom: 10,
              }}>
              Sign in and Enjoy
            </Text>
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 20,
                fontWeight: '600',
              }}
              onPress={toggleSignIn}>
              Uninterrupted Learning
            </Text>
          </View>
        ) : (
          <View style={{flexDirection: 'row', gap: 5, paddingTop: 37}}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 20,
                fontWeight: '600',
              }}>
              Create your account
            </Text>
          </View>
        )}
      </View>
      <View style={styles.overlay}>
        {isSignIn ? (
          <View style={{width: '100%', marginTop: 10}}>
            <SignIn navigation={navigation} />
          </View>
        ) : (
          <View style={{width: '100%'}}>
            <SignUp toggleSignIn={toggleSignIn} />
          </View>
        )}

        {isSignIn ? (
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={{color: '#000', fontWeight: '600'}}>
              Don't have an account?
            </Text>
            <Text
              style={{color: '#3d5afe', fontWeight: '600'}}
              onPress={toggleSignIn}>
              Register
            </Text>
          </View>
        ) : (
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={{color: '#000', fontWeight: '600'}}>
              Already have an account?
            </Text>
            <Text
              style={{color: '#3d5afe', fontWeight: '600'}}
              onPress={toggleSignIn}>
              Sign In
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '100%',
    height: 40,
    marginTop: 100,
    resizeMode: 'contain',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 20,
    paddingTop: 0,
  },
  iconContainer: {
    marginRight: 10,
  },

  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 50,
    borderRadius: 30,
    margin: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
