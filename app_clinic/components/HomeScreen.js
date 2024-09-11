// // // import React from 'react';
// // // import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
// // // import { SwiperFlatList } from 'react-native-swiper-flatlist';

// // // const HomeScreen = ({navigation}) => {
// // //   const { width } = Dimensions.get('window');

// // //   return (
// // //     <View style={[styles.container, { marginTop: 5 }]}>
// // //       <ScrollView>
// // //         {/* Header */}
// // //         <View style={styles.header}>
// // //           {/* <Text style={styles.logo}>Logo</Text> */}
// // //           {/* Menu điều hướng */}
// // //           {/* <View style={styles.navLinks}>
// // //             <Text style={styles.navLink}>Dịch vụ</Text>
// // //             <Text style={styles.navLink}>Bác sĩ</Text>
// // //             <Text style={styles.navLink}>Đăng kí</Text>
// // //           </View> */}
// // //         </View>

// // //         {/* SwiperFlatList */}
// // //         <SwiperFlatList
// // //           autoplay
// // //           autoplayDelay={2}
// // //           autoplayLoop
// // //           index={2}
// // //           style={styles.banner}
// // //         >
// // //           <TouchableOpacity style={styles.bannerButton}>
// // //             <Text style={styles.bannerButtonText}>Đăng kí</Text>
// // //           </TouchableOpacity>
// // //           <Image
// // //             source={require('../assets/dat-lich.png')}
// // //             style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
// // //           />
// // //           <Image
// // //             source={require('../assets/bac-si.png')}
// // //             style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
// // //           />
// // //           <Image
// // //             source={require('../assets/trang-thiet-bi.jpg')}
// // //             style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
// // //           />
// // //         </SwiperFlatList>

// // //         {/* Dịch vụ */}
// // //         <View style={styles.section}>
// // //           <Text style={styles.sectionTitle}>Dịch vụ</Text>
// // //           <Text style={styles.sectionContent}>Thông tin về các dịch vụ cung cấp</Text>
// // //         </View>

// // //         {/* Bác sĩ */}
// // //         <View style={styles.section}>
// // //           <Text style={styles.sectionTitle}>Bác sĩ</Text>
// // //           <Text style={styles.sectionContent}>Thông tin về các bác sĩ và chuyên gia</Text>
// // //         </View>

// // //         {/* Liên hệ */}
// // //         <View style={styles.section}>
// // //           <Text style={styles.sectionTitle}>Liên hệ</Text>
// // //           <Text style={styles.sectionContent}>Thông tin liên hệ và địa chỉ</Text>
// // //         </View>
// // //       </ScrollView>
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#fff',
// // //   },
// // //   header: {
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'center',
// // //     padding: 20,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#ccc',
// // //   },
// // //   logo: {
// // //     fontSize: 24,
// // //     fontWeight: 'bold',
// // //   },
// // //   navLinks: {
// // //     flexDirection: 'row',
// // //   },
// // //   navLink: {
// // //     fontSize: 18,
// // //     marginLeft: 20,
// // //     color: 'blue',
// // //   },
// // //   banner: {
// // //     height: 200,
// // //     backgroundColor: '#f0f0f0',
// // //   },
// // //   bannerImage: {
// // //     width: '100%',
// // //     height: '100%',
// // //     resizeMode: 'cover',
// // //   },
// // //   bannerButton: {
// // //     position: 'absolute',
// // //     top: 20, // Vị trí từ trên xuống
// // //     right: 20, // Vị trí từ phải sang trái
// // //     backgroundColor: 'blue',
// // //     paddingVertical: 10,
// // //     paddingHorizontal: 20,
// // //     borderRadius: 5,
// // //   },
// // //   bannerButtonText: {
// // //     color: 'white',
// // //     fontSize: 16,
// // //   },
// // //   section: {
// // //     padding: 20,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#ccc',
// // //   },
// // //   sectionTitle: {
// // //     fontSize: 20,
// // //     fontWeight: 'bold',
// // //     marginBottom: 10,
// // //   },
// // //   sectionContent: {
// // //     fontSize: 16,
// // //   },
// // // });

// // // export default HomeScreen;
// import React, { useContext } from 'react';
// import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { MyDispatcherContext, MyUserContext } from '../configs/Contexts';

// const HomeScreen = ({ navigation }) => {
//   const { width } = Dimensions.get('window');
//   const dispatch = useContext(MyDispatcherContext);
//   const user = useContext(MyUserContext);

//   const handleLogout = async () => {
//     await AsyncStorage.removeItem('access-token');
//     await AsyncStorage.removeItem('user');
//     dispatch({ type: 'logout' });
//     navigation.navigate('Login'); // Điều hướng về trang đăng nhập sau khi đăng xuất
//   };

//   return (
//     <View style={[styles.container, { marginTop: 5 }]}>
//       <ScrollView>
//         {/* Header */}
//         <View style={styles.header}>
//           <Text style={styles.logo}>Logo</Text>
        
//         </View>

//         {/* SwiperFlatList */}
//         <SwiperFlatList
//           autoplay
//           autoplayDelay={2}
//           autoplayLoop
//           index={2}
//           style={styles.banner}
//         >
//           <TouchableOpacity style={styles.bannerButton}>
//             <Text style={styles.bannerButtonText}>Đăng kí</Text>
//           </TouchableOpacity>
//           <Image
//             source={require('../assets/dat-lich.png')}
//             style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
//           />
//           <Image
//             source={require('../assets/bac-si.png')}
//             style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
//           />
//           <Image
//             source={require('../assets/trang-thiet-bi.jpg')}
//             style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
//           />
//         </SwiperFlatList>

//         {/* Dịch vụ */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Dịch vụ</Text>
//           <Text style={styles.sectionContent}>Thông tin về các dịch vụ cung cấp</Text>
//         </View>

//         {/* Bác sĩ */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Bác sĩ</Text>
//           <Text style={styles.sectionContent}>Thông tin về các bác sĩ và chuyên gia</Text>
//         </View>

//         {/* Liên hệ */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Liên hệ</Text>
//           <Text style={styles.sectionContent}>Thông tin liên hệ và địa chỉ</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   logo: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   banner: {
//     height: 200,
//     backgroundColor: '#f0f0f0',
//   },
//   bannerImage: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   bannerButton: {
//     position: 'absolute',
//     top: 20, // Vị trí từ trên xuống
//     right: 20, // Vị trí từ phải sang trái
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   bannerButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   section: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   sectionContent: {
//     fontSize: 16,
//   },
// });

// export default HomeScreen;
// // import React, { useContext } from 'react';
// // import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
// // import { SwiperFlatList } from 'react-native-swiper-flatlist';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { MyDispatcherContext, MyUserContext } from '../configs/Contexts';

// // const HomeScreen = ({ navigation }) => {
// //   const { width } = Dimensions.get('window');
// //   const dispatch = useContext(MyDispatcherContext);
// //   const user = useContext(MyUserContext);

// //   const handleLogout = async () => {
// //     await AsyncStorage.removeItem('access-token');
// //     await AsyncStorage.removeItem('user');
// //     dispatch({ type: 'login' });
// //     navigation.navigate('Login'); // Điều hướng về màn hình đăng nhập sau khi đăng xuất
// //   };

// //   return (
// //     <View style={[styles.container, { marginTop: 5 }]}>
// //       <ScrollView contentContainerStyle={styles.scrollViewContent}>
// //         {/* Header */}
// //         <View style={styles.header}>
// //           <Text style={styles.logo}>Logo</Text>
// //         </View>

// //         {/* SwiperFlatList */}
// //         <SwiperFlatList
// //           autoplay
// //           autoplayDelay={2}
// //           autoplayLoop
// //           index={2}
// //           style={styles.banner}
// //         >
// //           <TouchableOpacity style={styles.bannerButton}>
// //             <Text style={styles.bannerButtonText}>Đăng kí</Text>
// //           </TouchableOpacity>
// //           <Image
// //             source={require('../assets/dat-lich.png')}
// //             style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
// //           />
// //           <Image
// //             source={require('../assets/bac-si.png')}
// //             style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
// //           />
// //           <Image
// //             source={require('../assets/trang-thiet-bi.jpg')}
// //             style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
// //           />
// //         </SwiperFlatList>

// //         {/* Dịch vụ */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Dịch vụ</Text>
// //           <Text style={styles.sectionContent}>Thông tin về các dịch vụ cung cấp</Text>
// //         </View>

// //         {/* Bác sĩ */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Bác sĩ</Text>
// //           <Text style={styles.sectionContent}>Thông tin về các bác sĩ và chuyên gia</Text>
// //         </View>

// //         {/* Liên hệ */}
// //         <View style={styles.section}>
// //           <Text style={styles.sectionTitle}>Liên hệ</Text>
// //           <Text style={styles.sectionContent}>Thông tin liên hệ và địa chỉ</Text>
// //         </View>

// //         {/* Nút Đăng xuất */}
// //         <View style={styles.logoutButtonContainer}>
// //           <Button title="Logout" onPress={handleLogout} />
// //         </View>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   scrollViewContent: {
// //     flexGrow: 1,
// //     justifyContent: 'space-between',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 20,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   logo: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //   },
// //   banner: {
// //     height: 200,
// //     backgroundColor: '#f0f0f0',
// //   },
// //   bannerImage: {
// //     width: '100%',
// //     height: '100%',
// //     resizeMode: 'cover',
// //   },
// //   bannerButton: {
// //     position: 'absolute',
// //     top: 20, // Vị trí từ trên xuống
// //     right: 20, // Vị trí từ phải sang trái
// //     backgroundColor: 'blue',
// //     paddingVertical: 10,
// //     paddingHorizontal: 20,
// //     borderRadius: 5,
// //   },
// //   bannerButtonText: {
// //     color: 'white',
// //     fontSize: 16,
// //   },
// //   section: {
// //     padding: 20,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   sectionTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     marginBottom: 10,
// //   },
// //   sectionContent: {
// //     fontSize: 16,
// //   },
// //   logoutButtonContainer: {
// //     padding: 20,
// //     borderTopWidth: 1,
// //     borderTopColor: '#ccc',
// //   },
// // });

// // export default HomeScreen;
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity, Button } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { MyDispatcherContext, MyUserContext } from '../configs/Contexts';
import { API_URL } from '../configs/APIs';
const HomeScreen = ({ navigation }) => {
  const { width } = Dimensions.get('window');
  const dispatch = useContext(MyDispatcherContext);
  const user = useContext(MyUserContext);
  const [services, setServices] = useState([]);
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetchServices();
    // Fetch address here
    fetchAddress();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${API_URL}/services`);
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
      // Handle error when unable to fetch data from the server
    }
  };

  const fetchAddress = async () => {
    // Fetch address logic here based on your requirements
    // For example, you can fetch it from an API or AsyncStorage
    // For demonstration purposes, I'll set a dummy address here
    setAddress('123 NAM KÌ KHỞI NGHĩA , Thành Phố Hồ Chí Minh');
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('access-token');
    await AsyncStorage.removeItem('user');
    dispatch({ type: 'logout' });
    navigation.navigate('Login'); // Redirect to login screen after logout
  };

  return (
    <View style={[styles.container, { marginTop: 5 }]}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
        <Image source={require('../assets/logo1.png')} style={styles.logo} />
        </View>

        {/* SwiperFlatList */}
        <SwiperFlatList
  autoplay
  autoplayDelay={3} // Thời gian trễ giữa các lần chuyển đổi tự động (đơn vị: giây)
  autoplayLoop
  style={styles.banner}
>
  <TouchableOpacity style={styles.bannerButton}>
    <Text style={styles.bannerButtonText}>Đăng kí</Text>
  </TouchableOpacity>
  <Image
    source={require('../assets/dat-lich.png')}
    style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
  />
  <Image
    source={require('../assets/bac-si.png')}
    style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
  />
  <Image
    source={require('../assets/trang-thiet-bi.jpg')}
    style={[styles.bannerImage, { width: width, aspectRatio: 16 / 7 }]}
  />
</SwiperFlatList>

        {/* Dịch vụ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dịch vụ</Text>
          {services.map(service => (
            <Text key={service.id} style={styles.serviceItem}>{service.name}</Text>
          ))}
        </View>

        {/* Bác sĩ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bác sĩ</Text>
          <Text style={styles.sectionContent}>Thông tin về các bác sĩ và chuyên gia</Text>
        </View>

        {/* Địa chỉ */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Địa chỉ</Text>
          <Text style={styles.sectionContent}>{address}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  banner: {
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerButton: {
    position: 'absolute',
    top: 20, // Vị trí từ trên xuống
    right: 20, // Vị trí từ phải sang trái
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bannerButtonText: {
    color: 'white',
    fontSize: 16,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
  serviceItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
},
});

export default HomeScreen;
