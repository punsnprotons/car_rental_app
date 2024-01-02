import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from './src/screens/IntroScreen';
import BrandList from './src/components/BrandList';

export default function App() {
  return (
    <BrandList/>
  );
}

