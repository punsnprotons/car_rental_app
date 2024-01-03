import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import NotImplementedScreen from '../screens/NotImplementedScreen'
import {Ionicons,Entypo,MaterialIcons} from '@expo/vector-icons'



const Tab = createBottomTabNavigator()

const Navigator = () => {
    return (
      <NavigationContainer>
       <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarIcon: ({color,size})=> <MaterialIcons name="explore" size={size} color={color}/>}}/>
            <Tab.Screen name="Favorites" component={NotImplementedScreen} options={{headerShown: false,tabBarIcon: ({color,size})=> <MaterialIcons name="favorite" size={size} color={color} />}}/>
            <Tab.Screen name="Notifications" component={NotImplementedScreen} options={{ headerShown: false, tabBarIcon: ({color,size})=> <Ionicons name="notifications" size={size} color={color}/>}}/>
            <Tab.Screen name="Profile" component={NotImplementedScreen} options={{headerShown: false, tabBarIcon: ({color,size})=> <Ionicons name="person" size={size} color={color}/>}}/>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }


  export default Navigator
