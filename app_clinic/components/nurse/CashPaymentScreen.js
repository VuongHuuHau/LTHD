import React from 'react';
import { View, Text, Button } from 'react-native';

const CashPaymentScreen = ({ route }) => {
    const { billId } = route.params;

    return (
        <View>
            <Text>Cash Payment Screen</Text>
            <Text>Bill ID: {billId}</Text>
            <Button title="Complete Payment" onPress={() => {/* Implement payment logic here */}} />
        </View>
    );
};

export default CashPaymentScreen;
