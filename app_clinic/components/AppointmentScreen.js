// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
// import axios from 'axios';
// import { API_URL } from '../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API
// import MyStyles from '../styles/MyStyles';

// const AppointmentScreen = ({ route, navigation }) => {
//   const { patientId } = route.params;
//   const [appointments, setAppointments] = useState([]);

//   const loadappoint = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/appointments/?patient_id=${patientId}`);
//       setAppointments(response.data);
      
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     loadappoint();
//   }, [patientId]);

//   const renderAppointmentItem = ({ item }) => (
//     <View style={styles.itemContainer}>
//       <Text>Date: {item.selected_date}</Text>
//       <Text>Time: {item.selected_time}</Text>
//       <Text>Doctor ID: {item.doctor ? item.doctor : 'Not assigned'}</Text>
//       <Text>Status: {item.status}</Text>
//       <Button
//         title="Kê đơn"
//         onPress={() => navigation.navigate('Prescription', { appointmentId: item.id })}
//       />
//     </View>
//   );

//   return (
//     <View style={[MyStyles.container, MyStyles.margin]}>
//       <Text style={styles.title}>Lịch Khám</Text>
//       <FlatList
//         contentContainerStyle={styles.list}
//         data={appointments}
//         renderItem={renderAppointmentItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   itemContainer: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   itemText: {
//     fontSize: 16,
//   },
// });

// export default AppointmentScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import axios from 'axios';
import { API_URL } from '../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API
import MyStyles from '../styles/MyStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppointmentScreen = ({ route, navigation }) => {
  const { patientId } = route.params;
  const [appointments, setAppointments] = useState([]);

  const loadAppointments = async () => {
    const userToken = await AsyncStorage.getItem('access-token'); // Lấy token từ AsyncStorage
    try {
      const response = await axios.get(`${API_URL}/appointments/?patient_id=${patientId}`,{
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      const approvedAppointments = response.data.filter(appointment => appointment.status === 'approved');
      setAppointments(approvedAppointments);
     
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, [patientId]);

  const handlePrescription = (appointmentId) => {
    navigation.navigate('Prescription', { appointmentId });
  };

  const handleViewAppointmentHistory = () => {
    navigation.navigate('PrescriptionHistoryScreen', { patientId });
  };

  const renderAppointmentItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePrescription(item.id)}>
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
        <TouchableOpacity onPress={() => handlePrescription(item.id)} style={styles.prescriptionButton}>
          <Text style={styles.buttonText}>Kê Đơn</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, MyStyles.margin]}>
      <Text style={styles.title}>Lịch Khám</Text>
      <FlatList
        contentContainerStyle={styles.list}
        data={appointments}
        renderItem={renderAppointmentItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity onPress={handleViewAppointmentHistory} style={styles.historyButton}>
        <Text style={styles.buttonText}>Xem Lịch Sử Khám</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  appointmentContainer: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
  },
  appointmentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  appointmentText: {
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
  prescriptionButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  historyButton: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
});

export default AppointmentScreen;
