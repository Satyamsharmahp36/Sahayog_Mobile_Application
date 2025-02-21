import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useNavigation } from '@react-navigation/native';

const OrganizationForm = ({ organization, onClose, onSubmit }) => {
  const navigation = useNavigation();

  const [orgName, setOrgName] = useState('');
  const [file, setFile] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const handleFileUpload = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});
      if (result.type === 'success') {
        setFile(result);
      }
    } catch (error) {
      console.error('Error picking document:', error);
    }
  };

  const handleSubmit = async () => {
    if (!orgName || !confirmed) {
      alert('Please fill all fields and confirm the information.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('organizationType', organization);
      formData.append('organizationName', orgName);
      if (file) {
        formData.append('idProof', {
          uri: file.uri,
          name: file.name,
          type: 'application/octet-stream'
        });
      }

      // const response = await fetch('http://localhost:8080/api/register', {
      //   method: 'POST',
      //   body: formData,
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      // if (response.ok) {
      //   onSubmit();
      // } else {
      //   alert('Registration failed. Please try again.');
      // }

      // For now, just navigate to the 'Login' screen
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <View className="p-5 bg-slate-600 shadow-2xl  border-red-700 m-5 rounded-lg mt-36">
      <Text className="text-xl text-white font-bold mb-2">Fill Details :-</Text>
      <Text className="mb-4 text-white">{organization}</Text>
      <TextInput
        className="border text-white border-gray-300 p-2 rounded mb-4"
        placeholder="Organization Name"
        value={orgName}
        onChangeText={setOrgName}
      />
      <TouchableOpacity
        className="bg-gray-200 p-2 rounded mb-4"
        onPress={handleFileUpload}
      >
        <Text>Upload Identity Proof</Text>
      </TouchableOpacity>
      {file && <Text>File attached: {file.name}</Text>}
      <TouchableOpacity
        className="flex-row items-center mb-4"
        onPress={() => setConfirmed(!confirmed)}
      >
        <View className={`w-6 h-6 border-2 border-blue-400 text-white rounded mr-2 ${confirmed ? 'bg-blue-400' : 'bg-white'}`} />
        <Text className='text-white'>I confirm the above filled information </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="bg-blue-500 p-2 rounded mb-4"
        onPress={handleSubmit}
      >
        <Text className="text-white text-center">Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="border border-gray-300 w-14 bg-red-400 p-2 rounded"
        onPress={onClose}
      >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrganizationForm;
