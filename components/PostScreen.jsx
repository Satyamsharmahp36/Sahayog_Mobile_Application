import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

const PostScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      if (response.ok) {
        alert('Post submitted successfully!');
        setTitle('');
        setDescription('');
      } else {
        alert('Failed to submit post. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting post:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <StyledView className="p-4">
      <StyledText className="text-2xl font-bold mb-4">Create a Post</StyledText>
      <StyledTextInput
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <StyledTextInput
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={4}
      />
      <StyledTouchableOpacity className="bg-blue-500 p-3 rounded" onPress={handleSubmit}>
        <StyledText className="text-white text-center font-bold">Submit Post</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default PostScreen;
