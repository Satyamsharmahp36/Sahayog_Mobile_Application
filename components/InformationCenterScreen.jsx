import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

const InformationCenterScreen = () => (
  <SafeAreaView className="flex-1 bg-gray-100">
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mt-10 mb-4 text-blue-600">Information Center</Text>

      <Text className="text-lg font-semibold mb-2">Kalka, Himachal Pradesh</Text>
      
      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Police Stations:</Text>
        <View className="mb-2">
          <Text className="font-semibold">Kalka Police Station</Text>
          <Text>Location: Sector 2, Kalka, Haryana, 133302</Text>
          <Text>Contact Number: +91-172-2745711</Text>
        </View>
        <View>
          <Text className="font-semibold">Kalka Police Post (Nearby)</Text>
          <Text>Location: Near Kalka Railway Station, Kalka, Haryana, 133302</Text>
          <Text>Contact Number: +91-172-2745261</Text>
        </View>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Fire Department:</Text>
        <View>
          <Text className="font-semibold">Kalka Fire Station</Text>
          <Text>Location: Sector 2, Kalka, Haryana, 133302</Text>
          <Text>Contact Number: +91-172-2744301</Text>
        </View>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Hospitals:</Text>
        <View className="mb-2">
          <Text className="font-semibold">Kalka Civil Hospital</Text>
          <Text>Location: Sector 2, Kalka, Haryana, 133302</Text>
          <Text>Contact Number: +91-172-2745757</Text>
        </View>
        <View>
          <Text className="font-semibold">Max Super Speciality Hospital (Nearby)</Text>
          <Text>Location: Mohali, Punjab, 160055</Text>
          <Text>Contact Number: +91-172-5042000</Text>
        </View>
      </View>

      <Text className="text-lg font-semibold mb-2">Baddi, Himachal Pradesh</Text>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Police Stations:</Text>
        <View className="mb-2">
          <Text className="font-semibold">Baddi Police Station</Text>
          <Text>Location: Baddi, District Solan, Himachal Pradesh, 173205</Text>
          <Text>Contact Number: +91-1795-244440</Text>
        </View>
        <View>
          <Text className="font-semibold">Kasauli Police Station (Nearby)</Text>
          <Text>Location: Kasauli, District Solan, Himachal Pradesh, 173204</Text>
          <Text>Contact Number: +91-1795-264444</Text>
        </View>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Fire Department:</Text>
        <View>
          <Text className="font-semibold">Baddi Fire Station</Text>
          <Text>Location: Baddi, District Solan, Himachal Pradesh, 173205</Text>
          <Text>Contact Number: +91-1795-244244</Text>
        </View>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Hospitals:</Text>
        <View className="mb-2">
          <Text className="font-semibold">Government Civil Hospital Baddi</Text>
          <Text>Location: Baddi, District Solan, Himachal Pradesh, 173205</Text>
          <Text>Contact Number:  +91-1795-244831</Text>
        </View>
        <View className="mb-2">
          <Text className="font-semibold">Kasauli Medical Centre (Nearby)</Text>
          <Text>Location: Kasauli, District Solan, Himachal Pradesh, 173204</Text>
          <Text>Contact Number: +91-1795-264555</Text>
        </View>
        <View>
          <Text className="font-semibold">Fortis Hospital (Nearby)</Text>
          <Text>Location: Mohali, Punjab, 160062</Text>
          <Text>Contact Number: +91-172-4692222</Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default InformationCenterScreen;
