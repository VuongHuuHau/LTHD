
 


import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {TouchableOpacity, Button, View,Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PatientListScreen from '../components/PatientListScreen';
import AppointmentScreen from '../components/AppointmentScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyDispatcherContext } from '../configs/Contexts';
import Logout from '../components/Logout';
import PrescriptionScreen from '../components/PrescriptionScreen';
import PrescriptionHistoryScreen from '../components/PresciptionHistory';


const Stack = createNativeStackNavigator();

export default function DoctorAppNavigator() {
  
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
    <Stack.Navigator>
      <Stack.Screen
        name="PatientListScreen"
        component={PatientListScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="AppointmentScreen" component={AppointmentScreen} />
      <Stack.Screen name="Prescription" component={PrescriptionScreen} />
      <Stack.Screen name="PrescriptionHistoryScreen" component={PrescriptionHistoryScreen} />
      
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
});