import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Feather, AntDesign, FontAwesome6 } from '@expo/vector-icons';

const Plan = () => {
  const data = [
    {
      title: 'Hourly Rent',
      description: 'Best for business appointments',
      price: 'PKR 10,000',
      icon: <Feather name="clock" size={24} color="black" />,
    },
    {
      title: 'Daily Rent',
      description: 'Best for travel',
      price: 'PKR 50,000',
      icon: <AntDesign name="calendar" size={24} color="black" />,
    },
    {
      title: 'Monthly Rent',
      description: 'Best for long stays',
      price: 'PKR 100,000',
      icon: <FontAwesome6 name="calendar-check" size={24} color="black" />,
    },
  ];

  const renderPlanItem = ({ item }) => (
    <View style={styles.planBox}>
      <View style={styles.iconColumn}>{item.icon}</View>
      <View style={styles.detailsColumn}>
        <Text style={styles.planTitle}>{item.title}</Text>
        <Text style={styles.planDescription}>{item.description}</Text>
        <Text style={styles.planPrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan</Text>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderPlanItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter', // Assuming you have the 'Inter' font available
    marginBottom: 8,
  },
  planBox: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    borderRadius: 30,
    marginRight: 8,
    width: 200, // Adjust the width as needed
    overflow: 'hidden',
  },
  iconColumn: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
  },
  detailsColumn: {
    flex: 1,
    padding: 8,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  planDescription: {
    fontSize: 12,
    color: 'gray',
  },
  planPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Plan
