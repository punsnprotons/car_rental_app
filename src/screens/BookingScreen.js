import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import BookDriver from '../components/BookDriver';
import BookingCalendar from '../components/BookingCalendar';
import BookTime from '../components/BookTime';

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book your car</Text>

      <BookDriver />
      <BookingCalendar />
      <BookTime />

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Proceed with payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 70,
    marginBottom:30,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    alignSelf:'center',
  },
  buttonContainer: {
    width: '100%',
    padding: 16,
    marginTop: 20,
    alignSelf:'flex-end',
  },
  button: {
    backgroundColor: '#007AFF',
    width: '100%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default BookingScreen;
