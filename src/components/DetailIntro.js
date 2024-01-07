import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';

const DetailIntro = () => {
  return (
    <View style={styles.container}>
      

      <Image style={styles.carImage} source={require('../../assets/mercedez.jpeg')} />

      <View style={styles.header}>
        <Text style={styles.title}>Red Mazda 6 - Elite Estate</Text>
        <Foundation name="heart" size={24} color="black" />
      </View>

      <View style={styles.ratingContainer}>
        <View style={styles.starContainer}>
          <Foundation name="star" size={24} color="orange" />
          <Text style={styles.ratingNumber}>4.8</Text>
          <Text style={styles.reviewText}>[100+ reviews]</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop:5,

  },
  carImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius:30,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight:5,
  },
  ratingNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
    paddingRight:5,
  },
  reviewText: {
    fontSize: 12,
    color: 'gray',
    marginLeft: 4,
    paddingRight:5,
  },
});

export default DetailIntro;
