import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import WeatherWidget from './WeatherWidget';
import AlertsOverview from './AlertsOverview';
import RecentUpdates from './RecentUpdates';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { useNavigation } from '@react-navigation/native'; 

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const Dashboard = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null); 
  const [showMap, setShowMap] = useState(false);

  const navigation = useNavigation(); 

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (reverseGeocode.length > 0) {
        const { city, region } = reverseGeocode[0];
        setAddress({ city, region });
      }
    })();
  }, []);

  const openMap = () => {
    if (location) {
      navigation.navigate('Map', {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  };

  return (
    <ScrollView className="bg-gray-100">
      <StyledView className="p-4">
        <View className='flex-row justify-between items-center mt-10 py-2'>
          <StyledText className="text-2xl font-bold text-blue-600 pl-4">Sahayog</StyledText>
          <View className="flex flex-row items-center mt-4">
            <Icon
              name="person"
              size={20} 
              color="#000" 
              style={{ marginHorizontal: 10 }}
            />
          </View>
        </View>
        <View className="flex flex-row items-center">
          <Icon
            name="location-pin"
            size={25} 
            color="#000" 
            style={{ marginHorizontal: 10 }}
          />
          {address && (
            <StyledText className="text-lg">
              {address.city}, {address.region}
            </StyledText>
          )}
        </View>

        <AlertsOverview />
  
        <RecentUpdates />
        <View className="h-10">

</View>
        <WeatherWidget location={location} />
      </StyledView>

      {showMap && location && (
        <MapView
          style={{ width: '100%', height: 300 }}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
          />
        </MapView>
      )}

      <StyledView className="p-4">
        <StyledView className="mt-4">
          <StyledTouchableOpacity
            className="bg-blue-200 p-4 rounded-lg mb-4"
            onPress={() => navigation.navigate('InformationCenter')}
          >
            <Text className="font-bold">Information Center</Text>
            <Text>Get information related to your nearby Police Station, Fire Department, Hospital based on your location</Text>
            <Text className="mt-2 bg-blue-800 text-white w-24 rounded-md font-semibold p-1">Check Out</Text>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            className="bg-blue-200 p-4 rounded-lg mb-4"
            onPress={() => navigation.navigate('DisasterGuide')}
          >
            <Text className="font-bold">Disaster Guide</Text>
            <Text>Do and Don't you should follow if you got stuck any kind of disaster. Follow these steps to save ourselves.</Text>
            <Text className="mt-2 bg-blue-800 text-white w-24 rounded-md font-semibold p-1">Check Out</Text>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            className="bg-blue-200 p-4 rounded-lg"
            onPress={() => navigation.navigate('EmergencyHelpline')}
          >
            <Text className="font-bold">Emergency Helpline</Text>
            <Text>Get all the emergency contact numbers just one click away from you. So you can contact them anytime.</Text>
            <Text className="mt-2 bg-blue-800 text-white w-24 rounded-md font-semibold p-1">Check Out</Text>
          </StyledTouchableOpacity>
          <StyledText className="text-xl font-bold mb-2">Upcoming Features:</StyledText>
          <StyledView className="flex-row justify-between">
            <StyledTouchableOpacity className="bg-red-200 p-4 rounded-lg w-[48%]" onPress={openMap}>
              <StyledText className="font-bold text-center">CB Radio</StyledText>
              <StyledText className="text-center">Short Way direct Communication through Radio Band Technology</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="bg-red-200 p-4 rounded-lg w-[48%]" onPress={openMap}>
              <StyledText className="font-bold text-center">SatCom</StyledText>
              <StyledText className="text-center">Help to transmit messages and updates through Satellite Communication</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </ScrollView>
  );
};

export default Dashboard;
