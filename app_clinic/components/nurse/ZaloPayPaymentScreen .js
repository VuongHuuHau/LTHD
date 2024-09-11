import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import axios from 'axios';
import { API_URL } from '../../configs/APIs';
const ZaloPayPaymentScreen = ({ route }) => {
    const { id } = route.params;
    const [loading, setLoading] = useState(false);
    const [qrCodeData, setQRCodeData] = useState('');

    useEffect(() => {
        generateQRCode();
    }, []);

    const generateQRCode = async () => {
        setLoading(true);  // Đặt state loading thành true trước khi bắt đầu tải
        try {
            const formData = new FormData();
            formData.append('id', id);
            // Thêm các thông tin khác cần thiết vào formData nếu cần

            // Gửi yêu cầu POST bằng Axios với FormData
            const response = await axios.post(`${API_URL}/zalopay/create_bill/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Log toàn bộ phản hồi để kiểm tra cấu trúc
            console.log('Phản hồi từ API:', response);

            const qrCode = response.data.qr_code; // Giả sử dữ liệu lấy từ response là qr_code

            // Kiểm tra nếu qrCode không phải là null hoặc undefined
            if (qrCode) {
                setQRCodeData(qrCode);
            } else {
                console.log('Không tìm thấy mã QR trong phản hồi');
            }

            // Log dữ liệu mã QR
            console.log("Mã QR:", qrCode);
        } catch (error) {
            console.error('Lỗi khi xử lý thanh toán:', error);
            Alert.alert('Thanh toán thất bại', 'Không thể xử lý thanh toán. Vui lòng thử lại sau.');
        } finally {
            setLoading(false);  // Đặt state loading thành false sau khi tải xong (dù thành công hay thất bại)
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Màn hình thanh toán ZaloPay</Text>
            <Text>Mã hóa đơn: {id}</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                qrCodeData ? (
                    <QRCode
                        value={qrCodeData}
                        size={200}
                    />
                ) : (
                    <Text>Không có mã QR</Text>
                )
            )}
            <Button title="Tạo Hóa Đơn" onPress={generateQRCode} />
        </View>
    );
};

export default ZaloPayPaymentScreen;
