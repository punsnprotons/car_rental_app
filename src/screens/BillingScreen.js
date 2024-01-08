import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You may need to import the appropriate icons

const BillingScreen = () => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Payment Methods</Text>

      {/* Payment Method Box */}
      <View style={styles.cardContainer}>
        {/* Card Details */}
        <View style={styles.cardDetails}>
          <Text style={styles.cardNumber}>**** **** **** 1234</Text>
          <Text style={styles.cardNameDate}>John Doe | 12/24</Text>
        </View>

        {/* Card Brand Icon (Assuming FontAwesome icons for Visa and MasterCard) */}
        <FontAwesome name="cc-visa" size={30} color="#007AFF" style={styles.cardIcon} />
      </View>

      {/* Add Payment Method Button */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 70,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 30,
    marginBottom: 20,
  },
  cardDetails: {
    flex: 1,
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardNameDate: {
    fontSize: 14,
  },
  cardIcon: {
    marginLeft: 20,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BillingScreen;
