import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Dashboard from './Dashboard';
import PostScreen from './PostScreen';
import FeedScreen from './FeedScreen';
import DonateScreen from './DonateScreen';

const Tab = createBottomTabNavigator();

const DashboardScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Feed') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Donate') {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="Main" 
        component={Dashboard} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Donate" component={DonateScreen} />
    </Tab.Navigator>
  );
};

export default DashboardScreen;
