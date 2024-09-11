import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../configs/APIs';

const ChangePasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('access-token');

      if (!token) {
        throw new Error('Không tìm thấy token');
      }

      const formData = new FormData();
      formData.append('old_password', oldPassword);
      formData.append('new_password', newPassword);

      const response = await axios.patch(`${API_URL}/patients/change_password/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data', // Đảm bảo Content-Type là multipart/form-data
        },
      });

      Alert.alert('Thành công', 'Đổi mật khẩu thành công');
      navigation.goBack(); // Quay về màn hình trước đó sau khi thành công
    } catch (error) {
      console.error('Lỗi đổi mật khẩu:', error);
      Alert.alert('Lỗi', 'Đổi mật khẩu thất bại. Vui lòng thử lại sau.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu cũ"
        value={oldPassword}
        onChangeText={setOldPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu mới"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry={true}
      />
      <Button title="Đổi mật khẩu" onPress={handleChangePassword} disabled={loading} />
      {loading && <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
  loading: {
    marginTop: 20,
  },
});

export default ChangePasswordScreen;
