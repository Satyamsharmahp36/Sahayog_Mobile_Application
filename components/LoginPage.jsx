import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    /*
    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        Alert.alert('Login successful!');
        navigation.navigate('HomeScreen'); // Navigate to HomeScreen
      } else {
        Alert.alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('An error occurred. Please try again.');
    }
    */
    
    // Directly navigate to 'HomeScreen'
    navigation.navigate('Dashboard');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-8">
        <Text className="text-3xl font-bold mb-2">Sahayog</Text>
        <Text className="text-sm mb-8">a support</Text>

        <TextInput
          className="w-full bg-gray-100 rounded-md py-2 px-4 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className="w-full bg-gray-100 rounded-md py-2 px-4 mb-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          className="w-full bg-blue-400 rounded-full py-2 px-4 mb-4"
          onPress={handleLogin}
        >
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Text className="text-blue-500">Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;