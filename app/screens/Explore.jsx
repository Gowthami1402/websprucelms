// import React, {useEffect, useState, useRef} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   StyleSheet,
//   FlatList,
// } from 'react-native';
// // import {Feather} from '@expo/vector-icons';
// import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const courseData = [
//   {
//     id: 1,
//     image: require('../assets/shizuka.png'),
//     name: 'Lord Ganesh',
//     price: '7058',
//     rating: 4.5,
//     time: '08',
//   },
//   {
//     id: 2,
//     image: require('../assets/shizuka.png'),
//     name: 'My Sinchan',
//     price: '2400',
//     rating: 4.2,
//     time: '08',
//   },
//   {
//     id: 3,
//     image: require('../assets/shizuka.png'),
//     name: 'Computer Science',
//     price: '7058',
//     rating: 4.5,
//     time: '08',
//   },
//   {
//     id: 4,
//     image: require('../assets/shizuka.png'),
//     name: 'Nobitha',
//     price: '100',
//     rating: 4.2,
//     time: '08',
//   },
//   {
//     id: 5,
//     image: require('../assets/shizuka.png'),
//     name: 'Nobitha',
//     price: '5058',
//     rating: 4.5,
//     time: '05',
//   },
//   {
//     id: 6,
//     image: require('../assets/shizuka.png'),
//     name: 'Sinchan',
//     price: '1,430',
//     rating: 4.2,
//     time: '08',
//   },
// ];

// function Explore({navigation}) {
//   const flatListRef = useRef();
//   const categories = [
//     'All',
//     'Sinchan',
//     'Nobitha',
//     'Computer Science',
//     'Project Management',
//   ];
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const renderCategoryButton = ({item}) => (
//     <TouchableOpacity
//       style={[
//         styles.categoryButton,
//         selectedCategory === item && {
//           backgroundColor: '#757de8',
//         },
//       ]}
//       // onPress={() => setSelectedCategory(item)}
//       onPress={() => handleCategoryPress(item)}>
//       <Text
//         style={[
//           styles.categoryButtonText,
//           {paddingLeft: 10, paddingRight: 10},
//           selectedCategory === item && {color: 'white'},
//         ]}>
//         {item}
//       </Text>
//     </TouchableOpacity>
//   );

//   const filter = () => {
//     let filtered = courseData;

//     // Filter based on selected category
//     if (selectedCategory !== 'All') {
//       filtered = filtered.filter(course => course.name === selectedCategory);
//     }

//     // Filter based on search query
//     if (searchQuery.trim() !== '') {
//       filtered = filtered.filter(course =>
//         course.name.toLowerCase().includes(searchQuery.toLowerCase()),
//       );
//     }

//     setFilteredCourses(filtered);
//   };

//   const handleCategoryPress = category => {
//     setSelectedCategory(category);
//     // Call filter when a category is clicked
//     filter();
//   };

//   useEffect(() => {
//     filter(); // Call the filter function when selectedCategory or searchQuery changes
//   }, [selectedCategory, searchQuery]);

//   // Creating a function to scroll to the last three categories
//   const scrollToLastThreeCategories = () => {
//     if (flatListRef.current) {
//       const lastIndex = categories.length - 1;
//       const scrollToIndex = lastIndex - 1;
//       flatListRef.current.scrollToIndex({
//         animated: true,
//         index: scrollToIndex,
//       });
//     }
//   };
//   return (
//     <ScrollView style={styles.container}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           padding: 10,
//           marginBottom: 20,
//           borderWidth: 1,
//           borderRadius: 10,
//           borderColor: 'grey',
//         }}>
//         <Feather
//           name="search"
//           size={24}
//           color="black"
//           style={{marginRight: 10}}
//         />
//         <TextInput
//           placeholder="Want To Learn?"
//           style={{flex: 1}}
//           onChangeText={text => setSearchQuery(text)}
//           placeholderTextColor="blue"
//         />
//       </View>

//       {/* Categories */}
//       <View style={styles.rowContainer}>
//         <Text style={styles.title}>Categories</Text>
//         <TouchableOpacity
//           style={{flexDirection: 'row', gap: 5}}
//           onPress={scrollToLastThreeCategories}>
//           <Text style={styles.seeAllText}>See All</Text>
//           <FontAwesome name="angle-right" size={20} color="blue" />
//         </TouchableOpacity>
//       </View>

//       {/* Category Buttons */}
//       <FlatList
//         ref={flatListRef}
//         data={categories}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         renderItem={renderCategoryButton}
//         keyExtractor={item => item}
//         contentContainerStyle={styles.categoryButtonsContainer}
//       />

//       {/* Course Cards */}
//       <View>
//         {filteredCourses.length > 0 ? (
//           filteredCourses.map(course => (
//             <View key={course.id}>
//               <TouchableOpacity
//                 onPress={() => navigation.navigate('ExploreDetails', {course})}
//                 style={styles.cardContainer}>
//                 <Image source={course.image} style={styles.cardImage} />
//                 <View
//                   style={{
//                     flexDirection: 'column',
//                     padding: 10,
//                     paddingTop: 0,
//                   }}>
//                   <Text style={styles.courseName}>{course.name}</Text>
//                   <Text style={styles.price}>{course.price}/-</Text>
//                   <Text style={styles.rating}>
//                     {' '}
//                     <FontAwesome name="star" size={15} color="#ffd700" />{' '}
//                     {course.rating} | {course.time} Hrs
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           ))
//         ) : (
//           <Text style={styles.noDataText}>No data found</Text>
//         )}
//       </View>
//     </ScrollView>
//   );
// }

// export default Explore;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     paddingBottom: 10,
//     marginBottom: 20,
//   },
//   searchInput: {
//     flex: 1,
//   },
//   searchIcon: {
//     marginLeft: 10,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   seeAllText: {
//     color: 'blue',
//   },
//   categoryButton: {
//     // backgroundColor: "#E0E0E0",
//     backgroundColor: '#c5cae9',
//     padding: 10,
//     borderRadius: 30,
//     marginRight: 10,
//   },
//   categoryButtonText: {
//     fontWeight: 'bold',
//     color: 'blue',
//   },
//   cardContainer: {
//     // borderWidth: 1,
//     // borderColor: "#E0E0E0",
//     borderColor: '#fff',
//     backgroundColor: '#fff',
//     borderRadius: 30,
//     // padding: 10,
//     marginBottom: 10,
//     flexDirection: 'row',
//     elevation: 2,
//     marginTop: 10,
//   },
//   cardImage: {
//     width: '30%',
//     height: 100,
//     resizeMode: 'cover',
//     // borderRadius: 5,
//     borderTopLeftRadius: 30,
//     borderBottomLeftRadius: 30,
//   },
//   courseName: {
//     marginTop: 10,
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   price: {
//     fontSize: 15,
//     color: 'blue',
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   rating: {
//     fontSize: 12,
//     // color: "#666666",
//     marginTop: 5,
//     gap: 5,
//     fontWeight: 'bold',
//   },
//   categoryButtonsContainer: {
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   noDataText: {
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 16,
//     color: 'red',
//   },
// });

//============preevious ccode============//

import React, {useEffect, useState, useRef, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
// import {Feather} from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalContext from '../context/ModalContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const courseData = [
  {
    id: 1,
    image: require('../assets/shizuka.png'),
    name: 'Lord Ganesh',
    price: '7058',
    rating: 4.5,
    time: '08',
  },
  {
    id: 2,
    image: require('../assets/shizuka.png'),
    name: 'My Sinchan',
    price: '2400',
    rating: 4.2,
    time: '08',
  },
  {
    id: 3,
    image: require('../assets/shizuka.png'),
    name: 'Computer Science',
    price: '7058',
    rating: 4.5,
    time: '08',
  },
  {
    id: 4,
    image: require('../assets/shizuka.png'),
    name: 'Nobitha',
    price: '100',
    rating: 4.2,
    time: '08',
  },
  {
    id: 5,
    image: require('../assets/shizuka.png'),
    name: 'Nobitha',
    price: '5058',
    rating: 4.5,
    time: '05',
  },
  {
    id: 6,
    image: require('../assets/shizuka.png'),
    name: 'Sinchan',
    price: '1,430',
    rating: 4.2,
    time: '08',
  },
];

function Explore({navigation}) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  //=========handle model=========//
  const [modalVisible, setModalVisible] = useState(false);
  const handleCardClick = course => {
    setSelectedCourse(course);
    setModalVisible(true);
  };

  //=============***============//
  const flatListRef = useRef();
  const categories = [
    'All',
    'Sinchan',
    'Nobitha',
    'Computer Science',
    'Project Management',
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const renderCategoryButton = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item && {
          backgroundColor: '#757de8',
        },
      ]}
      // onPress={() => setSelectedCategory(item)}
      onPress={() => handleCategoryPress(item)}>
      <Text
        style={[
          styles.categoryButtonText,
          {paddingLeft: 10, paddingRight: 10},
          selectedCategory === item && {color: 'white'},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const filter = () => {
    let filtered = courseData;

    // Filter based on selected category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.name === selectedCategory);
    }

    // Filter based on search query
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredCourses(filtered);
  };

  const handleCategoryPress = category => {
    setSelectedCategory(category);
    // Call filter when a category is clicked
    filter();
  };

  useEffect(() => {
    filter(); // Call the filter function when selectedCategory or searchQuery changes
  }, [selectedCategory, searchQuery]);

  // Creating a function to scroll to the last three categories
  const scrollToLastThreeCategories = () => {
    if (flatListRef.current) {
      const lastIndex = categories.length - 1;
      const scrollToIndex = lastIndex - 1;
      flatListRef.current.scrollToIndex({
        animated: true,
        index: scrollToIndex,
      });
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          marginBottom: 20,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: 'grey',
        }}>
        <Feather
          name="search"
          size={24}
          color="black"
          style={{marginRight: 10}}
        />
        <TextInput
          placeholder="Want To Learn?"
          style={{flex: 1}}
          onChangeText={text => setSearchQuery(text)}
          placeholderTextColor="blue"
        />
      </View>

      {/* Categories */}
      <View style={styles.rowContainer}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity
          style={{flexDirection: 'row', gap: 5}}
          onPress={scrollToLastThreeCategories}>
          <Text style={styles.seeAllText}>See All</Text>
          <FontAwesome name="angle-right" size={20} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Category Buttons */}
      <FlatList
        ref={flatListRef}
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategoryButton}
        keyExtractor={item => item}
        contentContainerStyle={styles.categoryButtonsContainer}
      />

      {/* Course Cards */}
      <View>
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <View key={course.id}>
              <TouchableOpacity
                // onPress={() => navigation.navigate('ExploreDetails', {course})}

                onPress={() => {
                  handleCardClick(course);
                }}
                style={styles.cardContainer}>
                <Image source={course.image} style={styles.cardImage} />
                <View
                  style={{
                    flexDirection: 'column',
                    padding: 10,
                    paddingTop: 0,
                  }}>
                  <Text style={styles.courseName}>{course.name}</Text>
                  <Text style={styles.price}>₹{course.price}/-</Text>
                  <Text style={styles.rating}>
                    {' '}
                    <FontAwesome name="star" size={15} color="#ffd700" />{' '}
                    {course.rating} | {course.time} Hrs
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noDataText}>No data found</Text>
        )}
      </View>

      {/* //==============modal============// */}

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <Image source={selectedCourse?.image} style={styles.backgroundImage} />
        <View style={styles.overlay}>
          <View style={styles.imgoverlay}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: '-60%',
                left: 10,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log('Modal Visible:', !modalVisible);
              }}>
              <AntDesign name="arrowleft" size={40} color="#fff" />
            </TouchableOpacity>
            {/* <ScrollView contentContainerStyle={{flexGrow: 1}}> */}
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                console.log('Modal Visible:', !modalVisible);
              }}>
              <Text style={{color: 'orange'}}>Graphic Design</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 15, fontWeight: '600', marginTop: 10}}>
              {selectedCourse?.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.rating}>
                {' '}
                <FontAwesome name="star" size={15} color="#ffd700" />{' '}
                {selectedCourse?.rating} | {selectedCourse?.time} hrs
              </Text>
              <Text
                style={[
                  styles.rating,
                  {color: 'blue', fontSize: 20, marginTop: 5},
                ]}>
                ₹{selectedCourse?.price}/-
              </Text>
            </View>

            <Text style={{marginTop: 10, color: 'grey'}}>
              “Hello My Dr Brothers, There is no love like the love for a
              brother. There is no love like the love from a brother.”
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Checkout');
                setModalVisible(!modalVisible);
              }}
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
                Enroll Course -₹{selectedCourse?.price}/-
              </Text>
              <MaterialCommunityIcons
                name="arrow-right-circle"
                size={50}
                color="#fff"
                style={{position: 'absolute', right: 0}}
              />
            </TouchableOpacity>
            {/* </ScrollView> */}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
  },
  searchIcon: {
    marginLeft: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  seeAllText: {
    color: 'blue',
  },
  categoryButton: {
    // backgroundColor: "#E0E0E0",
    backgroundColor: '#c5cae9',
    padding: 10,
    borderRadius: 30,
    marginRight: 10,
  },
  categoryButtonText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  cardContainer: {
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 30,
    marginBottom: 10,
    flexDirection: 'row',
    elevation: 2,
    marginTop: 10,
  },
  cardImage: {
    width: '30%',
    height: 100,
    resizeMode: 'cover',
    // borderRadius: 5,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  courseName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    // color: "#666666",
    marginTop: 5,
    gap: 5,
    fontWeight: 'bold',
  },
  categoryButtonsContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'red',
  },

  //==============modal details======//

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
