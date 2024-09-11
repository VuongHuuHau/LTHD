// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, Alert, Button } from 'react-native';
// import axios from 'axios';
// import { API_URL } from '../../configs/APIs';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// const BillScreen = () => {
//     const [bill, setBill] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchBillDetails = async () => {
//             try {
//                 const userToken = await AsyncStorage.getItem('access-token'); // Lấy token từ AsyncStorage
//                 const response = await axios.get(`${API_URL}/bills`, {
//                     headers: {
//                         Authorization: `Bearer ${userToken}`,
//                     },
//                 });;
//                 setBill(response.data);
//             } catch (error) {
//                 console.error('Error fetching bill details:', error);
//                 Alert.alert('Error', 'Failed to fetch bill details.');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBillDetails();
//     }, []);

//     if (loading) {
//         return <ActivityIndicator size="large" color="#0000ff" />;
//     }

//     if (!bill) {
//         return (
//             <View>
//                 <Text>No bill found.</Text>
//             </View>
//         );
//     }

//     return (
//         <View>
//             <Text>Prescription: {bill.prescription}</Text>
//             <Text>Status: {bill.status}</Text>
//             <Text>Total: {bill.total}</Text>
//             {bill.status === 'Unpaid' && (
//                 <Button
//                     title="Pay Now"
//                     onPress={() => {
//                         // Implement payment logic here
//                         Alert.alert('Payment', `Pay ${bill.total} now.`);
//                     }}
//                 />
//             )}
//         </View>
//     );
// };

// export default BillScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { API_URL } from '../../configs/APIs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const BillScreen = () => {
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const fetchBillDetails = async () => {
            try {
                const userToken = await AsyncStorage.getItem('access-token');
               

                if (!userToken) {
                    throw new Error('No token found');
                }

                const response = await axios.get(`${API_URL}/bills`,{
                    headers: {
                        Authorization: `Bearer ${userToken}`,
                    }
                });

                setBills(response.data);
                
               
                
            } catch (error) {
                console.error('Error fetching bill details:', error);
                Alert.alert('Error', 'Failed to fetch bill details.');
            } finally {
                setLoading(false);
            }
        };

        fetchBillDetails();
    }, []);

    const handleBillPress = (id) => {
        Alert.alert(
            'Payment Options',
            'Choose your payment method:',
            [
                {
                    text: 'Cash',
                    onPress: () => navigation.navigate('CashPaymentScreen', { id }),

                  
                },
                {
                    text: 'ZaloPay',
                    onPress: () => navigation.navigate('ZaloPayPaymentScreen', { id }),
                },
                { text: 'Cancel', style: 'cancel' }
            ],
            { cancelable: true }
        );
        
    };

    const renderBillItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleBillPress(item.id)}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemName}>Prescription: {item.prescription}</Text>
                <Text style={styles.itemDetail}>Status: {item.status}</Text>
                <Text style={styles.itemDetail}>Total: {item.total}</Text>
                {item.status === 'unpaid' && (
                    <Button
                        title="Pay Now"
                        onPress={() => handleBillPress(item.prescription)}
                    />
                )}
            </View>
        </TouchableOpacity>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (!bills || bills.length === 0) {
        return (
            <View>
                <Text>No bills found.</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={bills}
            renderItem={renderBillItem}
            keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())} // Sử dụng giá trị dự phòng
        />
    );
};

const styles = {
    itemContainer: {
        padding: 20,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDetail: {
        fontSize: 16,
        color: '#555',
    },
};

export default BillScreen;
