import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import LottieView from 'lottie-react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalContext from '../context/ModalContext';

const height = Dimensions.get('window').height;
function Checkout({navigaton}) {
  // const {setOpenModal} = useContext(ModalContext);
  const rightArrowIcon = (
    <MaterialCommunityIcons name="arrow-right-circle" size={20} color="white" />
  );

  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      // flex: 1,
      // justifyContent: 'center',
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cityState, setCityState] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const onNextStep = () => {
    console.log('called next step');
    setCurrentIndex(prevIndex => prevIndex + 1);
  };

  const onPaymentStepComplete = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const onPrevStep = () => {
    console.log('called previous step');
    setCurrentIndex(prevIndex => prevIndex - 1);
  };

  const onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  const renderStepContent = stepLabel => {
    switch (stepLabel) {
      case 'Summary':
        return (
          <>
            <View style={styles.cardContainer}>
              <Image
                source={require('../assets/shizuka.png')}
                style={styles.cardImage}
              />
              <View
                style={{
                  flexDirection: 'column',
                  padding: 10,
                  paddingTop: 0,
                  gap: 10,
                }}>
                <Text style={styles.courseName}>
                  Data Structure and Algorithms
                </Text>

                <Text style={styles.price}>
                  Price: <Text style={{color: 'blue'}}>499/-</Text>
                </Text>
              </View>
            </View>

            <View style={{alignItems: 'flex-end'}}>
              <View style={styles.couponCodeContainer}>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'grey',
                    width: '60%',
                  }}>
                  <TextInput
                    placeholder="Coupon Code"
                    style={{flex: 1}}
                    placeholderTextColor="grey"
                  />
                </View>

                <TouchableOpacity style={styles.applyButton}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.priceDetailsContainer}>
                <Text style={styles.text}>Total price: ₹499</Text>
                <Text style={styles.text}>Discount Price: ₹0</Text>
                <Text style={styles.text}>GST (18%): ₹89.82</Text>
                <Text style={[styles.text, {marginTop: 10, fontSize: 18}]}>
                  Grand Total: ₹588.82
                </Text>
              </View>
            </View>
            {/* <View style={{marginTop: 100}} /> */}
          </>
        );
      case 'Details':
        return (
          <View>
            <Text style={styles.label}>First Name</Text>
            <View style={styles.sectionStyle}>
              <TextInput style={styles.input} placeholder="John" />
            </View>
            <Text style={styles.label}>Email</Text>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.input}
                placeholder="Johnjacob@gmail.com"
              />
            </View>
            <Text style={styles.label}>Contact Number</Text>
            <View style={styles.sectionStyle}>
              <TextInput style={styles.input} placeholder="9380825113" />
            </View>
            <Text style={styles.label}>GST Number (optional)</Text>
            <View style={styles.sectionStyle}>
              <TextInput style={styles.input} />
            </View>
            <Text style={styles.label}>Billing Address</Text>
            <View style={styles.sectionStyle}>
              <TextInput style={styles.input} placeholder="#23/11" />
            </View>
            <Text style={styles.label}>Pincode</Text>
            <View style={styles.sectionStyle}>
              <TextInput style={styles.input} />
            </View>
            <Text style={styles.label}>City,State</Text>
            {/* <View style={styles.sectionStyle}> */}
            <RNPickerSelect
              placeholder={{
                label: 'Select City,State',
                value: null,
              }}
              onValueChange={value => setCityState(value)}
              items={[
                {label: 'City1, State1', value: 'city1_state1'},
                {label: 'City2, State2', value: 'city2_state2'},
                // Add more items as needed
              ]}
              style={pickerSelectStyles}
            />
            {/* </View> */}
          </View>
        );
      case 'Payment':
        return (
          <View style={{padding: 20}}>
            <Text style={{fontSize: 18, marginBottom: 15}}>
              Payment Methods
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {/* Add your PayPal component here */}
              <TouchableOpacity style={styles.paymentMethod}>
                <Image
                  source={require('../assets/paypal.png')}
                  style={styles.congratulationsImage}
                />
              </TouchableOpacity>

              {/* Add your Razorpay component here */}
              <TouchableOpacity
                style={[styles.paymentMethod, {backgroundColor: 'blue'}]}>
                <Image
                  source={require('../assets/razorpay.png')}
                  style={[
                    styles.congratulationsImage,
                    {height: 25, marginTop: 8},
                  ]}
                />
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                backgroundColor: '#757de8',
                width: '100%',
                padding: 2,
                marginTop: 350,
                borderRadius: 35,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  textAlign: 'center',
                  display: 'flex',
                  flex: 1,
                  // backgroundColor: 'red',
                  textAlignVertical: 'center',
                }}>
                Make Payment
              </Text>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={45}
                color="#fff"
                // style={{
                //   position: 'absolute',
                //   right: 0,
                // }}
              />
            </TouchableOpacity> */}
          </View>
        );

      default:
        return null;
    }
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: '#757de8',
    activeLabelColor: '#757de8',
    activeStepNumColor: 'white',
    activeStepIconColor: '#757de8',
    completedStepIconColor: 'grey',
    completedProgressBarColor: 'grey',
    completedCheckColor: 'white',
  };
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ProgressSteps {...progressStepsStyle}>
          <ProgressStep
            label="Summary"
            // onNext={onPaymentStepComplete}
            // removeBtnRow={true}
            onPrevious={onPrevStep}
            // scrollViewProps={defaultScrollViewProps}
            // nextBtnDisabled={true}
            // previousBtnDisabled={true}
            // removeBtnRow={true}
            // nextBtnText={'Proceed'}

            nextBtnText={
              <View
                style={{
                  paddingHorizontal: 100,
                  backgroundColor: '#757de8',
                  borderRadius: 30,
                  justifyContent: 'center',
                  paddingVertical: 15,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                  Proceed
                </Text>
                <MaterialCommunityIcons
                  name="arrow-right-circle"
                  size={45}
                  color="#fff"
                  style={{
                    position: 'absolute',
                    right: 0,
                  }}
                />
              </View>
            }
            nextBtnTextStyle={{
              color: '#fff',
              fontSize: 25,
              marginBottom: 40,
              left: 12,
            }}>
            {renderStepContent('Summary')}
            {/* <View
              style={{
                paddingHorizontal: 100,
                backgroundColor: '#757de8',
                borderRadius: 30,
                justifyContent: 'center',
                paddingVertical: 15,
                margin: 10,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: 18,
                  textAlign: 'center',
                }}>
                Proceed
              </Text>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={45}
                color="#fff"
                style={{
                  position: 'absolute',
                  right: 0,
                }}
              />
            </View> */}
          </ProgressStep>
          <ProgressStep
            label="Details"
            onNext={onNextStep}
            nextBtnTextStyle={{
              color: '#fff',
              fontSize: 20,
              // marginBottom: 40,
              // backgroundColor: '#757de8',
              // paddingHorizontal: 10,
              // left: 12,
            }}
            nextBtnStyle={{
              paddingHorizontal: 45,
              backgroundColor: '#757de8',
              left: 50,
              paddingVertical: 10,
              marginBottom: 30,
              borderRadius: 20,
            }}
            previousBtnTextStyle={{
              color: '#fff',
              fontSize: 20,
              // marginBottom: 40,
              // left: 12,
            }}
            previousBtnStyle={{
              paddingHorizontal: 30,
              backgroundColor: '#757de8',
              right: 50,
              paddingVertical: 10,
              marginBottom: 30,
              borderRadius: 20,
            }}
            onPrevious={onPrevStep}
            scrollViewProps={defaultScrollViewProps}>
            {renderStepContent('Details')}
          </ProgressStep>
          <ProgressStep
            label="Payment"
            onPrevious={onPrevStep}
            onSubmit={onPaymentStepComplete}
            scrollViewProps={defaultScrollViewProps}
            finishBtnText="Make Payment"
            nextBtnTextStyle={{
              color: '#fff',
              fontSize: 20,
            }}
            nextBtnStyle={{
              paddingHorizontal: 65,
              backgroundColor: '#757de8',
              left: 30,
              paddingVertical: 10,
              marginBottom: 30,
              borderRadius: 20,
            }}
            previousBtnText={
              <MaterialCommunityIcons
                name="arrow-left"
                size={35}
                color="grey"
              />
            }
            previousBtnStyle={{
              paddingHorizontal: 10,
              right: 80,
              paddingVertical: 10,
              marginBottom: 25,
              borderRadius: 20,
            }}>
            {renderStepContent('Payment')}
          </ProgressStep>
        </ProgressSteps>
      </View>
      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <LottieView
                source={require('../assets/LottieFiles/CheckMark.json')}
                autoPlay
                loop={false}
                style={{width: 100, height: 100}}
              />
              <Text
                style={[styles.modalText, {fontSize: 18, fontWeight: 'bold'}]}>
                Congratulations
              </Text>
              <Text style={styles.modalText}>Your Payment is Successfull</Text>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.modalText,
                    {
                      color: 'green',
                      textDecorationLine: 'underline',
                      marginTop: 15,
                    },
                  ]}>
                  Go to Invoicce
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.buttonClose,
                  {
                    marginTop: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                  },
                ]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Go To Course</Text>
                <MaterialCommunityIcons
                  name="arrow-right-circle"
                  size={45}
                  color="#fff"
                  style={{
                    marginLeft: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default Checkout;

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    height: height,
    alignItems: 'center',
  },
  //========summary========//
  couponCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    gap: 10,
    paddingRight: 20,
  },
  applyButton: {
    backgroundColor: '#757de8',
    padding: 10,
    borderRadius: 5,
    width: '20%',
  },
  priceDetailsContainer: {
    alignItems: 'flex-end',
    padding: 10,
    paddingRight: 20,
  },
  proceedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  text: {
    fontWeight: '600',
    margin: 5,
  },

  cardContainer: {
    borderColor: '#fff',
    // backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    elevation: 2,
    marginTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  cardImage: {
    width: '20%',
    height: 70,
    resizeMode: 'cover',
    borderRadius: 10,
    // borderTopLeftRadius: 30,
    // borderBottomLeftRadius: 30,
  },
  courseName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    // color: 'blue',
    fontWeight: 'bold',
    marginTop: 5,
  },
  proceedContainer: {
    backgroundColor: '#757de8',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },

  //====details======//
  iconContainer: {
    marginRight: 10,
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
  },
  input: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: 'black',
    paddingLeft: 10,
  },

  //=======payment========//

  paymentMethod: {
    // backgroundColor: '#',
    // padding: 5,
    borderRadius: 5,
    width: '45%',
    marginBottom: 10,
    alignItems: 'center',
    // margin: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },

  //======modal==========//
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#757de8',
  },
  buttonClose: {
    backgroundColor: '#757de8',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    marginLeft: 20,
  },
  modalText: {
    // marginBottom: 15,
    textAlign: 'center',
    padding: 5,
  },
  congratulationsImage: {
    // width: 200,
    height: 40,
    resizeMode: 'contain',
  },
});
const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 11,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    // color: 'black',
    margin: 10,
    backgroundColor: '#fff',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
};
