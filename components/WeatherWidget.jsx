import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const WeatherWidget = ({ location }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = 'ff7c23f7fcfac7c7e1ba0abd18ac421e';

  useEffect(() => {
    if (location) {
      fetchWeatherData(location.coords.latitude, location.coords.longitude);
    }
  }, [location]);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  if (!weatherData) return null;

  return (
    <ImageBackground
      source={require('./assets/back.png')}
      style={{ width: '100%', height: 200 }} // Adjust height as needed
      imageStyle={{ borderRadius: 10 }} // Optional: if you want rounded corners
    >
      <StyledView className=" p-4  rounded-lg shadow-md mt-4 opacity-80">
        <StyledText className="text-xl font-bold mb-2">Weather Reports:</StyledText>
        <StyledView className="flex-row justify-between items-center">
          <StyledView>
            <StyledText className="font-bold">{weatherData.name}, {weatherData.sys.country}</StyledText>
            <StyledText>{new Date().toDateString()}</StyledText>
            <StyledText>{weatherData.weather[0].description}</StyledText>
          </StyledView>
          <StyledView className="items-end">
            <StyledText className="text-4xl font-bold">{Math.round(weatherData.main.temp)}°C</StyledText>
            <StyledText>{Math.round(weatherData.main.temp_min)}°C / {Math.round(weatherData.main.temp_max)}°C</StyledText>
          </StyledView>
        </StyledView>
        <StyledView className="flex-row justify-between mt-4">
          <StyledTouchableOpacity className="bg-gray-200 p-2 rounded">
            <StyledText>Refresh</StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity className="bg-gray-200 p-2 rounded">
            <StyledText>Details</StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    </ImageBackground>
  );
};

export default WeatherWidget;
