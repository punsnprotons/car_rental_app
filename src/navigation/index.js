import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MainTabNavigator from './MainTabNavigator'
import { View, Text } from 'react-native'
import React from 'react'
import CarDetailScreen from '../screens/CarDetailScreen'
import CheckoutScreen from '../screens/CheckoutScreen'
import ConfirmationScreen from '../screens/ConfirmationScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
//import ChatsScreen from '../screens/ChatsScreen'
//import ChatScreen from '../screens/ChatScreen'

const Stack = createNativeStackNavigator()
// Create a stack navigator
const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => (
  <NavigationContainer>
  <AuthStack.Navigator>
    <AuthStack.Screen name="Signup" component={SignupScreen}  options={{ headerShown: false }} />
    <AuthStack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }} />
    <AuthStack.Screen name="MainTab" component={Navigator} options={{ headerShown: false }} />
  </AuthStack.Navigator>
  </NavigationContainer>
);

const Navigator = () => {
  return (
    
        <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'whitesmoke'}}}>
            <Stack.Screen name='Home' component={MainTabNavigator} options={{headerShown:false}}/>
            <Stack.Screen name='CarDetail' component={CarDetailScreen}  options={{ headerShown: true }}/>
            <Stack.Screen name='Checkout' component={CheckoutScreen}  options={{ headerShown: true}}/>
            <Stack.Screen name='Confirmation' component={ConfirmationScreen}  options={{ headerShown: true }}/>
        </Stack.Navigator>
  )
}

export default AuthStackNavigator