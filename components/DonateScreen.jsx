import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

const DonateScreen = () => {
  const [amount, setAmount] = useState('');
  const [upiId, setUpiId] = useState('example@upi');

  const handleDonation = () => {
    if (amount && parseFloat(amount) > 0) {
      Alert.alert(
        'Donation Confirmation',
        `Thank you for your donation of ₹${amount} to UPI ID: ${upiId}`,
        [{ text: 'OK', onPress: () => setAmount('') }]
      );
    } else {
      Alert.alert('Invalid Amount', 'Please enter a valid donation amount.');
    }
  };

  return (
    <StyledView className="flex-1 bg-gray-100 p-4">
      <StyledText className="text-2xl font-bold mb-4">Donate</StyledText>
      <StyledText className="mb-2">UPI ID: {upiId}</StyledText>
      <StyledTextInput
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Enter donation amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <StyledTouchableOpacity
        className="bg-blue-500 p-3 rounded"
        onPress={handleDonation}
      >
        <StyledText className="text-white text-center font-bold">
          Donate Now
        </StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
};

export default DonateScreen;