import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import the appropriate icon library

const ConfirmationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Screen Title */}
      <Text style={styles.title}>Confirm</Text>

      {/* Confirm Icon */}
      <View style={styles.confirmIconContainer}>
        <FontAwesome name="check-circle" size={100} color="#00CC00" />
      </View>

      {/* Confirmation Text */}
      <Text style={styles.confirmationText}>Your booking has been confirmed</Text>

      {/* Subtext */}
      <Text style={styles.subtext}>
        Congratulations! Your booking has been confirmed. Check the location of your car on the home page.
      </Text>

      {/* Back to Home Button */}
      <TouchableOpacity style={styles.backToHomeButton} onPress={()=>navigation.navigate('Explore')}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  confirmIconContainer: {
    marginBottom: 20,
  },
  confirmationText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtext: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 50,
    color:'gray',
    marginHorizontal:25,
  },
  backToHomeButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    //marginTop:300,
    width:'100%',
    justifyContent:'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'center',
  },
});

export default ConfirmationScreen;
