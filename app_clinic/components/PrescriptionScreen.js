// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet } from 'react-native';
// import CheckBox from 'react-native-check-box';
// import axios from 'axios';
// import { API_URL } from '../configs/APIs';

// const PrescriptionScreen = ({ route, navigation }) => {
//     const { appointmentId } = route.params; // Lấy appointmentId từ route parameters
//     const [symptom, setSymptom] = useState('');
//     const [sick, setSick] = useState('');
//     const [medicines, setMedicines] = useState([]);
//     const [selectedMedicines, setSelectedMedicines] = useState({});
//     const [quantity, setQuantity] = useState({}); // State để lưu số lượng thuốc
//     const [services, setServices] = useState([]);
//     const [selectedServices, setSelectedServices] = useState({});
//     const [serviceQuantity, setServiceQuantity] = useState({}); // State để lưu số lượng dịch vụ
    
//     useEffect(() => {
//         // Fetch danh sách các loại thuốc từ máy chủ khi component được mount
//         const fetchMedicines = async () => {
//             try {
//                 const response = await axios.get(`${API_URL}/medicines/`);
//                 setMedicines(response.data);
//             } catch (error) {
//                 console.error('Error fetching medicines:', error);
//                 Alert.alert('Error', 'Could not fetch medicines. Please try again later.');
//             }
//         };

//         // Fetch danh sách các dịch vụ từ máy chủ khi component được mount
//         const fetchServices = async () => {
//             try {
//                 const response = await axios.get(`${API_URL}/services/`);
//                 setServices(response.data);
//             } catch (error) {
//                 console.error('Error fetching services:', error);
//                 Alert.alert('Error', 'Could not fetch services. Please try again later.');
//             }
//         };

//         fetchMedicines();
//         fetchServices();
//     }, []);

//     // const handleMedicineSelect = (medicineId) => {
//     //     setSelectedMedicines(prevState => ({
//     //         ...prevState,
//     //         [medicineId]: !prevState[medicineId]
//     //     }));
//     // };
//     const handleMedicineSelect = (medicineId) => {
//         setSelectedMedicines(prevState => {
//             const newSelectedMedicines = { ...prevState, [medicineId]: !prevState[medicineId] };
//             if (!newSelectedMedicines[medicineId]) {
//                 const { [medicineId]: removed, ...rest } = quantity;
//                 setQuantity(rest);
//             }
//             return newSelectedMedicines;
//         });
//     };

//     const handleServiceSelect = (serviceId) => {
//         setSelectedServices(prevState => ({
//             ...prevState,
//             [serviceId]: !prevState[serviceId]
//         }));
//     };

    
//     const handleQuantityChange = (medicineId, qty) => {
//         setQuantity(prevState => ({
//             ...prevState,
//             [medicineId]: qty
//         }));
//     };

//     const handleServiceQuantityChange = (serviceId, qty) => {
//         setServiceQuantity(prevState => ({
//             ...prevState,
//             [serviceId]: qty
//         }));
//     };
    
//     const handleSubmit = async () => {
//         const selectedMedicineIds = Object.keys(selectedMedicines).filter(id => selectedMedicines[id]);
//         // const prescriptionMedicines = selectedMedicineIds.map(id => ({
//         //     medicine: parseInt(id, 10),
//         //     quantity: quantity[id] || 1
//         // }));


//         // const selectedServiceIds = Object.keys(selectedServices).filter(id => selectedServices[id]);
//         // const prescriptionServices = selectedServiceIds.map(id => ({
//         //     id: id,
//         //     service: parseInt(id, 10)
//         // }));
        

//         try {
//             // Tạo đơn thuốc
//             const prescriptionResponse = await axios.post(`${API_URL}/appointments/${appointmentId}/create_prescription/`, {
//                 symptom: symptom,
//                 sick: sick
//             });

            
//             // const prescriptionId = prescriptionResponse.data.id;
           
            
//         //     // Thêm thuốc vào đơn thuốc
//         //     for (const med of prescriptionMedicines) {
//         //         await axios.post(`${API_URL}/prescriptions/${appointmentId}/add_prescription_medicine/`, {
//         //             "medicine": med.medicine,
//         //             "quantity": med.quantity
//         //         });
//         //     }
            
//         // //    Thêm dịch vụ vào đơn thuốc
//         //      for (const service of prescriptionServices) {
//         //         //      Object.keys(selectedServices).forEach(async (serviceId) => {
//         //         //     // Thực hiện các thao tác cần thiết với serviceId ở đây
//         //         //     console.log("ServiceId selected:", serviceId);
//         //         //     await axios.post(`${API_URL}/prescriptions/${prescriptionId}/add_service/`, { id: serviceId });
//         //         // });
//         //         await axios.post(`${API_URL}/prescriptions/${appointmentId}/add_service/`, 
//         //         { id: service.id });
//         //      }
            
//         //     // // Tạo hóa đơn cho đơn thuốc
//         //     // await axios.post(`${API_URL}/prescriptions/${appointmentId}/create_bill/`);

//         //     // // // Cập nhật trạng thái lịch khám
//         //     // // await axios.put(`${API_URL}/appointments/${appointmentId}/status/`, {
//         //     // //     status: 'completed',
//         //     // // });

//              Alert.alert('Thành công',);
            
    
//                 // Điều hướng trở lại trang lịch khám hoặc làm việc khác
//                 // navigation.goBack();
            
//         } catch (error) {
//             console.error('Lỗi:', error);
//             console.error('Phản hồi từ máy chủ:', error.response.data); // In ra phản hồi lỗi chi tiết
//             Alert.alert('Lỗi', `Đã xảy ra lỗi: ${error.response.data.detail || 'Vui lòng thử lại sau.'}`);
//         }
       
//     };
    
//     const handleSubmit1 = async () => {
//         const selectedMedicineIds = Object.keys(selectedMedicines).filter(id => selectedMedicines[id]);
//         const prescriptionMedicines = selectedMedicineIds.map(id => ({
//             medicine: parseInt(id, 10),
//             quantity: quantity[id] || 1
//         }));


//         const selectedServiceIds = Object.keys(selectedServices).filter(id => selectedServices[id]);
//         const prescriptionServices = selectedServiceIds.map(id => ({
//             id: id,
//             service: parseInt(id, 10)
            
//         }));
//         try {
           

            
          
           
            
//             // Thêm thuốc vào đơn thuốc
//             for (const med of prescriptionMedicines) {
//                 await axios.post(`${API_URL}/prescriptions/${appointmentId}/add_prescription_medicine/`, {
//                     "medicine": med.medicine,
//                     "quantity": med.quantity
//                 });
//             }
            
//         //    Thêm dịch vụ vào đơn thuốc
//              for (const service of prescriptionServices) {
//                 //      Object.keys(selectedServices).forEach(async (serviceId) => {
//                 //     // Thực hiện các thao tác cần thiết với serviceId ở đây
//                 //     console.log("ServiceId selected:", serviceId);
//                 //     await axios.post(`${API_URL}/prescriptions/${prescriptionId}/add_service/`, { id: serviceId });
//                 // });
//                 await axios.post(`${API_URL}/prescriptions/${appointmentId}/add_service/`, 
//                 { id: service.id });
//              }
            
//             // Tạo hóa đơn cho đơn thuốc
//             await axios.post(`${API_URL}/prescriptions/${appointmentId}/create_bill/`);

//             // // // Cập nhật trạng thái lịch khám
//             // // await axios.put(`${API_URL}/appointments/${appointmentId}/status/`, {
//             // //     status: 'completed',
//             // // });

//              Alert.alert('Thành công tạo bill',);
            
    
//                 // Điều hướng trở lại trang lịch khám hoặc làm việc khác
//                 // navigation.goBack();
            
//         } catch (error) {
//             console.error('Lỗi:', error);
//             console.error('Phản hồi từ máy chủ:', error.response.data); // In ra phản hồi lỗi chi tiết
//             Alert.alert('Lỗi', `Đã xảy ra lỗi: ${error.response.data.detail || 'Vui lòng thử lại sau.'}`);
//         }
       
//     };
//     return (
//         <ScrollView contentContainerStyle={styles.container}>
//             <Text style={styles.label}>Triệu chứng:</Text>
//             <TextInput
//                 style={styles.input}
//                 value={symptom}
//                 onChangeText={text => setSymptom(text)}
//                 placeholder="Nhập triệu chứng của bệnh nhân"
//             />

//             <Text style={styles.label}>Bệnh:</Text>
//             <TextInput
//                 style={styles.input}
//                 value={sick}
//                 onChangeText={text => setSick(text)}
//                 placeholder="Nhập bệnh của bệnh nhân"
//             />
//             <Button title="Xác nhận triệu chứng" onPress={handleSubmit} />
//             <Text style={styles.label}>Chọn thuốc và số lượng:</Text>
//             <ScrollView style={styles.medicineList}>
//             {medicines.map((medicine) => (
//                 <View key={medicine.id} style={styles.medicineContainer}>
//                     <CheckBox
//                         value={!!selectedMedicines[medicine.id]}
//                         onValueChange={() => handleMedicineSelect(medicine.id)}
//                     />
//                     <Text style={styles.checkboxLabel}>{medicine.name}</Text>
//                     {selectedMedicines[medicine.id] && (
//                         <TextInput
//                             style={styles.quantityInput}
//                             keyboardType="numeric"
//                             value={quantity[medicine.id] ? quantity[medicine.id].toString() : ''}
//                             onChangeText={text => handleQuantityChange(medicine.id, parseInt(text, 10))}
//                             placeholder="Số lượng"
//                         />
//                     )}
//                 </View>
//             ))}
//         </ScrollView>
        


// <Text style={styles.label}>Chọn dịch vụ:</Text>
// {services.map(service => (
//     <View key={service.id} style={styles.medicineContainer}>
//         <CheckBox
//             isChecked={!!selectedServices[service.id]}
//             onClick={() => handleServiceSelect(service.id)}
//         />
//         <Text style={styles.checkboxLabel}>{service.name}</Text>
//     </View>
//             ))}

            
//             <Button title="Xác nhận hoàn thành" onPress={handleSubmit1} />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         padding: 20,
//     },
//     label: {
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
//         marginBottom: 20,
//         borderRadius: 5,
//     },
//     medicineContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     checkboxLabel: {
//         marginLeft: 10,
//         flex: 1,
//     },
//     quantityInput: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 5,
//         width: 60,
//         marginLeft: 10,
//     },
// });

// export default PrescriptionScreen;
// // import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet } from 'react-native';
// // import CheckBox from 'react-native-check-box';
// // import axios from 'axios';
// // import { API_URL } from '../configs/APIs';

// // const PrescriptionScreen = ({ route, navigation }) => {
// //     const { appointmentId } = route.params; // Lấy appointmentId từ route parameters
// //     const [symptom, setSymptom] = useState('');
// //     const [sick, setSick] = useState('');
// //     const [medicines, setMedicines] = useState([]);
// //     const [filteredMedicines, setFilteredMedicines] = useState([]);
// //     const [selectedMedicines, setSelectedMedicines] = useState({});
// //     const [quantity, setQuantity] = useState({}); // State để lưu số lượng thuốc
// //     const [services, setServices] = useState([]);
// //     const [filteredServices, setFilteredServices] = useState([]);
// //     const [selectedServices, setSelectedServices] = useState({});
// //     const [serviceQuantity, setServiceQuantity] = useState({}); // State để lưu số lượng dịch vụ

// //     useEffect(() => {
// //         const fetchMedicines = async () => {
// //             try {
// //                 const response = await axios.get(`${API_URL}/medicines/`);
// //                 setMedicines(response.data);
// //                 setFilteredMedicines(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching medicines:', error);
// //                 Alert.alert('Error', 'Could not fetch medicines. Please try again later.');
// //             }
// //         };

// //         const fetchServices = async () => {
// //             try {
// //                 const response = await axios.get(`${API_URL}/services/`);
// //                 setServices(response.data);
// //                 setFilteredServices(response.data);
// //             } catch (error) {
// //                 console.error('Error fetching services:', error);
// //                 Alert.alert('Error', 'Could not fetch services. Please try again later.');
// //             }
// //         };

// //         fetchMedicines();
// //         fetchServices();
// //     }, []);

// //     const handleMedicineSelect = (medicineId) => {
// //         setSelectedMedicines(prevState => {
// //             const newSelectedMedicines = { ...prevState, [medicineId]: !prevState[medicineId] };
// //             if (!newSelectedMedicines[medicineId]) {
// //                 const { [medicineId]: removed, ...rest } = quantity;
// //                 setQuantity(rest);
// //             }
// //             return newSelectedMedicines;
// //         });
// //     };

// //     const handleServiceSelect = (serviceId) => {
// //         setSelectedServices(prevState => ({
// //             ...prevState,
// //             [serviceId]: !prevState[serviceId]
// //         }));
// //     };

// //     const handleQuantityChange = (medicineId, qty) => {
// //         setQuantity(prevState => ({
// //             ...prevState,
// //             [medicineId]: qty
// //         }));
// //     };

// //     const handleServiceQuantityChange = (serviceId, qty) => {
// //         setServiceQuantity(prevState => ({
// //             ...prevState,
// //             [serviceId]: qty
// //         }));
// //     };

// //     const handleMedicineSearch = (text) => {
// //         const filteredMedicines = medicines.filter(medicine =>
// //             medicine.name.toLowerCase().includes(text.toLowerCase())
// //         );
// //         setFilteredMedicines(filteredMedicines);
// //     };

// //     const handleServiceSearch = (text) => {
// //         const filteredServices = services.filter(service =>
// //             service.name.toLowerCase().includes(text.toLowerCase())
// //         );
// //         setFilteredServices(filteredServices);
// //     };

// //     const handleSubmit = async () => {
// //         // Code xử lý khi nhấn nút Xác nhận hoàn thành
// //     };

// //     return (
// //         <ScrollView contentContainerStyle={styles.container}>
// //             <Text style={styles.label}>Triệu chứng:</Text>
// //             <TextInput
// //                 style={styles.input}
// //                 value={symptom}
// //                 onChangeText={text => setSymptom(text)}
// //                 placeholder="Nhập triệu chứng của bệnh nhân"
// //             />

// //             <Text style={styles.label}>Bệnh:</Text>
// //             <TextInput
// //                 style={styles.input}
// //                 value={sick}
// //                 onChangeText={text => setSick(text)}
// //                 placeholder="Nhập bệnh của bệnh nhân"
// //             />
// //             <Button title="Xác nhận triệu chứng" onPress={handleSubmit} />

// //             <Text style={styles.label}>Tìm thuốc:</Text>
// //             <TextInput
// //                 style={styles.input}
// //                 placeholder="Nhập tên thuốc"
// //                 onChangeText={text => handleMedicineSearch(text)}
// //             />
// //             <ScrollView style={styles.listContainer}>
// //                 {filteredMedicines.map((medicine) => (
// //                     <View key={medicine.id} style={styles.medicineContainer} >
                        
// //                         <CheckBox
// //                             value={!!selectedMedicines[medicine.id]}
// //                             onValueChange={() => handleMedicineSelect(medicine.id)}
// //                         />
// //                         <Text style={styles.checkboxLabel}>{medicine.name}</Text>
// //                         {selectedMedicines[medicine.id] && (
// //                             <TextInput
// //                                 style={styles.quantityInput}
// //                                 keyboardType="numeric"
// //                                 value={quantity[medicine.id] ? quantity[medicine.id].toString() : ''}
// //                                 onChangeText={text => handleQuantityChange(medicine.id, parseInt(text, 10))}
// //                                 placeholder="Số lượng"
// //                             />
// //                         )}
// //                     </View>
// //                 ))}
// //             </ScrollView>

// //             <Text style={styles.label}>Tìm dịch vụ:</Text>
// //             <TextInput
// //                 style={styles.input}
// //                 placeholder="Nhập tên dịch vụ"
// //                 onChangeText={text => handleServiceSearch(text)}
// //             />
// //             <ScrollView style={styles.listContainer}>
// //                 {filteredServices.map((service) => (
// //                     <View key={service.id} style={styles.medicineContainer}>
// //                         <CheckBox
// //                             isChecked={!!selectedServices[service.id]}
// //                             onClick={() => handleServiceSelect(service.id)}
// //                         />
// //                         <Text style={styles.checkboxLabel}>{service.name}</Text>
// //                     </View>
// //                 ))}
// //             </ScrollView>

// //             <Button title="Xác nhận hoàn thành" onPress={handleSubmit} />
// //         </ScrollView>
// //     );
// // };

// // const styles = StyleSheet.create({
// //     container: {
// //         padding: 20,
// //     },
// //     label: {
// //         fontWeight: 'bold',
// //         marginBottom: 10,
// //     },
// //     input: {
// //         borderWidth: 1,
// //         borderColor: '#ccc',
// //         padding: 10,
// //         marginBottom: 20,
// //         borderRadius: 5,
// //     },
// //     listContainer: {
// //         maxHeight: 200,
// //     },
// //     medicineContainer: {
// //         flexDirection: 'row',
// //         alignItems: 'center',
// //         marginBottom: 10,
// //     },
// //     checkboxLabel: {
// //         marginLeft: 10,
// //         flex: 1,
// //     },
// //     quantityInput: {
// //         borderWidth: 1,
// //         borderColor: '#ccc',
// //         padding: 5,
// //         width: 60,
// //         marginLeft: 10,
// //     },
// // });

// // export default PrescriptionScreen;
                        
import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Checkbox, Card, Title, Paragraph, Appbar, Searchbar } from 'react-native-paper';
import axios from 'axios';
import { API_URL } from '../configs/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Đảm bảo bạn đã cài đặt gói này
const PrescriptionScreen = ({ route, navigation }) => {
    const { appointmentId } = route.params;
    const [symptom, setSymptom] = useState('');
    const [sick, setSick] = useState('');
    const [medicines, setMedicines] = useState([]);
    const [selectedMedicines, setSelectedMedicines] = useState({});
    const [quantity, setQuantity] = useState({});
    const [services, setServices] = useState([]);
    const [selectedServices, setSelectedServices] = useState({});
    const [medicineSearchQuery, setMedicineSearchQuery] = useState('');
    const [serviceSearchQuery, setServiceSearchQuery] = useState('');

    useEffect(() => {
        const fetchMedicines = async () => {
            const userToken = await AsyncStorage.getItem('access-token'); // Lấy token từ AsyncStorage
            try {
                const response = await axios.get(`${API_URL}/medicines/`, {
                    headers: {
                      Authorization: `Bearer ${userToken}`,
                    },
                  });
                setMedicines(response.data);
            } catch (error) {
                console.error('Error fetching medicines:', error);
                Alert.alert('Error', 'Could not fetch medicines. Please try again later.');
            }
        };

        const fetchServices = async () => {
            try {
                const response = await axios.get(`${API_URL}/services/`);
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
                Alert.alert('Error', 'Could not fetch services. Please try again later.');
            }
        };

        fetchMedicines();
        fetchServices();
    }, []);

    const handleMedicineSelect = (medicineId) => {
        setSelectedMedicines(prevState => {
            const newSelectedMedicines = { ...prevState, [medicineId]: !prevState[medicineId] };
            if (!newSelectedMedicines[medicineId]) {
                const { [medicineId]: removed, ...rest } = quantity;
                setQuantity(rest);
            }
            return newSelectedMedicines;
        });
    };

    const handleServiceSelect = (serviceId) => {
        setSelectedServices(prevState => ({
            ...prevState,
            [serviceId]: !prevState[serviceId]
        }));
    };

    const handleQuantityChange = (medicineId, qty) => {
        setQuantity(prevState => ({
            ...prevState,
            [medicineId]: qty
        }));
    };

    const handleSubmit = async () => {
        const selectedMedicineIds = Object.keys(selectedMedicines).filter(id => selectedMedicines[id]);
        const prescriptionMedicines = selectedMedicineIds.map(id => ({
            medicine: parseInt(id, 10),
            quantity: quantity[id] || 1
        }));

        const selectedServiceIds = Object.keys(selectedServices).filter(id => selectedServices[id]);
        const prescriptionServices = selectedServiceIds.map(id => ({
            id: id,
            service: parseInt(id, 10)
        }));

        try {
            const userToken = await AsyncStorage.getItem('access-token'); // Lấy token từ AsyncStorage
            const response = await axios.post(
              `${API_URL}/appointments/${appointmentId}/create_prescription/`,
              {
                symptom: symptom,
                sick: sick
              },
              {
                headers: {
                  Authorization: `Bearer ${userToken}`
                }
              }
            );
            // Xử lý khi request thành công
            Alert.alert('Thành công', 'Tạo toa thuốc thành công!');
          } catch (error) {
            // Xử lý khi request thất bại
            console.error('Lỗi tạo toa thuốc:', error);
            Alert.alert('Lỗi', 'Tạo toa thuốc thất bại!');
          }
    };
    
    const handleSubmit1 = async () => {
        const selectedMedicineIds = Object.keys(selectedMedicines).filter(id => selectedMedicines[id]);
        const prescriptionMedicines = selectedMedicineIds.map(id => ({
            medicine: parseInt(id, 10),
            quantity: quantity[id] || 1
        }));

        const selectedServiceIds = Object.keys(selectedServices).filter(id => selectedServices[id]);
        const prescriptionServices = selectedServiceIds.map(id => ({
            id: id,
            service: parseInt(id, 10)
        }));
        const userToken = await AsyncStorage.getItem('access-token'); // Lấy token từ AsyncStorage
        try {
            for (const med of prescriptionMedicines) {
                await axios.post(
                  `${API_URL}/prescriptions/${appointmentId}/add_prescription_medicine/`,
                  {
                    medicine: med.medicine,
                    quantity: med.quantity
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${userToken}`
                    }
                  }
                );
              }
        
              // Gửi các dịch vụ vào toa thuốc
              for (const service of prescriptionServices) {
                await axios.post(
                  `${API_URL}/prescriptions/${appointmentId}/add_service/`,
                  { id: service.id },
                  {
                    headers: {
                      Authorization: `Bearer ${userToken}`
                    }
                  }
                );
              }
            await axios.post(`${API_URL}/prescriptions/${appointmentId}/create_bill/`,{}, {
                headers: {
                  Authorization: `Bearer ${userToken}`
                }
              });

            Alert.alert('Thành công tạo bill',);
        } catch (error) {
            console.error('Lỗi:', error);
            console.error('Phản hồi từ máy chủ:', error.response.data);
            Alert.alert('Lỗi', `Đã xảy ra lỗi: ${error.response.data.detail || 'Vui lòng thử lại sau.'}`);
        }
        // console.log(appointmentId);
        //  navigation.navigation(DonThuoc, { appointmentId });
    };

    const filteredMedicines = medicines.filter(medicine =>
        medicine.name.toLowerCase().includes(medicineSearchQuery.toLowerCase())
    );

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(serviceSearchQuery.toLowerCase())
    );

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Đơn thuốc" />
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.content}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Triệu chứng:</Title>
                        <TextInput
                            mode="outlined"
                            label="Triệu chứng"
                            value={symptom}
                            onChangeText={text => setSymptom(text)}
                            placeholder="Nhập triệu chứng của bệnh nhân"
                            style={styles.input}
                        />

                        <Title>Bệnh:</Title>
                        <TextInput
                            mode="outlined"
                            label="Bệnh"
                            value={sick}
                            onChangeText={text => setSick(text)}
                            placeholder="Nhập bệnh của bệnh nhân"
                            style={styles.input}
                        />
                        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                            Xác nhận triệu chứng
                        </Button>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Chọn thuốc và số lượng:</Title>
                        <Searchbar
                            placeholder="Tìm kiếm thuốc"
                            onChangeText={setMedicineSearchQuery}
                            value={medicineSearchQuery}
                            style={styles.searchbar}
                        />
                        {filteredMedicines.map((medicine) => (
                            <View key={medicine.id} style={styles.medicineContainer}>
                                <Checkbox
                                    status={selectedMedicines[medicine.id] ? 'checked' : 'unchecked'}
                                    onPress={() => handleMedicineSelect(medicine.id)}
                                />
                                <Paragraph style={styles.checkboxLabel}>{medicine.name}</Paragraph>
                                {selectedMedicines[medicine.id] && (
                                    <TextInput
                                        mode="outlined"
                                        keyboardType="numeric"
                                        value={quantity[medicine.id] ? quantity[medicine.id].toString() : ''}
                                        onChangeText={text => handleQuantityChange(medicine.id, parseInt(text, 10))}
                                        placeholder="Số lượng"
                                        style={styles.quantityInput}
                                    />
                                )}
                            </View>
                        ))}
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Chọn dịch vụ:</Title>
                        <Searchbar
                            placeholder="Tìm kiếm dịch vụ"
                            onChangeText={setServiceSearchQuery}
                            value={serviceSearchQuery}
                            style={styles.searchbar}
                        />
                        {filteredServices.map(service => (
                            <View key={service.id} style={styles.medicineContainer}>
                                <Checkbox
                                    status={selectedServices[service.id] ? 'checked' : 'unchecked'}
                                    onPress={() => handleServiceSelect(service.id)}
                                />
                                <Paragraph style={styles.checkboxLabel}>{service.name}</Paragraph>
                            </View>
                        ))}
                    </Card.Content>
                </Card>

                <Button mode="contained" onPress={handleSubmit1} style={styles.button}>
                    Kê đơn 
                </Button>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 20,
    },
    card: {
        marginBottom: 20,
    },
    input: {
        marginBottom: 20,
    },
    medicineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxLabel: {
        marginLeft: 10,
        flex: 1,
    },
    quantityInput: {
        width: 80,
        marginLeft: 10,
    },
    button: {
        marginTop: 20,
    },
    searchbar: {
        marginBottom: 20,
    },
});

export default PrescriptionScreen;
