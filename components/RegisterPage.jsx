import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [belongsToOrg, setBelongsToOrg] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-8">
        <Text className="text-3xl font-bold mb-2">Sahayog</Text>
        <Text className="text-sm mb-8">a support</Text>
        
        <TextInput
          className="w-full bg-gray-100 rounded-md py-2 px-4 mb-4"
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          className="w-full bg-gray-100 rounded-md py-2 px-4 mb-4"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className="w-full bg-gray-100 rounded-md py-2 px-4 mb-4"
          placeholder="Mobile No."
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />
        <TextInput
          className="w-full bg-gray-100 rounded-md py-2 px-4 mb-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <TouchableOpacity 
          className="flex-row items-center mb-4"
          onPress={() => setBelongsToOrg(!belongsToOrg)}
        >
          <View className={`w-6 h-6 border-2 border-blue-400 rounded mr-2 ${belongsToOrg ? 'bg-blue-400' : 'bg-white'}`} />
          <Text
           onPress={() => navigation.navigate('Org')}>Belongs to a Organization</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full bg-blue-400 rounded-full py-2 px-4"
          onPress={() => {/* Implement registration logic */}}
        >
          <Text className="text-white text-center">Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RegisterPage;