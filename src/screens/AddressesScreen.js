import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

const OrdersScreen = () => {
  const ordersData = [
    { id: '1', carName: 'Toyota Camry', dateRange: 'Jan 10, 2023 - Jan 15, 2023', totalPrice: 'PKR 20,000' },
    { id: '2', carName: 'Honda Accord', dateRange: 'Feb 5, 2023 - Feb 10, 2023', totalPrice: 'PKR 100,000' },
    // Add more orders as needed
  ];

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <View style={styles.infoContainer }>
        <View style={styles.imageColumn}>
          <Image
            style={styles.carImage}
            source={require('../../assets/mercedez.jpeg')} // Add your actual image source
          />
        </View>
        <View style={styles.infoColumn}>
          <Text style={styles.carName}>{item.carName}</Text>
          <Text style={styles.dateRange}>{item.dateRange}</Text>
          <Text style={styles.totalPrice}>{item.totalPrice}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.orderAgainButton}>
        <Text style={styles.orderAgainButtonText}>Order again</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Past Orders</Text>
      <FlatList
        data={ordersData}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop:50,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: 15,
  },
  orderItem: {
    flexDirection: 'column',
    alignItems: 'center',
    //justifyContent: 'space-between',
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: 'white',

  },

  infoContainer:{
    flexDirection:'row',
  },
  imageColumn: {
    width: 100,
    height:100,
    marginRight: 10,
    
  },
  infoColumn: {
    width: '50%',
  },
  carImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginBottom:5,
  },
  dateRange: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 15,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderAgainButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
  },
  orderAgainButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OrdersScreen;
