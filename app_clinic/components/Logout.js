// // Trong một thành phần hoặc màn hình của bạn
// import React, { useContext } from 'react';
// import { Button } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { MyDispatcherContext } from '../configs/Contexts';

// const Logout = () => {
//   const dispatch = useContext(MyDispatcherContext);

//   const handleLogout = async () => {
//     try {
//       // Xóa thông tin đăng nhập từ bộ nhớ cục bộ
//       await AsyncStorage.removeItem('access-token');
//       await AsyncStorage.removeItem('user');
//       // Đặt người dùng về trạng thái không đăng nhập bằng cách gửi hành động logout
//       dispatch({ type: 'logout' });
//     } catch (error) {
//       console.error('Failed to logout:', error);
//     }
//   };

//   return <Button title="Logout" onPress={handleLogout} />;
// };

// export default Logout;
import React, { useContext } from 'react';
import { Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyDispatcherContext } from '../configs/Contexts';
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
  const dispatch = useContext(MyDispatcherContext);
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('access-token');
      dispatch({ type: 'logout' });
    
    } catch (error) {
      // console.error('Failed to logout:', error);
    }
  };

  return <Button title="Logout" onPress={handleLogout} />;
};

export default Logout;
