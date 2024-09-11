
import React, { useState, useContext } from 'react';
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MyDispatcherContext } from "../../configs/Contexts";
import { API_URL } from '../../configs/APIs'; // Đảm bảo bạn có tệp cấu hình API
import Icon from 'react-native-vector-icons/FontAwesome';
import { encode as base64encode } from 'base-64';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useContext(MyDispatcherContext);


  const clientId = 'Y6UuGquIhKxI1yu60HiMrj4lsiVqvfJ1dWqGPuW8';
  const clientSecret = 'rkQCq5uEz6Lfnm165tA9ADr1BTIthJPN92KIW995jGzhMAgFG3Pv6fV9TniBvyc8oior5SVlbubWmMnQS0ORQ6VooN2dPZSW8FG85F2EtGNAsEjpgKKrzMSYs7LccL8L';
  
  const handleLogin = async () => {
    setLoading(true);

    try {
      const authHeader = `Basic ${base64encode(`${clientId}:${clientSecret}`)}`;
      const bodyParams = `grant_type=password&username=${username}&password=${password}`;
      const response = await axios.post(`${API_URL}/o/token/`, bodyParams, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': authHeader
        },
      });

      const data = response.data;
      await AsyncStorage.setItem("access-token", data.access_token);

      let token = await AsyncStorage.getItem('access-token');

      const userResponse = await axios.get(`${API_URL}/patients/current_user/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const userInfo = userResponse.data;
      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
      dispatch({
        type: "login",
        payload: { userInfo }
      });

      console.log("Đăng nhập thành công");

    } catch (error) {
      console.error('Lỗi đăng nhập:', error);
      Alert.alert('Lỗi', 'Đăng nhập thất bại!');
    } finally {
      setLoading(false);
    }
  };

  const handleForgetPassword = () => {
    navigation.navigate('ForgetPasswordScreen'); // Điều hướng sang màn hình quên mật khẩu
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Điều hướng sang màn hình đăng ký
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={24} color="#0047ab" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={text => setUsername(text)}
          placeholder="Tên đăng nhập"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={24} color="#0047ab" style={styles.icon} />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Mật khẩu"
          secureTextEntry={true}
        />
      </View>
      {loading ? (
        <ActivityIndicator style={styles.loading} size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgetPasswordButton} onPress={handleForgetPassword}>
            <Text style={styles.forgetPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
          <View style={styles.separator} />
          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerText}>Tạo tài khoản mới</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f7ff', // Màu xanh y tế nhạt
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0047ab',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#0047ab',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15, // Điều chỉnh để đẩy các ô nhập lên trên
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#0047ab',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 10,
  },
  forgetPasswordButton: {
    marginTop: 10,
  },
  forgetPasswordText: {
    color: '#0047ab',
    fontSize: 16,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#0047ab',
    marginVertical: 20,
  },
  registerButton: {
    width: '100%',
    backgroundColor: '#32CD32', // Màu xanh lá cây
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;

