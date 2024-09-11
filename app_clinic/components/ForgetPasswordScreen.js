import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_URL } from '../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API
import AsyncStorage from '@react-native-async-storage/async-storage';
const ForgetPasswordScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgetPassword = async () => {
    try {
      setLoading(true);
      const userToken = await AsyncStorage.getItem('access-token');
      // Tạo form data
      const formData = new FormData();
      formData.append('username', username);

      const response = await axios.patch(
        `${API_URL}/patients/forget_password/`, 
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setLoading(false);
      Alert.alert('Success', response.data.message); // Thay đổi dựa trên cấu trúc dữ liệu của API
      navigation.navigate('Login');
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // Lỗi từ máy chủ, bao gồm mã trạng thái
        Alert.alert('Error', `${error.response.status}: ${error.response.data}`);
      } else if (error.request) {
        // Không nhận được phản hồi từ máy chủ
        Alert.alert('Error', 'No response received from the server.');
      } else {
        // Lỗi khác
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forget Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
        keyboardType="default"
        autoCapitalize="none"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleForgetPassword}
        disabled={loading || !username}
      >
        <Text style={styles.buttonText}>{loading ? 'Loading...' : 'Reset Password'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgetPasswordScreen;
