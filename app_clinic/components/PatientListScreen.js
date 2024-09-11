// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// // // // // import axios from 'axios';
// // // // // import { API_URL } from '../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API

// // // // // const PatientListScreen = ({ navigation }) => {
// // // // //   const [patients, setPatients] = useState([]);
// // // // //   const [search, setSearch] = useState('');

// // // // //   useEffect(() => {
// // // // //     const fetchPatients = async () => {
// // // // //       try {
// // // // //         const response = await axios.get(`${API_URL}/patients/`); // API_URL là URL của API của bạn
// // // // //         setPatients(response.data);
// // // // //       } catch (error) {
// // // // //         console.error(error);
// // // // //       }
// // // // //     };

// // // // //     fetchPatients();
// // // // //   }, []);

// // // // //   const handleSearch = (text) => {
// // // // //     setSearch(text);
// // // // //   };

// // // // //   const filteredPatients = patients.filter(patient =>
// // // // //     patient.first_name.toLowerCase().includes(search.toLowerCase())
// // // // //   );

// // // // //   const renderPatientItem = ({ item }) => (
// // // // //     // <TouchableOpacity onPress={() => navigation.navigate('appointments', { id: item.id })}>
              

// // // // //     //   <View style={styles.itemContainer}>
// // // // //     //     <Text style={styles.itemText}>{item.first_name} {item.last_name}</Text>
        
// // // // //     //   </View>
// // // // //     // </TouchableOpacity>
// // // // //     <TouchableOpacity key={item.id} onPress={() => navigation.navigate('AppointmentScreen', {'patientId': item.id})}>
// // // // //       <View style={styles.itemContainer}>
      
// // // // //         <Text style={styles.itemText}>{item.first_name} {item.last_name}</Text>
// // // // //       </View>
// // // // //     </TouchableOpacity>
// // // // //   );

// // // // //   return (
// // // // //     <View style={styles.container}>
// // // // //       <TextInput
// // // // //         style={styles.searchBar}
// // // // //         placeholder="Search Patients"
// // // // //         value={search}
// // // // //         onChangeText={handleSearch}
// // // // //       />
// // // // //       <FlatList
// // // // //         data={filteredPatients}
// // // // //         renderItem={renderPatientItem}
// // // // //         keyExtractor={(item) => item.id.toString()}
// // // // //       />
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // const styles = StyleSheet.create({
// // // // //   container: {
// // // // //     flex: 1,
// // // // //     paddingHorizontal: 20,
// // // // //     paddingVertical: 10,
// // // // //   },
// // // // //   searchBar: {
// // // // //     height: 40,
// // // // //     borderColor: '#ccc',
// // // // //     borderWidth: 1,
// // // // //     borderRadius: 5,
// // // // //     paddingHorizontal: 10,
// // // // //     marginBottom: 20,
// // // // //   },
// // // // //   itemContainer: {
// // // // //     padding: 10,
// // // // //     borderBottomWidth: 1,
// // // // //     borderBottomColor: '#ccc',
// // // // //   },
// // // // //   itemText: {
// // // // //     fontSize: 16,
// // // // //   },
// // // // // });

// // // // // export default PatientListScreen;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// // // // import axios from 'axios';
// // // // import { API_URL } from '../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API

// // // // const PatientListScreen = ({ navigation }) => {
// // // //   const [patients, setPatients] = useState([]);
// // // //   const [search, setSearch] = useState('');

// // // //   useEffect(() => {
// // // //     const fetchPatients = async () => {
// // // //       try {
// // // //         const response = await axios.get(`${API_URL}/patients/`); // API_URL là URL của API của bạn
// // // //         setPatients(response.data);
// // // //       } catch (error) {
// // // //         console.error(error);
// // // //       }
// // // //     };

// // // //     fetchPatients();
// // // //   }, []);

// // // //   const handleSearch = (text) => {
// // // //     setSearch(text);
// // // //   };

// // // //   const filteredPatients = patients.filter(patient =>
// // // //     patient.first_name.toLowerCase().includes(search.toLowerCase())
// // // //   );

// // // //   const renderPatientItem = ({ item }) => (
// // // //     <TouchableOpacity onPress={() => navigation.navigate('AppointmentScreen', { patientId: item.id })}>
// // // //       <View style={styles.itemContainer}>
// // // //         <Text style={styles.itemName}>{item.first_name} {item.last_name}</Text>
// // // //         <Text style={styles.itemDetail}>ID: {item.id}</Text>
// // // //       </View>
// // // //     </TouchableOpacity>
// // // //   );

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <TextInput
// // // //         style={styles.searchBar}
// // // //         placeholder="Search Patients"
// // // //         value={search}
// // // //         onChangeText={handleSearch}
// // // //       />
// // // //       <FlatList
// // // //         data={filteredPatients}
// // // //         renderItem={renderPatientItem}
// // // //         keyExtractor={(item) => item.id.toString()}
// // // //       />
// // // //     </View>
// // // //   );
// // // // };

// // // // const styles = StyleSheet.create({
// // // //   container: {
// // // //     flex: 1,
// // // //     backgroundColor: '#fff',
// // // //     paddingHorizontal: 20,
// // // //     paddingTop: 20,
// // // //   },
// // // //   searchBar: {
// // // //     height: 40,
// // // //     borderColor: '#ccc',
// // // //     borderWidth: 1,
// // // //     borderRadius: 5,
// // // //     paddingHorizontal: 10,
// // // //     marginBottom: 20,
// // // //   },
// // // //   itemContainer: {
// // // //     paddingVertical: 15,
// // // //     borderBottomWidth: 1,
// // // //     borderBottomColor: '#eee',
// // // //   },
// // // //   itemName: {
// // // //     fontSize: 18,
// // // //     fontWeight: 'bold',
// // // //   },
// // // //   itemDetail: {
// // // //     fontSize: 16,
// // // //     color: '#666',
// // // //   },
// // // // });

// // // // export default PatientListScreen;

// // // import React, { useState, useEffect } from 'react';
// // // import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// // // import axios from 'axios';
// // // import { API_URL } from '../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API

// // // const PatientListScreen = ({ navigation }) => {
// // //   const [patients, setPatients] = useState([]);
// // //   const [search, setSearch] = useState('');

// // //   useEffect(() => {
// // //     const fetchPatients = async () => {
// // //       try {
// // //         const response = await axios.get(`${API_URL}/patients/`); // API_URL là URL của API của bạn
// // //         setPatients(response.data);
// // //       } catch (error) {
// // //         console.error(error);
// // //       }
// // //     };

// // //     fetchPatients();
// // //   }, []);

// // //   const handleSearch = (text) => {
// // //     setSearch(text);
// // //   };

// // //   const filteredPatients = patients.filter(patient =>
// // //     patient.first_name.toLowerCase().includes(search.toLowerCase())
// // //   );

// // //   const renderPatientItem = ({ item }) => (
// // //     <TouchableOpacity onPress={() => navigation.navigate('AppointmentScreen', { patientId: item.id })}>
// // //       <View style={styles.itemContainer}>
// // //         <Text style={styles.itemName}>{item.first_name} {item.last_name}</Text>
// // //         <Text style={styles.itemDetail}>ID: {item.id}</Text>
// // //       </View>
// // //     </TouchableOpacity>
// // //   );

// // //   return (
// // //     <View style={styles.container}>
// // //       <TextInput
// // //         style={styles.searchBar}
// // //         placeholder="Search Patients"
// // //         value={search}
// // //         onChangeText={handleSearch}
// // //       />
// // //       <FlatList
// // //         data={filteredPatients}
// // //         renderItem={renderPatientItem}
// // //         keyExtractor={(item) => item.id.toString()}
// // //       />
// // //     </View>
// // //   );
// // // };

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     backgroundColor: '#fff',
// // //     paddingHorizontal: 20,
// // //     paddingTop: 20,
// // //   },
// // //   searchBar: {
// // //     height: 40,
// // //     borderColor: '#ccc',
// // //     borderWidth: 1,
// // //     borderRadius: 5,
// // //     paddingHorizontal: 10,
// // //     marginBottom: 20,
// // //   },
// // //   itemContainer: {
// // //     paddingVertical: 15,
// // //     borderBottomWidth: 1,
// // //     borderBottomColor: '#eee',
// // //   },
// // //   itemName: {
// // //     fontSize: 18,
// // //     fontWeight: 'bold',
// // //   },
// // //   itemDetail: {
// // //     fontSize: 16,
// // //     color: '#666',
// // //   },
// // // });

// // // export default PatientListScreen;
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
// // import axios from 'axios';
// // import { API_URL } from '../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API

// // const PatientListScreen = ({ navigation }) => {
// //   const [patients, setPatients] = useState([]);
// //   const [search, setSearch] = useState('');
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchPatientsWithAppointments = async () => {
// //       try {
// //         const patientResponse = await axios.get(`${API_URL}/patients/`);
// //         const allPatients = patientResponse.data;

// //         const patientsWithAppointments = await Promise.all(allPatients.map(async (patient) => {
// //           const appointmentResponse = await axios.get(`${API_URL}/appointments/?patient_id=${patient.id}`);
// //           if (appointmentResponse.data.length > 0) {
// //             return patient;
// //           }
// //           return null;
// //         }));

// //         // Lọc bỏ các giá trị null
// //         const filteredPatients = patientsWithAppointments.filter(patient => patient !== null);

// //         setPatients(filteredPatients);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error(error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchPatientsWithAppointments();
// //   }, []);

// //   const handleSearch = (text) => {
// //     setSearch(text);
// //   };

// //   const filteredPatients = patients.filter(patient =>
// //     patient.first_name.toLowerCase().includes(search.toLowerCase()) ||
// //     patient.last_name.toLowerCase().includes(search.toLowerCase())
// //   );

// //   const renderPatientItem = ({ item }) => (
// //     <TouchableOpacity onPress={() => navigation.navigate('AppointmentScreen', { patientId: item.id })}>
// //       <View style={styles.itemContainer}>
// //         <Text style={styles.itemName}>{item.first_name} {item.last_name}</Text>
// //         <Text style={styles.itemDetail}>ID: {item.id}</Text>
// //       </View>
// //     </TouchableOpacity>
// //   );

// //   if (loading) {
// //     return (
// //       <View style={styles.loadingContainer}>
// //         <ActivityIndicator size="large" color="#0000ff" />
// //       </View>
// //     );
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <TextInput
// //         style={styles.searchBar}
// //         placeholder="Tìm kiếm bệnh nhân"
// //         value={search}
// //         onChangeText={handleSearch}
// //       />
// //       <FlatList
// //         data={filteredPatients}
// //         renderItem={renderPatientItem}
// //         keyExtractor={(item) => item.id.toString()}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     paddingHorizontal: 20,
// //     paddingTop: 20,
// //   },
// //   searchBar: {
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 5,
// //     paddingHorizontal: 10,
// //     marginBottom: 20,
// //   },
// //   itemContainer: {
// //     paddingVertical: 15,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#eee',
// //   },
// //   itemName: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   itemDetail: {
// //     fontSize: 16,
// //     color: '#666',
// //   },
// //   loadingContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });

// // export default PatientListScreen;
// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
// import axios from 'axios';
// import { API_URL, authAPI } from '../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API và authAPI

// const PatientListScreen = ({ navigation }) => {
//   const [patients, setPatients] = useState([]);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPatientsWithAppointments = async () => {
//       try {
//         const api = await authAPI();
//         const patientResponse = await api.get(`${API_URL}/patients/`);
//         const allPatients = patientResponse.data;

//         const patientsWithAppointments = await Promise.all(allPatients.map(async (patient) => {
//           const appointmentResponse = await api.get(`${API_URL}/appointments/?patient_id=${patient.id}`);
//           if (appointmentResponse.data.length > 0) {
//             return patient;
//           }
//           return null;
//         }));

//         // Lọc bỏ các giá trị null
//         const filteredPatients = patientsWithAppointments.filter(patient => patient !== null);

//         setPatients(filteredPatients);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//         setLoading(false);
//         if (error.response && error.response.status === 401) {
//           Alert.alert('Authentication Error', 'You are not authorized. Please log in again.');
//           // Xử lý logic logout tại đây nếu cần thiết
//         } else {
//           Alert.alert('Error', 'Failed to fetch patients.');
//         }
//       }
//     };

//     fetchPatientsWithAppointments();
//   }, []);

//   const handleSearch = (text) => {
//     setSearch(text);
//   };

//   const filteredPatients = patients.filter(patient =>
//     patient.first_name.toLowerCase().includes(search.toLowerCase()) ||
//     patient.last_name.toLowerCase().includes(search.toLowerCase())
//   );

//   const renderPatientItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate('AppointmentScreen', { patientId: item.id })}>
//       <View style={styles.itemContainer}>
//         <Text style={styles.itemName}>{item.first_name} {item.last_name}</Text>
//         <Text style={styles.itemDetail}>ID: {item.id}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Tìm kiếm bệnh nhân"
//         value={search}
//         onChangeText={handleSearch}
//       />
//       <FlatList
//         data={filteredPatients}
//         renderItem={renderPatientItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     paddingTop: 20,
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
//     paddingVertical: 15,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   itemDetail: {
//     fontSize: 16,
//     color: '#666',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default PatientListScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Đảm bảo bạn đã cài đặt gói này
import { API_URL } from '../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API

const PatientListScreen = ({ navigation }) => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const userToken = await AsyncStorage.getItem('access-token'); // Lấy token từ AsyncStorage

        if (!userToken) {
          throw new Error('Không tìm thấy token');
        }

        const patientResponse = await axios.get(`${API_URL}/patients/`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        const allPatients = patientResponse.data;
        setPatients(allPatients);
        setFilteredPatients(allPatients);
        setLoading(false);

      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu bệnh nhân:', error.response ? error.response.data : error.message);
        Alert.alert('Lỗi', 'Không thể lấy dữ liệu bệnh nhân. Vui lòng thử lại sau.');
        setLoading(false); // Đảm bảo dừng tải trong trường hợp lỗi
      }
    };

    fetchPatients();
  }, []);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = patients.filter(patient =>
      patient.first_name.toLowerCase().includes(text.toLowerCase()) ||
      patient.last_name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  const handlePatientPress = (patientId) => {
    navigation.navigate('AppointmentScreen', { patientId });
  };

  const renderPatientItem = ({ item }) => (
    <TouchableOpacity onPress={() => handlePatientPress(item.id)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.first_name} {item.last_name}</Text>
        <Text style={styles.itemDetail}>ID: {item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Tìm kiếm bệnh nhân"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredPatients}
        renderItem={renderPatientItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  itemContainer: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDetail: {
    fontSize: 16,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PatientListScreen;

