import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import HomeScreen from './src/screens/HomeScreen';
import Navigator from './src/navigation';
import CarDetailScreen from './src/screens/CarDetailScreen'
import BookingScreen from './src/screens/BookingScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <BookingScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  }
  
});

