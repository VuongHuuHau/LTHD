
import React, { useContext } from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyDispatcherContext } from '../configs/Contexts';
import NurseAppointment from '../components/nurse/NurseAppointment';
import BillScreen from '../components/nurse/BillScreen';
import ZaloPayPaymentScreen from '../components/nurse/ZaloPayPaymentScreen ';

const Stack = createStackNavigator();

const NurseNavigate = () => {
  const dispatch = useContext(MyDispatcherContext);

  const handleLogout = async () => {
    try {
      // Xóa thông tin đăng nhập từ bộ nhớ cục bộ
      await AsyncStorage.removeItem('access-token');
      await AsyncStorage.removeItem('user');
      // Đặt người dùng về trạng thái không đăng nhập bằng cách gửi hành động logout
      dispatch({ type: 'logout' });
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    
      // <Stack.Navigator initialRouteName="NurseAppointment">
      //   <Stack.Screen
      //     name="NurseAppointment"
      //     component={NurseAppointment}
      //     options={{
      //       headerRight: () => (
      //         <Button onPress={handleLogout} title="Logout" color="#000" />
      //       ),
      //     }}
      //   />
      //    <Stack.Screen
      //     name="Listill"
      //     component={BillDetailsScreen} // Ensure this matches the imported component correctly
      //     options={{ title: 'LISTBILL' }}
      //   />
      // </Stack.Navigator>
      <Stack.Navigator initialRouteName="NurseAppointment">
  <Stack.Screen
    name="NurseAppointment"
    component={NurseAppointment}
    options={{
      headerRight: () => (
        <Button onPress={handleLogout} title="Logout" color="#000" />
      ),
    }}
  />
  {/* <Stack.Screen
    name="ListBill" // Tên này sẽ được sử dụng để điều hướng đến màn hình List Bill
    component={BillScreen}
    options={{ title: 'List Bill' }} // Tiêu đề hiển thị trên header khi điều hướng đến màn hình List Bill
  /> */}
  <Stack.Screen name="BillScreen" component={BillScreen} />
  <Stack.Screen name="ZaloPayPaymentScreen" component={ZaloPayPaymentScreen} />
</Stack.Navigator>

    
  );
};

export default NurseNavigate;
