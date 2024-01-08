import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import HomeScreen from './src/screens/HomeScreen';
import Navigator from './src/navigation';
import CarDetailScreen from './src/screens/CarDetailScreen'
import BookingScreen from './src/screens/BookingScreen';
import AccountScreen from './src/screens/AccountScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AddressesScreen from './src/screens/AddressesScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import VouchersScreen from './src/screens/VouchersScreen';
import BillingScreen from './src/screens/BillingScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import ConfirmationScreen from './src/screens/ConfirmationScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //justifyContent: 'center',
  }
  
});

