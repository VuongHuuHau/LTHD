// import 'react-native-gesture-handler';


// import { createStackNavigator } from '@react-navigation/stack';


//  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React, { useContext, useReducer } from 'react';
// import { Icon } from 'react-native-paper';
// import Register from '../components/User/Register';
// // import Login from '../components/User/Login';
// // import NurseAppointment from './components/nurse/NurseAppointment';
// import AppointmentBooking from '../components/User/Appintmentbooking';

// import { MyDispatcherContext, MyUserContext } from '../configs/Contexts';
// import { MyUserReducer } from '../configs/Reducers';
// import HomeScreen from '../components/HomeScreen';
// import AppointmentScreenp from '../components/User/AppointmentScreenp';
// import { UserProvider } from '../configs/Contexts';
// import PatientListScreen from '../components/PatientListScreen';
// import NurseAppointment from '../components/nurse/NurseAppointment';
// import Logout from '../components/Logout';
// // const Stack = createNativeStackNavigator();

// // const MyStack = () => {
// //   return (
// //     <Stack.Navigator screenOptions={{headerShown: false}}>
// //          <Stack.Screen name="LOGO" component={HomeScreen} options={{ title: 'LOGO' }}  />
// //          {/* <Stack.Screen name="Đăng Nhập" component={Login} options={{ title: 'Đăng Nhập' }} /> */}
// //          <Stack.Screen name="AppointmentScreenp" component={AppointmentScreenp} />
// //          <Stack.Screen name="AppointmentBooking" component={AppointmentBooking} />
         
// //          <Stack.Screen name="Patients" component={PatientListScreen} />
// //          <Stack.Screen name="Home" component={HomeScreen} />
// //     </Stack.Navigator>
// //   );
// // }

// // const Tab = createBottomTabNavigator();
// // const MyTab = () => {
// //   const user = useContext(MyUserContext)
// //   return (
// //     // <Tab.Navigator>
// //     //   <Tab.Screen name='Trang Chủ' component={MyStack} options={{title: "Trang Chủ", tabBarIcon: () => <Icon color='blue' size={30} source="home" />}} />
// //     //   {user===null?<>
// //     //     <Tab.Screen name='Lịch khám' component={AppointmentScreenp} options={{title: "Lịch khám",tabBarIcon: () => <Icon color='blue' size={30} source="calendar" />}} />
// //     //     <Tab.Screen name='Login' component={Login} options={{title: "Đăng Nhập",tabBarIcon: () => <Icon color='blue' size={30} source="account" />}} />
       
// //     //   </>:<>
      
// //     //   {/* <Tab.Screen name='Profile' component={UserProfile} options={{title: user.username||"Profile" ,tabBarIcon: () => <Icon color='blue' size={30} source="login" />}} /> */}
// //     //   </>}
      
// //     // </Tab.Navigator>
// //     <Tab.Navigator>
// //   <Tab.Screen
// //     name='Trang Chủ'
// //     component={MyStack}
// //     options={{
// //       title: "Trang Chủ",
// //       tabBarIcon: () => <Icon color='blue' size={30} source="home" />
// //     }}
// //   /> 
  
// //   {user === null ? (
// //     <>
    
// //       <Tab.Screen
// //         name='Đăng Nhập'
// //         component={Login}
// //         options={{
// //           title: "Đăng Nhập",
// //           tabBarIcon: () => <Icon color='blue' size={30} source="account" />
// //         }}
// //       />
// //        <Tab.Screen
// //         name='Đăng kis'
// //         component={Register}
// //         options={{
// //           title: "Đăng Nhập",
// //           tabBarIcon: () => <Icon color='blue' size={30} source="account" />
// //         }}
// //       />
// //     </>
// //   ) : (
// //     <>
    
// //       {/* Thêm tab mới sau khi người dùng đăng nhập thành công */}
// //       <Tab.Screen
// //         name='Lịch khám'
// //         component={AppointmentScreenp}
// //         options={{
// //           title: "Lịch khám",
// //           tabBarIcon: () => <Icon color='blue' size={30} source="calendar" />
// //         }}
// //       />
// //     </>
// //   )}
// // </Tab.Navigator>

// //   );
// // }
// // export default function AppNavigator() {
// //     const [user, dispatcher] = useReducer(MyUserReducer, null);
  
// //     return (
// //       <NavigationContainer>
// //         <MyUserContext.Provider value={user}>
// //           <MyDispatcherContext.Provider value={dispatcher}>
// //             <MyTab />
// //           </MyDispatcherContext.Provider>
// //         </MyUserContext.Provider>
// //       </NavigationContainer>
// //     );
// //   }

// // import React from 'react';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import HomeScreen from '../components/HomeScreen';
// // import AppointmentScreenp from '../components/User/AppointmentScreenp';

// // import AppointmentBooking from '../components/User/Appintmentbooking';

// // import PatientListScreen from '../components/PatientListScreen';

// const Stack = createStackNavigator();


// const MyStack = () => {
  
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//          <Stack.Screen name="LOGO" component={HomeScreen} options={{ title: 'LOGO' }}  />
//          {/* <Stack.Screen name="Đăng Nhập" component={Login} options={{ title: 'Đăng Nhập' }} /> */}
//          <Stack.Screen name="AppointmentScreenp" component={AppointmentScreenp} />
//          <Stack.Screen name="AppointmentBooking" component={AppointmentBooking} />
         
//          <Stack.Screen name="Patients" component={PatientListScreen} />
//          <Stack.Screen name="Home" component={HomeScreen} />
//     </Stack.Navigator>
//   );
// }

// const Tab = createBottomTabNavigator();
// const MyTab = () => {
//   const user = useContext(MyUserContext)
//   return (
//     // <Tab.Navigator>
//     //   <Tab.Screen name='Trang Chủ' component={MyStack} options={{title: "Trang Chủ", tabBarIcon: () => <Icon color='blue' size={30} source="home" />}} />
//     //   {user===null?<>
//     //     <Tab.Screen name='Lịch khám' component={AppointmentScreenp} options={{title: "Lịch khám",tabBarIcon: () => <Icon color='blue' size={30} source="calendar" />}} />
//     //     <Tab.Screen name='Login' component={Login} options={{title: "Đăng Nhập",tabBarIcon: () => <Icon color='blue' size={30} source="account" />}} />
       
//     //   </>:<>
      
//     //   {/* <Tab.Screen name='Profile' component={UserProfile} options={{title: user.username||"Profile" ,tabBarIcon: () => <Icon color='blue' size={30} source="login" />}} /> */}
//     //   </>}
      
//     // </Tab.Navigator>
//     <Tab.Navigator>
//   <Tab.Screen
//     name='Trang Chủ'
//     component={MyStack}
//     options={{
//       title: "Trang Chủ",
//       tabBarIcon: () => <Icon color='blue' size={30} source="home" />
//     }}
//   /> 
  
//   {user === null ? (
//     <>
// {/*     
//       <Tab.Screen
//         name='Đăng Nhập'
//         component={Login}
//         options={{
//           title: "Đăng Nhập",
//           tabBarIcon: () => <Icon color='blue' size={30} source="account" />
//         }}
//       /> */}
//        <Tab.Screen
//         name='Đăng kis'
//         component={Register}
//         options={{
//           title: "Đăng Nhập",
//           tabBarIcon: () => <Icon color='blue' size={30} source="account" />
//         }}
//       />
//     </>
//   ) : (
//     <>
    
//       {/* Thêm tab mới sau khi người dùng đăng nhập thành công */}
//       <Tab.Screen
//         name='Lịch khám'
//         component={AppointmentScreenp}
//         options={{
//           title: "Lịch khám",
//           tabBarIcon: () => <Icon color='blue' size={30} source="calendar" />
//         }}
//       />
//         <Tab.Screen
//             name='Đăng Xuất'
//             component={Logout}
//             options={{
//               title: "Đăng Xuất",
//               tabBarIcon: () => <Icon color='blue' size={30} source="logout" />
//             }}
//           />
//     </>
//   )}
// </Tab.Navigator>

//   );
// }
// const AppNavigator = () => {
//   return (
    
  
//     <MyTab />
//   );
// };

// export default AppNavigator;
import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-paper';
import HomeScreen from '../components/HomeScreen';
import AppointmentScreenp from '../components/User/AppointmentScreenp';
import Register from '../components/User/Register';
import AppointmentBooking from '../components/User/Appintmentbooking';
import PatientListScreen from '../components/PatientListScreen';
import Logout from '../components/Logout';
import { MyUserContext, MyDispatcherContext } from '../configs/Contexts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileScreen from '../components/Profile';
import EditProfileScreen from '../components/EditProfile';
import ChangePasswordScreen from '../components/ChangePasswordScreen ';

const Stack = createStackNavigator();

const MyStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LOGO" component={HomeScreen} />
    <Stack.Screen name="AppointmentScreenp" component={AppointmentScreenp} />
    <Stack.Screen name="AppointmentBooking" component={AppointmentBooking} />
    <Stack.Screen name="Patients" component={PatientListScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const MyTab = ({ navigation }) => {
  const user = useContext(MyUserContext);
  const dispatch = useContext(MyDispatcherContext);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('access-token');
      dispatch({ type: 'logout' });
     
    } catch (error) {
      // console.error('Failed to logout:', error);
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Trang Chủ"
        component={MyStack}
        options={{
          title: 'Trang Chủ',
          tabBarIcon: () => <Icon color="blue" size={30} source="home" />,
        }}
      />
      {user ? (
        <>
          <Tab.Screen
            name="Lịch khám"
            component={AppointmentScreenp}
            options={{
              title: 'Lịch khám',
              tabBarIcon: () => <Icon color="blue" size={30} source="calendar" />,
            }}
          />
          <Tab.Screen
            name="Đăng Xuất"
             component={Logout}
            options={{
              title: 'Đăng Xuất',
              tabBarIcon: () => <Icon color="blue" size={30} source="logout" />,
            }}
            listeners={{
              tabPress: (e) => {
                e.preventDefault();
                handleLogout();
              },
            }}
          />
          <Tab.Screen
            name="Proflie"
            component={ProfileScreen}
            options={{
              title: 'Xem Thông Tin cá nhân ',
              tabBarIcon: () => <Icon color="blue" size={30} source="account" />,
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="Proflie"
            component={ProfileScreen}
            options={{
              title: 'Xem Thông Tin cá nhân ',
              tabBarIcon: () => <Icon color="blue" size={30} source="account" />,
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

const AppNavigator = () => <MyTab />;

export default AppNavigator;
