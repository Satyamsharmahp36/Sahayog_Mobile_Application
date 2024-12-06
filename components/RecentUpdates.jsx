import React, { useRef, useEffect } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const RecentUpdates = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const updates = [
    { location: 'Baddi, Himachal Pradesh', event: 'Landslide', time: '9:00 AM', date: '02/Sep/2024' },
    { location: 'Indore, M.P', event: 'Flood', time: '2:00 PM', date: '01/Sep/2024' },
    { location: 'Mumbai, Maharashtra', event: 'Heavy Rainfall', time: '11:30 AM', date: '03/Sep/2024' },
    { location: 'Chennai, Tamil Nadu', event: 'Cyclone Warning', time: '4:45 PM', date: '04/Sep/2024' },
    { location: 'Jaipur, Rajasthan', event: 'Heatwave', time: '1:15 PM', date: '05/Sep/2024' },
    { location: 'Guwahati, Assam', event: 'Earthquake', time: '3:20 AM', date: '06/Sep/2024' },
    { location: 'Dehradun, Uttarakhand', event: 'Forest Fire', time: '5:50 PM', date: '07/Sep/2024' },
    { location: 'Bhopal, Madhya Pradesh', event: 'Severe Thunderstorm', time: '7:10 PM', date: '08/Sep/2024' },
  ];

  const cardWidth = 200;
  const { width: screenWidth } = Dimensions.get('window');
  const totalWidth = updates.length * cardWidth;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(scrollX, {
        toValue: -totalWidth,
        duration: updates.length * 3000, // Adjust speed here
        useNativeDriver: true,
      })
    );

    animation.start();

    return () => animation.stop();
  }, [scrollX, updates.length, totalWidth]);

  const renderUpdates = () => {
    return updates.concat(updates).map((update, index) => (
      <StyledView
        key={index}
        className="bg-blue-100 p-3 rounded-lg mr-4"
        style={{ width: cardWidth }}
      >
        <StyledText className="font-bold">{update.location}</StyledText>
        <StyledText>{update.event}</StyledText>
        <StyledView>
          <StyledText>Time: {update.time}</StyledText>
          <StyledText>Date: {update.date}</StyledText>
        </StyledView>
      </StyledView>
    ));
  };

  return (
    <StyledView className="mt-4">
      <StyledText className="text-xl font-bold mb-2">Recent Updates:</StyledText>
      <StyledView style={{ width: screenWidth, overflow: 'hidden' }}>
        <Animated.View
          style={{
            flexDirection: 'row',
            width: totalWidth * 2,
            transform: [{ translateX: scrollX }],
          }}
        >
          {renderUpdates()}
        </Animated.View>
      </StyledView>
    </StyledView>
  );
};

export default RecentUpdates;