

import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert, Button, RefreshControl } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MyUserContext } from "../../configs/Contexts";
import { FontAwesome } from '@expo/vector-icons'; 
import { API_URL } from '../../configs/APIs'; 

import AsyncStorage from '@react-native-async-storage/async-storage';

const AppointmentScreenp = ({ navigation }) => {
  const user = useContext(MyUserContext);
  const [appointments, setAppointments] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    setIsRefreshing(true);
    try {
      if (!user || !user.id) {
        console.log('User ID is undefined');
        return;
      }
      const userToken = await AsyncStorage.getItem('access-token');
      const response = await axios.get(`${API_URL}/appointments/?patient_id=${user.id}`,{
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      const filteredAppointments = response.data.filter(appointment => {
        const includedStatus = ['pending', 'confirmed', 'completed']; 
        return includedStatus.includes(appointment.status);
      });
      setAppointments(filteredAppointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      Alert.alert('Lỗi', 'Không thể lấy lịch khám từ server');
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleCancel = async (id) => {
    try {
      const userToken = await AsyncStorage.getItem('access-token');
      await axios.patch(`${API_URL}/appointments/${id}/cancel/`, null, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      Alert.alert('Thông báo', 'Lịch khám đã được hủy thành công');
      fetchAppointments();
      console.log(userToken);
    } catch (error) {
      Alert.alert('Lỗi', 'Không thể hủy lịch khám');
    }
  };
  

  const renderItem = ({ item }) => (
   
    <View style={styles.appointmentContainer}>
    <View style={styles.appointmentRow}>
      <FontAwesome name="calendar" size={24} color="black" style={styles.icon} />
      <Text style={styles.appointmentText}>Date: {item.selected_date}</Text>
    </View>
    <View style={styles.appointmentRow}>
      <FontAwesome name="clock-o" size={24} color="black" style={styles.icon} />
      <Text style={styles.appointmentText}>Time: {item.selected_time}</Text>
    </View>
    <View style={styles.appointmentRow}>
      <FontAwesome name="user-md" size={24} color="black" style={styles.icon} />
      <Text style={styles.appointmentText}>Doctor ID: {item.doctor ? item.doctor : 'Not assigned'}</Text>
    </View>
    <View style={styles.appointmentRow}>
      <FontAwesome name="info-circle" size={24} color="black" style={styles.icon} />
      <Text style={styles.appointmentText}>Status: {item.status}</Text>
    </View>
    {item.status === 'pending' && (
        <TouchableOpacity style={styles.prescriptionButton} onPress={() => handleCancel(item.id)}>
          <Text style={styles.cancelButtonText}>Hủy lịch khám</Text>
        </TouchableOpacity>
      )}
  </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lịch khám của bạn</Text>
      <FlatList
        data={appointments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={fetchAppointments} />}
      />
      <TouchableOpacity style={styles.bookingButton} onPress={() => navigation.navigate('AppointmentBooking', { patientId: user.id })}>
        <Text style={styles.bookingButtonText}>Đăng Kí Lịch Khám</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7ff', // Màu nền xanh y tế nhạt
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0047ab', // Màu xanh y tế đậm
    marginBottom: 20,
  },
  appointmentContainer: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 2,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  appointmentDate: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0047ab',
  },
  appointmentText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  cancelButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  bookingButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#0047ab',
    borderRadius: 10,
    alignItems: 'center',
  },
  bookingButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },  prescriptionButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-end',
  }
});

export default AppointmentScreenp;
