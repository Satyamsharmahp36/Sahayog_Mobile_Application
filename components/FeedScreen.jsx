import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const FeedScreen = () => {
  const demoPosts = [
    {
      id: '1',
      user: {
        name: 'Satyam Sharma',
        avatar: 'https://via.placeholder.com/50',
      },
      title: 'Flood',
      description: 'Heavy rainfall has caused flooding in low-lying areas of Himachal. Please stay indoors and follow local authorities',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      user: {
        name: 'Ananya Tewari',
        avatar: 'https://via.placeholder.com/50',
      },
      title: 'Lightning',
      description: 'There is huge thunderstrome and lightning in Delhi NCR .',
      timestamp: '5 hours ago',
    },
  ];

  const renderItem = ({ item }) => (
    <StyledView className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <StyledView className="flex-row items-center mb-2">
        <StyledImage
          source={{ uri: item.user.avatar }}
          className="w-10 h-10 rounded-full mr-2"
        />
        <StyledView>
          <StyledText className="font-bold">{item.user.name}</StyledText>
          <StyledText className="text-gray-500 text-xs">{item.timestamp}</StyledText>
        </StyledView>
      </StyledView>
      <StyledText className="text-lg font-bold mb-2">{item.title}</StyledText>
      <StyledText>{item.description}</StyledText>
    </StyledView>
  );

  return (
    <StyledView className="flex-1 bg-gray-100 p-4">
      <StyledText className="text-2xl font-bold mb-4">Feed</StyledText>
      <FlatList
        data={demoPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </StyledView>
  );
};

export default FeedScreen;