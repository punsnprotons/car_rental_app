import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // You may need to import the appropriate icons

const IM_SIZE = 30;
const ARROW_SIZE = 20;
const ARROW_COLOR = 'grey';
const IM_COLOR ="#007AFF"

const AccountScreen = () => {

  const renderListItem = (iconName, text) => (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemContent}>
        <FontAwesome name={iconName} size={IM_SIZE} color={IM_COLOR} />
        <Text style={styles.listItemText}>{text}</Text>
      </View>
      <FontAwesome name="chevron-right" size={ARROW_SIZE} color={ARROW_COLOR} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/profilepic.png')} 
        />
        <Text style={styles.name}>Shaad Sufi</Text>
      </View>

      {/* List of Clickable Items */}
      {renderListItem('user', 'View Profile')}
      {renderListItem('map-marker', 'Addresses')}
      {renderListItem('shopping-basket', 'Orders and Reordering')}
      {renderListItem('heart', 'Favorites')}
      {renderListItem('ticket', 'Vouchers and Offers')}
      {renderListItem('credit-card', 'Billing Information')}
      {renderListItem('file-text-o', 'Terms & Conditions')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 70,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    marginLeft: 10,
    paddingRight: 10,
  },
  listItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    marginLeft: 15,
    fontSize: 16,
  },
});

export default AccountScreen;
