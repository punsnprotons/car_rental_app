import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import NotImplementedScreen from '../screens/NotImplementedScreen'
import {Ionicons,Entypo} from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

import { Octicons } from '@expo/vector-icons'; 
import AccountScreen from '../screens/AccountScreen'
import ExploreScreen from '../screens/ExploreScreen'
import { Feather } from '@expo/vector-icons'; 
import ProfileScreen from '../screens/ProfileScreen';
import AddressScreen from '../screens/AddressesScreen';
import OrdersScreen from '../screens/OrdersScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import VouchersScreen from '../screens/VouchersScreen';
import BillingScreen from '../screens/BillingScreen';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const AccountStack = () => (
    <Stack.Navigator initialRouteName="Account"  screenOptions={{tabBarStyle:{backgroundColor:'whitesmoke'},headerStyle:{backgroundColor:'whitesmoke'}}}>
      <Stack.Screen name="Account" component={AccountScreen}  options={{ headerShown: true }}/>
      <Stack.Screen name="Profile" component={ProfileScreen}  options={{ headerShown: true }}/>
      <Stack.Screen name="Address" component={AddressScreen}  options={{ headerShown: true }} />
      <Stack.Screen name="Orders" component={OrdersScreen}   options={{ headerShown: true }}/>
      <Stack.Screen name="Favorites" component={FavoritesScreen}  options={{ headerShown: true }} />
      <Stack.Screen name="Vouchers" component={VouchersScreen}  options={{ headerShown: true }}/>
      <Stack.Screen name="Billing" component={BillingScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="Terms" component={NotImplementedScreen}   options={{ headerShown: true }}/>
      {/* Add other screens as needed */}
    </Stack.Navigator>
  );

const MainTabNavigator = () =>{
    return (
        <Tab.Navigator initialRouteName="Explore" 
            screenOptions={
                {tabBarStyle:
                    {backgroundColor:'whitesmoke'},
                    headerStyle:{backgroundColor:'whitesmoke'}
                }}
        >
            <Tab.Screen 
                name="Home" 
                component={NotImplementedScreen} 
                options={{ 
                    headerShown: false,
                    tabBarIcon: ({color,size})=> <Octicons name="home" size={30} color={color} style={{paddingTop:3}} />
                    }}
            />

            <Tab.Screen 
                name="Explore" 
                component={ExploreScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color,size})=> <FontAwesome5 name="compass" size={30} color={color} style={{paddingTop:3}} />
                    }}
            />

            <Tab.Screen 
                name="Messages" 
                component={NotImplementedScreen} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color,size})=> <Feather name="message-circle" size={30} color={color} style={{paddingTop:3}} />
                    }}
            />

            <Tab.Screen 
                name="Accounts" 
                component={AccountStack}  
                options={{
                    
                    tabBarIcon: ({color,size})=> <Ionicons name="person-outline" size={30} color={color}/>,
                    headerRight:() => <Entypo name="new-message" size={18} color={'royalblue'} style={{marginRight:15}}/>
            }}
            />

           
        </Tab.Navigator>
    )
}

export default MainTabNavigator