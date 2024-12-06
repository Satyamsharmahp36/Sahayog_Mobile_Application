import React from 'react';
import { View, Text, Image } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const AlertsOverview = () => {
  return (
    <StyledView className="bg-white p-4 rounded-lg shadow-md mt-4">
      <StyledText className="text-xl font-bold mb-2">Alerts Overview:</StyledText>
      <StyledView className="flex-row justify-between items-center">
        <StyledView className="w-1/2 aspect-square">
          <Image
            source={require('./assets/image.png')}
            style={{ width: '100%', height: '100%' }} 
          />
        </StyledView>
        <StyledView className=" p-2 w-1/2">
          <StyledView className="bg-red-200 p-2 rounded mb-2">
            <StyledText className="font-bold">Critical Alerts: 12</StyledText>
          </StyledView>
          <StyledView className="bg-yellow-200 p-2 rounded mb-2">
            <StyledText className="font-bold">Moderate Alerts: 5</StyledText>
          </StyledView>
          <StyledView className="bg-green-200 p-2 rounded">
            <StyledText className="font-bold">Low Alerts: 2</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default AlertsOverview;
