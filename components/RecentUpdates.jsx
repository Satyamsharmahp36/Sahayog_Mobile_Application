import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const RecentUpdates = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [updates, setUpdates] = useState([]);
  const cardWidth = 200;
  const { width: screenWidth } = Dimensions.get('window');


  // useEffect(() => {
  //   const fetchUpdates = async () => {
  //     try {
  //       const response = await fetch('http://192.168.29.184:8080/stats'); 
  //       const data = await response.json();

  //       const formattedUpdates = data.map((item) => ({
  //         location: `${item.location.city ? item.location.city + ', ' : ''}${item.location.state}`,
  //         event: item.description,
  //         time: item.timestamp ? new Date(item.timestamp).toLocaleTimeString() : 'N/A',
  //         date: item.timestamp ? new Date(item.timestamp).toLocaleDateString() : 'N/A',
  //       }));

  //       console.log('Formatted Updates:', formattedUpdates); // Debugging
  //       setUpdates(formattedUpdates);
  //     } catch (error) {
  //       console.error('Error fetching updates:', error);
  //     }
  //   };

  //   fetchUpdates();
  // }, []);

  useEffect(() => {
    const dummyUpdates = [
      {
        location: 'Mumbai, Maharashtra',
        event: 'Heavy rainfall warning issued.',
        time: '10:30 AM',
        date: '21 Feb 2025',
      },
      {
        location: 'Delhi, Delhi NCR',
        event: 'Air quality reaches severe level.',
        time: '09:15 AM',
        date: '21 Feb 2025',
      },
      {
        location: 'Chennai, Tamil Nadu',
        event: 'Cyclone alert for coastal areas.',
        time: '11:00 AM',
        date: '21 Feb 2025',
      },
      {
        location: 'Kolkata, West Bengal',
        event: 'Flooding reported in low-lying areas.',
        time: '08:45 AM',
        date: '21 Feb 2025',
      },
      {
        location: 'Bengaluru, Karnataka',
        event: 'Traffic congestion due to protests.',
        time: '10:00 AM',
        date: '21 Feb 2025',
      },
    ];

    setUpdates(dummyUpdates);
  }, []);

  const totalWidth = updates.length * cardWidth;

  useEffect(() => {
    if (updates.length > 0) {
      const animation = Animated.loop(
        Animated.timing(scrollX, {
          toValue: -totalWidth,
          duration: updates.length * 3000,
          useNativeDriver: true,
        })
      );

      animation.start();

      return () => animation.stop();
    }
  }, [scrollX, updates.length, totalWidth]);

  const renderUpdates = () => {
    if (updates.length === 0) {
      return (
        <StyledView className="bg-gray-200 p-3 rounded-lg">
          <StyledText className="font-bold">No updates available</StyledText>
        </StyledView>
      );
    }

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
