import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You may need to import the appropriate icons

const VouchersScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Vouchers & Offers</Text>
      {/* Header Box */}
      <View style={styles.headerBox}>
        <View style={styles.leftColumn}>
          <Text style={styles.amount}>Rs.0.0</Text>
          <Text style={styles.savedText}>Saved this month</Text>
        </View>
        <View style={styles.separator}></View>
        <TouchableOpacity style={styles.rightColumn}>
          <FontAwesome name="ticket" size={20} color="#007AFF" style={styles.ticketIcon} />
          <Text style={styles.addVoucherText}>Add a voucher</Text>
        </TouchableOpacity>
      </View>

      {/* List of Vouchers */}
      {/* You can render your list of vouchers here */}
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
    textAlign: 'left',
    marginBottom: 10,
  },
  headerBox: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  leftColumn: {
    flex: 1,
    alignItems: 'center',
  },
  amount: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom:6,
  },
  savedText: {
    color: 'grey',
  },
  separator: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: 'grey',
  },
  rightColumn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketIcon: {
    marginRight: 5,
  },
  addVoucherText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default VouchersScreen;
