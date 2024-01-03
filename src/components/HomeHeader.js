import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.locationIconContainer}>
        <FontAwesome name="map-marker" style={styles.locationIcon} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.locationLabel}>Your location</Text>
        <Text style={styles.locationDetails}>Karachi, Pakistan</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/profilepic.png')} 
          style={styles.faceImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight:10,
  },
  locationIconContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    paddingLeft:15,
    paddingRight:15,
    marginRight: 10,
  },
  locationIcon: {
    fontSize: 30,
    color: 'black',
  },
  textContainer: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 14,
    color: 'gray',
  },
  locationDetails: {
    fontSize: 15,
    fontWeight: '500',
    color: 'black',
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 0,
  },
  faceImage: {
    width: 50,  // Adjust the size as needed
    height: 50, // Adjust the size as needed
    borderRadius: 6,
  },
});

export default HomeHeader;
