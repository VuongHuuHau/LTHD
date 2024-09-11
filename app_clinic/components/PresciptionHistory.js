// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const PrescriptionHistoryScreen = ({ route }) => {
//   const { patientId } = route.params;
//   const [prescriptions, setPrescriptions] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchPrescriptions = async () => {
//       try {
//         const userToken = await AsyncStorage.getItem('access-token');
//         const response = await axios.get(`http://192.168.1.7:8000/prescriptions/`, {
//           headers: {
//             Authorization: `Bearer ${userToken}`,
//           },
//         });
//         setPrescriptions(response.data);
//       } catch (error) {
//         if (error.response && error.response.status === 401) {
//           setError('Unauthorized: Please login again.');
//           // Handle logout or token refresh if needed
//         } else {
//           setError(`Error fetching prescriptions: ${error.message}`);
//         }
//       }
//     };

//     fetchPrescriptions();
//   }, []);

//   if (error) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.errorText}>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Prescription History</Text>
//       <FlatList
//         data={prescriptions}
//         renderItem={({ item }) => (
//           <View style={styles.prescriptionContainer}>
//             <Text>Appointment ID: {item.appointment}</Text>
//             <Text>Symptom: {item.symptom}</Text>
//             {/* Add more prescription details here */}
//           </View>
//         )}
//         keyExtractor={(item) => (item.id ? item.id.toString() : '')} // Ensure item.id exists before calling toString()
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   prescriptionContainer: {
//     backgroundColor: '#f0f0f0',
//     marginBottom: 10,
//     borderRadius: 10,
//     padding: 15,
//   },
//   errorText: {
//     fontSize: 18,
//     color: 'red',
//     textAlign: 'center',
//   },
// });

// export default PrescriptionHistoryScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../configs/APIs';
const PrescriptionHistoryScreen = ({ route }) => {
  const { patientId } = route.params;
  const [appointments, setAppointments] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const userToken = await AsyncStorage.getItem('access-token');
        const response = await axios.get(`${API_URL }/appointments/?patient_id=${patientId}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        setAppointments(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError('Unauthorized: Please login again.');
          // Handle logout or token refresh if needed
        } else {
          setError(`Error fetching appointments: ${error.message}`);
        }
      }
    };

    fetchAppointments();
  }, [patientId]); // Fetch appointments whenever patientId changes

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const userToken = await AsyncStorage.getItem('access-token');
        const prescriptionRequests = appointments.map(async appointment => {
          const response = await axios.get(`${API_URL }/prescriptions/?appointment_id=${appointment.id}`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          return response.data;
        });

        const prescriptionsList = await Promise.all(prescriptionRequests);
        const flattenedPrescriptions = prescriptionsList.flat();
        setPrescriptions(flattenedPrescriptions);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError('Unauthorized: Please login again.');
          // Handle logout or token refresh if needed
        } else {
          setError(`Error fetching prescriptions: ${error.message}`);
        }
      }
    };

    if (appointments.length > 0) {
      fetchPrescriptions();
    }
  }, [appointments]); // Fetch prescriptions whenever appointments change

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prescription History</Text>
      <FlatList
        data={prescriptions}
        renderItem={({ item }) => (
          <View style={styles.prescriptionContainer}>
          <Text>Appointment ID: {item.appointment}</Text>
          <Text>Symptom: {item.symptom}</Text>
          <Text>Bệnh lý: {item.sick}</Text>
          <Text>Dịch vụ:</Text>
          <FlatList
            data={item.services}
            renderItem={({ item }) => (
              <View style={styles.serviceContainer}>
                <Text>{item.name}</Text>
                <Text>Price: {item.price}</Text>
              </View>
            )}
            keyExtractor={(service) => service.id.toString()}
          />
          <Text>Đơn thuốc:</Text>
          <FlatList
            data={item.prescription_medicine}
            renderItem={({ item }) => (
              <View style={styles.prescriptionMedicineContainer}>
                <Text>Thuốc ID: {item.medicine}</Text>
                <Text>Số lượng: {item.quantity}</Text>
              </View>
            )}
            keyExtractor={(medicine) => medicine.id.toString()}
          />
        </View>
        )}
        keyExtractor={(item) => (item.id ? item.id.toString() : '')} // Ensure item.id exists and is a string
      />
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
  prescriptionContainer: {
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
  },
  serviceContainer: {
    marginLeft: 10,
    marginBottom: 5,
  },
  prescriptionMedicineContainer: {
    marginLeft: 10,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
  },
});

export default PrescriptionHistoryScreen;

