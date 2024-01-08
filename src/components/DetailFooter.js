import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DetailFooter = ({handlePress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={styles.price}>PKR <Text style={styles.boldNumber}>10,000</Text></Text>
        <Text style={styles.smallText}>/ hour</Text>
      </View>

      <TouchableOpacity style={styles.rightColumn} onPress={handlePress}>
        <Text style={styles.continueButton}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  leftColumn: {
    alignItems: 'flex-start',
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
  },
  boldNumber: {
    fontWeight: '700',
  },
  smallText: {
    fontSize: 12,
    color: 'gray',
    fontWeight: '400',
  },
  rightColumn: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  continueButton: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DetailFooter;
 