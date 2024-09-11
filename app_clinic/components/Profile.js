import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, Image,ScrollView,Button  } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../configs/APIs';

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        Alert.alert('Error', 'Failed to load profile. Please try again later.');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <>
          <Image source={{ uri: user.avatar }} style={styles.profileImage} />
          <Text style={styles.name}>{user.first_name} {user.last_name}</Text>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.info}>{user.email}</Text>
        
        
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.info}>{user.phone_number}</Text>
       
         
          <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />

        </>
      ) : (
        <Text style={styles.error}>Failed to load profile</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default ProfileScreen;
