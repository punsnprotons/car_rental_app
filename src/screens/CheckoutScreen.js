import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';

const CheckoutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Checkout</Text>

      {/* Car Detail Section */}
      <View style={styles.section}>
        <View style={styles.carDetailContainer}>
          <View style={styles.carDetails}>
            <Text style={styles.carName}>Toyota Camry</Text>
            <Text style={styles.rentPrice}>PKR 10,000/day</Text>
            <Text style={styles.dateRange}>Jan 10, 2023 - Jan 15, 2023</Text>
            <Text style={styles.city}>Karachi</Text>
          </View>
          <View style={styles.carImageContainer}>
            <Image style={styles.carImage} source={require('../../assets/mercedez.jpeg')} />
          </View>
        </View>
      </View>

      {/* Discount Component */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Discount</Text>
        <TouchableOpacity style={styles.discountBox}>
          <Text style={styles.discountText}>Use a discount code</Text>
        </TouchableOpacity>
      </View>

      {/* Price Details Component */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Price Details</Text>
        <View style={styles.priceDetailsRow}>
          <Text style={styles.priceDetailsTitle}>Trip Price</Text>
          <Text style={styles.priceDetailsAmount}>PKR 10,000</Text>
        </View>
        <View style={styles.priceDetailsRow}>
          <Text style={styles.priceDetailsTitle}>Delivery Price</Text>
          <Text style={styles.priceDetailsAmount}>PKR 500</Text>
        </View>
        <View style={styles.priceDetailsRow}>
          <Text style={styles.priceDetailsTitle}>VAT</Text>
          <Text style={styles.priceDetailsAmount}>PKR 2,100</Text>
        </View>

        <View style={styles.priceDetailsRow}>
          <Text style={styles.priceTotal}>Total</Text>
          <Text style={styles.priceDetailsAmount}>PKR 12,600</Text>
        </View>
      </View>
      



      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={()=>navigation.navigate('Confirmation')}>
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
   // marginTop: 70,
    backgroundColor:'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginVertical:20,
    color:'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  carDetailContainer: {
    flexDirection: 'row',
  },
  carImage:{
    width:'100%',
    height:'100%',
    borderRadius:10,
  },
  carDetails: {
    flex: 1,
  },
  carName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:30,
  },
  rentPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom:5,
  },
  dateRange: {
    fontSize: 14,
    marginBottom:10,
  },
  city: {
    fontSize: 14,
  },
  carImageContainer: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginLeft: 20,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'lightgray',
  },
  discountBox: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'grey',
    borderRadius: 10,
    padding: 15,
    backgroundColor:'white',
  },
  discountText: {
    fontSize: 16,
    color:'gray',

  },
  priceDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceDetailsTitle: {
    color: 'grey',
    marginVertical:7,
  },
  priceTotal:{
    color: 'black',
    fontWeight:'800',
    marginVertical:7,
    fontSize:16,
  },
  priceDetailsAmount: {
    fontWeight: 'bold',
    marginVertical:7,
  },
  confirmButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop:110,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CheckoutScreen;
