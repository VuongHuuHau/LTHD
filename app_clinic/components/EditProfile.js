import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, ActivityIndicator, Alert, ScrollView, Button, Image, TouchableOpacity ,Text} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../configs/APIs';
import * as ImagePicker from 'expo-image-picker';

const EditProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    sex: '',
    date_of_birth: '',
    avatar: null,
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userToken = await AsyncStorage.getItem('access-token');

        if (!userToken) {
          throw new Error('No token found');
        }

        const response = await axios.get(`${API_URL}/patients/current_user/`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });

        setUser(response.data);
        setForm({
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          email: response.data.email,
          phone_number: response.data.phone_number,
          sex: response.data.sex,
          date_of_birth: response.data.date_of_birth,
          avatar: response.data.avatar,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        Alert.alert('Error', 'Failed to load profile. Please try again later.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setForm({ ...form, avatar: result.uri });
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const userToken = await AsyncStorage.getItem('access-token');

      if (!userToken) {
        throw new Error('No token found');
      }

      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        if (key === 'avatar' && form[key] && form[key] !== user.avatar) {
          formData.append(key, {
            uri: form[key],
            type: 'image/jpeg',
            name: 'avatar.jpg',
          });
        } else if (key !== 'avatar') {
          formData.append(key, form[key]);
        }
      });

      await axios.patch(`${API_URL}/patients/change_infor/`, formData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      Alert.alert('Success', 'Profile updated successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error updating profile:', error);
      Alert.alert('Error', 'Failed to update profile. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = () => {
    navigation.navigate('ChangePasswordScreen');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={form.first_name}
        onChangeText={(value) => handleInputChange('first_name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={form.last_name}
        onChangeText={(value) => handleInputChange('last_name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={form.phone_number}
        onChangeText={(value) => handleInputChange('phone_number', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={form.sex}
        onChangeText={(value) => handleInputChange('sex', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Birthdate"
        value={form.date_of_birth}
        onChangeText={(value) => handleInputChange('date_of_birth', value)}
      />
      <Button title="Pick an image from camera roll" onPress={handlePickImage} />
      {form.avatar && <Image source={{ uri: form.avatar }} style={styles.avatar} />}
      <Button title="Save" onPress={handleSave} />
      <TouchableOpacity style={styles.changePasswordButton} onPress={handleChangePassword}>
        <Text style={styles.changePasswordText}>Đổi mật khẩu</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  changePasswordButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  changePasswordText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
