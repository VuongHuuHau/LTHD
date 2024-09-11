
// // import React, { useEffect, useReducer, useState } from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { MyDispatcherContext, MyUserContext } from './configs/Contexts';
// // import AuthNavigator from './Navigation/AuthNavigator';
// // import AppNavigator from './Navigation/AppNavigator';
// // import NurseNavigator from './Navigation/NurseNavigate';
// // import DoctorNavigator from './Navigation/DoctorNavigate';
// // import { MyUserReducer } from './configs/Reducers';

// // const App = () => {
// //   const [user, dispatch] = useReducer(MyUserReducer, null);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const checkLogin = async () => {
// //       try {
// //         const userToken = await AsyncStorage.getItem('access-token');
// //         if (userToken) {
// //           const response = await fetch('http://192.168.1.5:8000/patients/current_user/', {
// //             headers: {
// //               Authorization: `Bearer ${userToken}`,
// //             },
// //           });
// //           if (response.ok) {
// //             const userData = await response.json();
// //             console.log('User data:', userData);
// //             dispatch({ type: 'login', payload: userData });
// //           } else {
// //             console.error('Failed to fetch user data:', response.status);
// //             dispatch({ type: 'logout' });
// //           }
// //         }
// //       } catch (error) {
// //         console.error('Failed to load user data:', error);
// //         dispatch({ type: 'logout' });
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };

// //     checkLogin();
// //   }, []);

// //   if (isLoading) {
// //     return null; // Bạn có thể thay thế bằng một bộ tải spinner
// //   }

// //   return (
// //     <NavigationContainer>
// //       <MyDispatcherContext.Provider value={dispatch}>
// //         <MyUserContext.Provider value={user}>
// //           {user ? (
// //             user.role === 'Patient' ? (
// //               <AppNavigator />
// //             ) : user.role === 'Nurse' ? (
// //               <NurseNavigator />
// //             ) : user.role === 'Doctor' ? (
// //               <DoctorNavigator />
// //             ) : null
// //           ) : (
// //             <AuthNavigator />
// //           )}
// //         </MyUserContext.Provider>
// //       </MyDispatcherContext.Provider>
// //     </NavigationContainer>
// //   );
// // };

// // export default App;
// import React, { useEffect, useReducer, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { MyDispatcherContext, MyUserContext } from './configs/Contexts';
// import AuthNavigator from './Navigation/AuthNavigator';
// import AppNavigator from './Navigation/AppNavigator';
// import NurseNavigator from './Navigation/NurseNavigate';
// import DoctorNavigator from './Navigation/DoctorNavigate';
// import { MyUserReducer } from './configs/Reducers';

// const App = () => {
//   const [user, dispatch] = useReducer(MyUserReducer, null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkLogin = async () => {
//       try {
//         const userToken = await AsyncStorage.getItem('access-token');
//         if (userToken) {
//           const response = await fetch('http://192.168.1.5:8000/patients/current_user/', {
//             headers: {
//               Authorization: `Bearer ${userToken}`,
//             },
//           });
//           if (response.ok) {
//             const userData = await response.json();
//             console.log('User data:', userData);
//             dispatch({ type: 'login', payload: userData });
//           } else {
//             console.error('Failed to fetch user data:', response.status);
//             dispatch({ type: 'logout' });
//           }
//         } else {
//           dispatch({ type: 'logout' });
//         }
//       } catch (error) {
//         console.error('Failed to load user data:', error);
//         dispatch({ type: 'logout' });
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     checkLogin();
//   }, []);

//   useEffect(() => {
//     // Lắng nghe sự thay đổi trạng thái user để điều hướng
//     if (!isLoading && user === null) {
//       // Điều hướng tới AuthNavigator nếu user là null (đăng xuất)
//     }
//   }, [user, isLoading]);

//   if (isLoading) {
//     return null; // Bạn có thể thay thế bằng một spinner
//   }

//   return (
//     <NavigationContainer>
//       <MyDispatcherContext.Provider value={dispatch}>
//         <MyUserContext.Provider value={user}>
//           {user ? (
//             user.role === 'Patient' ? (
//               <AppNavigator />
//             ) : user.role === 'Nurse' ? (
//               <NurseNavigator />
//             ) : user.role === 'Doctor' ? (
//               <DoctorNavigator />
//             ) : null
//           ) : (
//             <AuthNavigator />
//           )}
//         </MyUserContext.Provider>
//       </MyDispatcherContext.Provider>
//     </NavigationContainer>
//   );
// };

// export default App;
import React, { useEffect, useReducer, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyDispatcherContext, MyUserContext } from './configs/Contexts';
import AuthNavigator from './Navigation/AuthNavigator';
import AppNavigator from './Navigation/AppNavigator';
import NurseNavigator from './Navigation/NurseNavigate';
import DoctorNavigator from './Navigation/DoctorNavigate';
import { MyUserReducer } from './configs/Reducers';
import { ActivityIndicator, View } from 'react-native';
import { API_URL } from './configs/APIs';
const App = () => {
  const [user, dispatch] = useReducer(MyUserReducer, null);
  const [isLoading, setIsLoading] = useState(true);

 

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const userToken = await AsyncStorage.getItem('access-token');
        if (userToken) {
          const response = await fetch(`${API_URL}/patients/current_user/`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          if (response.ok) {
            const userData = await response.json();
            dispatch({ type: 'login', payload: userData });
            
  
          } else {
            dispatch({ type: 'logout' });
          }
        } else {
          dispatch({ type: 'logout' });
        }
      } catch (error) {
        dispatch({ type: 'logout' });
      } finally {
        setIsLoading(false);
      }
    };
  
    checkLogin();
  }, [user]); // Gọi lại khi user thay đổi

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <MyDispatcherContext.Provider value={dispatch}>
        <MyUserContext.Provider value={user}>
          {user ? (
            user.role === 'Patient' ? (
              <AppNavigator />
            ) : user.role === 'Nurse' ? (
              <NurseNavigator />
            ) : user.role === 'Doctor' ? (
              <DoctorNavigator />
            ) : null
          ) : (
            <AuthNavigator />
          )}
        </MyUserContext.Provider>
      </MyDispatcherContext.Provider>
    
    </NavigationContainer>
  );
};

export default App;

