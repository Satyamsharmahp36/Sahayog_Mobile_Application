import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

const EmergencyHelplineScreen = () => (
  <SafeAreaView className="flex-1 bg-gray-100">
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4 mt-10 text-blue-600">Emergency Helplines</Text>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">National Emergency Numbers</Text>
        <Text className="text-lg font-semibold mb-2">Police:</Text>
        <Text>- 100</Text>
        <Text className="text-lg font-semibold mb-2">Fire Department:</Text>
        <Text>- 101</Text>
        <Text className="text-lg font-semibold mb-2">Ambulance:</Text>
        <Text>- 102</Text>
        <Text className="text-lg font-semibold mb-2">Disaster Management (NDRF):</Text>
        <Text>- 112</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Medical Emergencies</Text>
        <Text className="text-lg font-semibold mb-2">National Ambulance Service:</Text>
        <Text>- 102</Text>
        <Text className="text-lg font-semibold mb-2">Central Government Hospitals:</Text>
        <Text>- All India Institute of Medical Sciences (AIIMS) - +91-11-26588500</Text>
        <Text>- Safdarjung Hospital - +91-11-26192000</Text>
        <Text className="text-lg font-semibold mb-2">Private Hospitals:</Text>
        <Text>- Apollo Hospitals - +91-44-2829 2829</Text>
        <Text>- Max Super Speciality Hospital - +91-11-26515555</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Fire Services</Text>
        <Text className="text-lg font-semibold mb-2">National Fire Services:</Text>
        <Text>- 101</Text>
        <Text className="text-lg font-semibold mb-2">Major City Fire Stations:</Text>
        <Text>- Mumbai Fire Brigade - +91-22-22620618</Text>
        <Text>- Delhi Fire Service - +91-11-23362124</Text>
        <Text>- Kolkata Fire Service - +91-33-22140912</Text>
        <Text>- Chennai Fire Service - +91-44-25617122</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Police Services</Text>
        <Text className="text-lg font-semibold mb-2">National Police Helpline:</Text>
        <Text>- 100</Text>
        <Text className="text-lg font-semibold mb-2">Major City Police Stations:</Text>
        <Text>- Mumbai Police - +91-22-22621855</Text>
        <Text>- Delhi Police - +91-11-2331 5511</Text>
        <Text>- Kolkata Police - +91-33-2214 0900</Text>
        <Text>- Chennai Police - +91-44-2568 5105</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Disaster Management</Text>
        <Text className="text-lg font-semibold mb-2">National Disaster Response Force (NDRF):</Text>
        <Text>- 112</Text>
        <Text className="text-lg font-semibold mb-2">State Disaster Management Authorities:</Text>
        <Text>- Bihar - +91-612-2218468</Text>
        <Text>- Uttar Pradesh - +91-522-2615304</Text>
        <Text>- Maharashtra - +91-9820463872</Text>
        <Text>- West Bengal - +91-33-2248 9898</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Miscellaneous</Text>
        <Text className="text-lg font-semibold mb-2">Poison Control:</Text>
        <Text>- 91-9820463872</Text>
        <Text className="text-lg font-semibold mb-2">Roadside Assistance:</Text>
        <Text>- 24x7 Assistance - +91-120-2541227</Text>
      </View>

    </ScrollView>
  </SafeAreaView>
);

export default EmergencyHelplineScreen;
