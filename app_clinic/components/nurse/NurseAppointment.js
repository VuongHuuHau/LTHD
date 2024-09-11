// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
// // import DateTimePicker from '@react-native-community/datetimepicker';
// // import axios from 'axios';

// // const NurseAppointment = () => {
// //     const [pendingAppointments, setPendingAppointments] = useState([]);
// //     const [loading, setLoading] = useState(false);

// //     useEffect(() => {
// //         // Lấy danh sách các lịch hẹn từ API của bạn
// //         const fetchAppointments = async () => {
// //             try {
// //                 setLoading(true);
// //                 const response = await axios.get('http://192.168.1.8:8000/appointments/');
// //                 // Lọc ra chỉ những lịch hẹn có trạng thái "Pending"
// //                 const pendingAppointmentsData = response.data.filter(appointment => appointment.status === 'pending');
// //                 setPendingAppointments(pendingAppointmentsData);
// //             } catch (error) {
// //                 console.error('Lỗi khi lấy danh sách lịch hẹn:', error);
// //                 Alert.alert('Lỗi', 'Không thể tải danh sách lịch hẹn.');
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchAppointments();
// //     }, []);

// //     const approveAppointment = async (appointmentId) => {
// //         try {
// //             setLoading(true);
// //             // Gửi yêu cầu PUTH để phê duyệt lịch hẹn
// //             await axios.patch(`http://192.168.1.8:8000/appointments/${appointmentId}/approved/`);
// //             // Cập nhật danh sách lịch hẹn sau khi phê duyệt thành công
// //             const updatedAppointments = pendingAppointments.filter(appointment => appointment.id !== appointmentId);
// //             setPendingAppointments(updatedAppointments);
// //             Alert.alert('Thành công', 'Lịch hẹn đã được phê duyệt!');
// //         } catch (error) {
// //             console.error('Lỗi khi phê duyệt lịch hẹn:', error);
// //             Alert.alert('Lỗi', 'Không thể phê duyệt lịch hẹn.');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <ScrollView contentContainerStyle={styles.container}>
// //             <Text style={styles.title}>Danh sách lịch hẹn chờ phê duyệt</Text>
            
// //             {loading ? (
// //                 <Text style={styles.loadingText}>Đang tải danh sách lịch hẹn...</Text>
// //             ) : pendingAppointments.length === 0 ? (
// //                 <Text style={styles.noPendingText}>Không có lịch hẹn chờ phê duyệt</Text>
// //             ) : (
// //                 pendingAppointments.map(appointment => (
// //                     <View key={appointment.id} style={styles.appointmentItem}>
// //                         <Text style={styles.appointmentInfo}>
// //                             Ngày: {appointment. selected_date}, Giờ: {appointment. selected_time}
// //                         </Text>
// //                         <TouchableOpacity
// //                             style={styles.approveButton}
// //                             onPress={() => approveAppointment(appointment.id)}
// //                         >
// //                             <Text style={styles.buttonText}>Phê duyệt</Text>
// //                         </TouchableOpacity>
// //                     </View>
// //                 ))
// //             )}
// //         </ScrollView>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         flexGrow: 1,
// //         padding: 16,
// //         backgroundColor: '#fff',
// //     },
// //     title: {
// //         fontSize: 24,
// //         fontWeight: 'bold',
// //         marginBottom: 20,
// //         textAlign: 'center',
// //     },
// //     loadingText: {
// //         fontSize: 18,
// //         textAlign: 'center',
// //     },
// //     noPendingText: {
// //         fontSize: 18,
// //         textAlign: 'center',
// //         fontStyle: 'italic',
// //     },
// //     appointmentItem: {
// //         marginBottom: 15,
// //         padding: 10,
// //         borderWidth: 1,
// //         borderColor: '#ccc',
// //         borderRadius: 5,
// //     },
// //     appointmentInfo: {
// //         fontSize: 16,
// //         marginBottom: 10,
// //     },
// //     approveButton: {
// //         backgroundColor: 'blue',
// //         padding: 10,
// //         borderRadius: 5,
// //         alignItems: 'center',
// //     },
// //     buttonText: {
// //         color: '#fff',
// //         fontSize: 16,
// //         fontWeight: 'bold',
// //     },
// // });

// // export default NurseAppointment;

// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, ActivityIndicator } from 'react-native';
// import axios from 'axios';
// import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons

// const NurseAppointment = () => {
//     const [pendingAppointments, setPendingAppointments] = useState([]);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         // Lấy danh sách các lịch hẹn từ API của bạn
//         const fetchAppointments = async () => {
//             try {
//                 setLoading(true);
//                 const response = await axios.get('http://192.168.1.8:8000/appointments/');
//                 // Lọc ra chỉ những lịch hẹn có trạng thái "Pending"
//                 const pendingAppointmentsData = response.data.filter(appointment => appointment.status === 'pending');
//                 setPendingAppointments(pendingAppointmentsData);
//             } catch (error) {
//                 console.error('Lỗi khi lấy danh sách lịch hẹn:', error);
//                 Alert.alert('Lỗi', 'Không thể tải danh sách lịch hẹn.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchAppointments();
//     }, []);

//     const approveAppointment = async (appointmentId) => {
//         try {
//             setLoading(true);
//             // Gửi yêu cầu PATCH để phê duyệt lịch hẹn
//             await axios.patch(`http://192.168.1.8:8000/appointments/${appointmentId}/approved/`);
//             // Cập nhật danh sách lịch hẹn sau khi phê duyệt thành công
//             const updatedAppointments = pendingAppointments.filter(appointment => appointment.id !== appointmentId);
//             setPendingAppointments(updatedAppointments);
//             Alert.alert('Thành công', 'Lịch hẹn đã được phê duyệt!');
//         } catch (error) {
//             console.error('Lỗi khi phê duyệt lịch hẹn:', error);
//             Alert.alert('Lỗi', 'Không thể phê duyệt lịch hẹn.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.title}>Danh sách lịch hẹn chờ phê duyệt</Text>
            
//             {loading ? (
//                 <ActivityIndicator size="large" color="#007BFF" />
//             ) : pendingAppointments.length === 0 ? (
//                 <Text style={styles.noPendingText}>Không có lịch hẹn chờ phê duyệt</Text>
//             ) : (
//                 pendingAppointments.map(appointment => (
//                     <View key={appointment.id} style={styles.appointmentItem}>
//                         <Text style={styles.appointmentInfo}>
//                             <FontAwesome name="calendar" size={16} color="#007BFF" /> Ngày: {appointment.selected_date}
//                         </Text>
//                         <Text style={styles.appointmentInfo}>
//                             <FontAwesome name="clock-o" size={16} color="#007BFF" /> Giờ: {appointment.selected_time}
//                         </Text>
//                         <TouchableOpacity
//                             style={styles.approveButton}
//                             onPress={() => approveAppointment(appointment.id)}
//                         >
//                             <Text style={styles.buttonText}>Phê duyệt</Text>
//                         </TouchableOpacity>
//                     </View>
//                 ))
//             )}
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexGrow: 1,
//         padding: 16,
//         backgroundColor: '#f5f5f5',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         textAlign: 'center',
//         color: '#007BFF',
//     },
//     loadingText: {
//         fontSize: 18,
//         textAlign: 'center',
//     },
//     noPendingText: {
//         fontSize: 18,
//         textAlign: 'center',
//         fontStyle: 'italic',
//         color: '#6c757d',
//     },
//     appointmentItem: {
//         marginBottom: 15,
//         padding: 15,
//         backgroundColor: '#fff',
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 8,
//         elevation: 2,
//     },
//     appointmentInfo: {
//         fontSize: 16,
//         marginBottom: 10,
//         color: '#333',
//     },
//     approveButton: {
//         backgroundColor: '#007BFF',
//         padding: 10,
//         borderRadius: 5,
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });

// export default NurseAppointment;

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import { API_URL } from '../../configs/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BillScreen from './BillScreen';
const NurseAppointment = ({navigation}) => {
    const [pendingAppointments, setPendingAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchAppointments = async () => {
        const userToken = await AsyncStorage.getItem('access-token'); // Lấy token từ AsyncStorage
        try {
            setLoading(true);
            const response = await axios.get(`${API_URL}/appointments/`,{
                headers: {
                  Authorization: `Bearer ${userToken}`,
                },
              });
            // Lọc ra chỉ những lịch hẹn có trạng thái "Pending"
            const pendingAppointmentsData = response.data.filter(appointment => appointment.status === 'pending');
            setPendingAppointments(pendingAppointmentsData);
        } catch (error) {
            console.error('Lỗi khi lấy danh sách lịch hẹn:', error);
            Alert.alert('Lỗi', 'Không thể tải danh sách lịch hẹn.');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        // Lấy danh sách các lịch hẹn từ API của bạn
  

        fetchAppointments();
    }, []);

    const approveAppointment = async (appointmentId) => {
        try {
            const userToken = await AsyncStorage.getItem('access-token'); // Lấy token từ AsyncStorage
            setLoading(true);
            // Gửi yêu cầu PATCH để phê duyệt lịch hẹn
            // await axios.patch(`${API_URL}/appointments/${appointmentId}/approved/`, {
            //     headers: {
            //       Authorization: `Bearer ${userToken}`,
            //     },
            //   });

            // Cập nhật danh sách lịch hẹn sau khi phê duyệt thành công
            // const updatedAppointments = pendingAppointments.filter(appointment => appointment.id !== appointmentId);
            // setPendingAppointments(updatedAppointments);
             await axios.patch(`${API_URL}/appointments/${appointmentId}/approved/`, {}, {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });
            Alert.alert('Thành công', 'Lịch hẹn đã được phê duyệt!');
            fetchAppointments();
          
        } catch (error) {
            console.error('Lỗi khi phê duyệt lịch hẹn:', error);
            Alert.alert('Lỗi', 'Không thể phê duyệt lịch hẹn.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Danh sách lịch hẹn chờ phê duyệt</Text>
            
            {loading ? (
                <ActivityIndicator size="large" color="#007BFF" />
            ) : pendingAppointments.length === 0 ? (
                <Text style={styles.noPendingText}>Không có lịch hẹn chờ phê duyệt</Text>
            ) : (
                pendingAppointments.map(appointment => (
                    <View key={appointment.id} style={styles.appointmentItem}>
                        <Text style={styles.appointmentInfo}>
                            <FontAwesome name="calendar" size={16} color="#007BFF" /> Ngày: {appointment.selected_date}
                        </Text>
                        <Text style={styles.appointmentInfo}>
                            <FontAwesome name="clock-o" size={16} color="#007BFF" /> Giờ: {appointment.selected_time}
                        </Text>
                        <TouchableOpacity
                            style={styles.approveButton}
                            onPress={() => approveAppointment(appointment.id)}
                        >
                            <Text style={styles.buttonText}>Phê duyệt</Text>
                        </TouchableOpacity>
                       
                    </View>
                   
                ))
            )}
            <View>
                       <TouchableOpacity
                            style={styles.viewBillButton}
                            onPress={() => navigation.navigate(BillScreen)}
                        >
                            <Text style={styles.buttonText}>Xem Bill</Text>
                        </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#007BFF',
    },
    loadingText: {
        fontSize: 18,
        textAlign: 'center',
    },
    noPendingText: {
        fontSize: 18,
        textAlign: 'center',
        fontStyle: 'italic',
        color: '#6c757d',
    },
    appointmentItem: {
        marginBottom: 15,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 2,
    },
    appointmentInfo: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
    approveButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    viewBillButton: {
        backgroundColor: '#28a745', // Màu sắc của nút Xem Bill
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
});

export default NurseAppointment;
