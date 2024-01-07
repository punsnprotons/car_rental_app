import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailSpecs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Specs</Text>

      <View style={styles.boxContainer}>
        <View style={styles.specBox}>
          <Text style={styles.specLabel}>Max Power</Text>
          <Text style={styles.specValue}>320</Text>
          <Text style={styles.specUnit}>hp</Text>
        </View>

        <View style={styles.specBox}>
          <Text style={styles.specLabel}>0-60 mph</Text>
          <Text style={styles.specValue}>5.4</Text>
          <Text style={styles.specUnit}>sec.</Text>
        </View>

        <View style={styles.specBox}>
          <Text style={styles.specLabel}>Top Speed</Text>
          <Text style={styles.specValue}>187</Text>
          <Text style={styles.specUnit}>mph</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Inter', // Assuming you have the 'Inter' font available
    marginBottom: 8,
    alignSelf:'left',

  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    marginBottom:15,
  },
  specBox: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    borderRadius: StyleSheet.hairlineWidth,
    padding: 8,
    alignItems: 'left',
    marginHorizontal: 4, // Adjust the margin as needed
    borderRadius:10,
    paddingLeft:12,
  },
  specLabel: {
    color: 'gray',
  },
  specValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  specUnit: {
    fontSize: 11,
    color: 'gray',
    paddingTop:3,
  },
});

export default DetailSpecs;
