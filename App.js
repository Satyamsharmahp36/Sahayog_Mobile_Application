import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import FirstPage from './components/FirstPage';
import OrganizationDetailsScreen from './components/OrganizationScreenDetails';
import DashboardScreen from './components/DashboardScreen';
import EmergencyHelplineScreen from './components/EmergencyHelplineScreen';
import InformationCenterScreen from './components/InformationCenterScreen';
import DisasterGuideScreen from './components/DisasterGuideScreen';
import MapScreen from './components/MapScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
        <Stack.Screen name="Org" component={OrganizationDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EmergencyHelpline" component={EmergencyHelplineScreen} options={{ headerShown: false }} />
        <Stack.Screen name="InformationCenter" component={InformationCenterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DisasterGuide" component={DisasterGuideScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}