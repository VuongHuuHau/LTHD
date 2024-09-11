
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { API_URL } from '../../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API

const AppointmentBooking = ({ route, navigation }) => {
  const { patientId } = route.params;
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [appointmentTime, setAppointmentTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleBooking = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/patients/${patientId}/add_appointment/`, {
        selected_date: formatDate(appointmentDate),
        selected_time: formatTime(appointmentTime),
      });

      Alert.alert('Thành công', 'Đăng ký lịch khám thành công!');
      setAppointmentDate(new Date());
      setAppointmentTime(new Date());
      navigation.navigate('AppointmentScreen');
    } catch (error) {
      console.error('Lỗi đăng ký lịch khám:', error);
      Alert.alert('Lỗi', 'Đăng ký lịch khám thất bại!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Đăng ký lịch khám</Text>

      <TouchableOpacity style={styles.pickerButton} onPress={() => setShowDatePicker(true)}>
        <Ionicons name="calendar" size={24} color="#0047ab" />
        <Text style={styles.pickerText}>Chọn ngày khám: {formatDate(appointmentDate)}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={appointmentDate}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setAppointmentDate(selectedDate);
            }
          }}
        />
      )}

      <TouchableOpacity style={styles.pickerButton} onPress={() => setShowTimePicker(true)}>
        <Ionicons name="time" size={24} color="#0047ab" />
        <Text style={styles.pickerText}>Chọn giờ khám: {formatTime(appointmentTime)}</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={appointmentTime}
          mode="time"
          display="default"
          onChange={(event, selectedTime) => {
            setShowTimePicker(false);
            if (selectedTime) {
              setAppointmentTime(selectedTime);
            }
          }}
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleBooking}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Đang xử lý...' : 'Đăng ký'}
        </Text>
      </TouchableOpacity>

      <Text style={styles.notice}>
        Giờ làm việc: Thứ 2 tới Thứ 6, sáng từ 7h đến 11h, chiều từ 13h đến 17h
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e6f7ff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0047ab',
    marginBottom: 20,
  },
  pickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#0047ab',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
  },
  pickerText: {
    fontSize: 18,
    color: '#0047ab',
    marginLeft: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#0047ab',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notice: {
    fontSize: 16,
    color: '#ff0000',
    marginTop: 20,
    textAlign: 'center',
  },
});

export default AppointmentBooking;
