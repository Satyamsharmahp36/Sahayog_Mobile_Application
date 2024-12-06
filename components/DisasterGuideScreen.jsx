import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

const DisasterGuideScreen = () => (
  <SafeAreaView className="flex-1 bg-gray-100">
    <ScrollView className="p-4">
      <Text className="text-2xl font-bold mb-4 mt-10 text-blue-600">Disaster Guide</Text>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Earthquakes</Text>
        <Text className="text-lg font-semibold mb-2">Do's:</Text>
        <Text>- Drop to your knees and cover your head and neck with your arms.</Text>
        <Text>- If you are indoors, stay inside and move away from windows and heavy furniture.</Text>
        <Text>- If you are outdoors, move to an open area away from buildings and overhead structures.</Text>
        <Text>- If you are driving, stop the car and stay inside until the shaking stops.</Text>
        <Text className="text-lg font-semibold mb-2">Don'ts:</Text>
        <Text>- Do not use elevators.</Text>
        <Text>- Do not run outside during the shaking.</Text>
        <Text>- Avoid using matches, candles, or open flames due to possible gas leaks.</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Floods</Text>
        <Text className="text-lg font-semibold mb-2">Do's:</Text>
        <Text>- Move to higher ground immediately and stay there until it is safe.</Text>
        <Text>- Avoid walking or driving through floodwaters.</Text>
        <Text>- Listen to weather reports and emergency services for updates and instructions.</Text>
        <Text className="text-lg font-semibold mb-2">Don'ts:</Text>
        <Text>- Do not attempt to drive through flooded areas.</Text>
        <Text>- Avoid contact with floodwater, as it may be contaminated.</Text>
        <Text>- Do not use electrical appliances or touch electrical outlets if you are wet or standing in water.</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Tornadoes</Text>
        <Text className="text-lg font-semibold mb-2">Do's:</Text>
        <Text>- Seek shelter in a basement or interior room on the lowest floor of a sturdy building.</Text>
        <Text>- Protect your head and neck with your arms or a heavy object.</Text>
        <Text>- If you are in a vehicle, stop and seek shelter in a low-lying area if possible.</Text>
        <Text className="text-lg font-semibold mb-2">Don'ts:</Text>
        <Text>- Do not take shelter under overpasses or bridges.</Text>
        <Text>- Avoid staying in a mobile home or temporary structure.</Text>
        <Text>- Do not open windows to let the storm in; this is a myth.</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Hurricanes</Text>
        <Text className="text-lg font-semibold mb-2">Do's:</Text>
        <Text>- Evacuate if instructed to do so by authorities.</Text>
        <Text>- Stock up on essential supplies like water, non-perishable food, and medications.</Text>
        <Text>- Secure your home by boarding up windows and securing loose items outside.</Text>
        <Text className="text-lg font-semibold mb-2">Don'ts:</Text>
        <Text>- Do not ignore evacuation orders or warnings.</Text>
        <Text>- Avoid using candles or open flames if power is out.</Text>
        <Text>- Do not drive through flooded or debris-covered roads.</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Wildfires</Text>
        <Text className="text-lg font-semibold mb-2">Do's:</Text>
        <Text>- Evacuate immediately if advised by local authorities.</Text>
        <Text>- Create a defensible space around your home by clearing flammable materials.</Text>
        <Text>- Keep emergency supplies and a go-bag ready for quick evacuation.</Text>
        <Text className="text-lg font-semibold mb-2">Don'ts:</Text>
        <Text>- Do not attempt to fight the fire or stay in an area that is already burning.</Text>
        <Text>- Avoid breathing in smoke; use a mask if necessary.</Text>
        <Text>- Do not wait to evacuate; wildfires can spread rapidly.</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Severe Storms</Text>
        <Text className="text-lg font-semibold mb-2">Do's:</Text>
        <Text>- Seek shelter in a safe, sturdy location away from windows and outside walls.</Text>
        <Text>- Avoid using electrical appliances and stay away from water sources.</Text>
        <Text>- Listen to weather updates and follow local advisories.</Text>
        <Text className="text-lg font-semibold mb-2">Don'ts:</Text>
        <Text>- Do not go outside unless absolutely necessary.</Text>
        <Text>- Avoid taking shelter under large trees or near tall structures.</Text>
        <Text>- Do not attempt to drive through stormy conditions or standing water.</Text>
      </View>

      <View className="mb-4 p-4 bg-white rounded-lg shadow-md">
        <Text className="text-xl font-bold mb-2">Chemical Spills</Text>
        <Text className="text-lg font-semibold mb-2">Do's:</Text>
        <Text>- Move away from the spill area immediately and seek fresh air.</Text>
        <Text>- Follow local emergency instructions and stay indoors if advised.</Text>
        <Text>- Use protective clothing and equipment if you must be near the spill area.</Text>
        <Text className="text-lg font-semibold mb-2">Don'ts:</Text>
        <Text>- Do not touch or come into contact with the spilled chemical.</Text>
        <Text>- Avoid using electrical appliances in the affected area.</Text>
        <Text>- Do not attempt to clean up the spill yourself unless trained to do so.</Text>
      </View>
      
    </ScrollView>
  </SafeAreaView>
);

export default DisasterGuideScreen;
