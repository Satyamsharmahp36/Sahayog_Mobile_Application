import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import OrganizationForm from './OrganizationForm';

const OrganizationDetailsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);

  const organizations = [
    'Government Organization',
    'Education Sector',
    'Media Sector',
    'Private Sector',
    'Others'
  ];

  const handleOrgSelect = (org) => {
    setSelectedOrg(org);
    setModalVisible(true);
  };

  return (
    <View className="flex-1 p-5 pt-24 bg-white">
      <Text className="text-2xl font-bold">Sahayog</Text>
      <Text className="text-lg mb-5">a support</Text>
      <Text className="text-xl font-bold mb-2">Organization Details</Text>
      
      <View className="bg-blue-100 p-3 rounded-md mb-5">
        <Text className="font-bold mb-2">Benefits:</Text>
        <Text>• Early Access: Receive the latest information before anyone else.</Text>
        <Text>• Recognition: Your contributions will be published on our platform, showcasing your input.</Text>
        <Text>• Verified Status: Gain verified user status, enhancing your credibility on our portal.</Text>
      </View>
      
      <Text className="mb-2">Select Organization type :-</Text>
      {organizations.map((org, index) => (
        <TouchableOpacity 
          key={index} 
          className="bg-blue-500 p-3 rounded-md mb-2"
          onPress={() => handleOrgSelect(org)}
        >
          <Text className="text-white  text-center">{org}</Text>
        </TouchableOpacity>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <OrganizationForm 
          organization={selectedOrg} 
          onClose={() => setModalVisible(false)}
          onSubmit={() => {
            setModalVisible(false);
            navigation.navigate('Login');
          }}
        />
      </Modal>
    </View>
  );
};

export default OrganizationDetailsScreen;
