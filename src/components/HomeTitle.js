import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FindVehicleText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.line1}>Find your favorite</Text>
      <Text style={styles.line2}>vehicle.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'left',
    marginLeft:20,
  },
  line1: {
    fontSize: 30,
    fontWeight: '300',
    color: 'black',
  },
  line2: {
    fontSize: 30,
    fontWeight: '300',
    color: 'black',
  },
});

export default FindVehicleText;
