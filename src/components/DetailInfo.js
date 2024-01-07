import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, MaterialCommunityIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';


const ICON_SIZE = 20
const DetailInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car Info</Text>

      <View style={styles.infoContainer}>
        <View style={styles.column}>
          <View style={styles.row}>
            <FontAwesome name="user" size={ICON_SIZE} color="#007AFF" />
            <Text style={styles.text}>2 Passengers</Text>
          </View>

          <View style={styles.row}>
            <Entypo name="air" size={ICON_SIZE} color="#007AFF" />
            <Text style={styles.text}>Air conditioning</Text>
          </View>

          <View style={styles.row}>
            <MaterialCommunityIcons name="car-shift-pattern" size={ICON_SIZE} color="#007AFF" />
            <Text style={styles.text}>Manual</Text>
          </View>
        </View>

        <View style={styles.column}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="car-door" size={ICON_SIZE} color="#007AFF" />
            <Text style={styles.text}>2 Doors</Text>
          </View>

          <View style={styles.row}>
            <FontAwesome5 name="gas-pump" size={ICON_SIZE} color="#007AFF" />
            <Text style={styles.text}>Fuel into: Full to Full</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingHorizontal: 16,
  },
  title: {
    marginTop:5,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    fontFamily:'Inter',
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop:5,
  },
  column: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical:3,
  },
  text:{
    fontSize:14,
    fontWeight:'300',
    color:'black',
    marginLeft:3,
    //fontFamily:'Inter',


  }
});

export default DetailInfo;
