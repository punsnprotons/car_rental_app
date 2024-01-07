import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const pickupTimes = [
  { label: '9:00 AM', value: '1' },
  { label: '10:00 AM', value: '2' },
  { label: '11:00 AM', value: '3' },
  { label: '12:00 PM', value: '4' },
  { label: '1:00 PM', value: '5' },
  { label: '2:00 PM', value: '6' },
  { label: '3:00 PM', value: '7' },
  { label: '4:00 PM', value: '8' },
  { label: '5:00 PM', value: '9' },
  { label: '6:00 PM', value: '10' },
  { label: '7:00 PM', value: '11' },
  { label: '8:00 PM', value: '12' },
];

const BookTime = () => {
  const [pickupTime, setPickupTime] = useState(pickupTimes[0].value);
  const [dropoffTime, setDropoffTime] = useState(pickupTimes[0].value);

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.title}>Pick up</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={pickupTimes}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          value={pickupTime}
          onChange={(item) => {
            setPickupTime(item.value);
          }}
        />
      </View>

      <View style={styles.column}>
        <Text style={styles.title}>Drop off</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={pickupTimes}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select drop off"
          value={dropoffTime}
          onChange={(item) => {
            setDropoffTime(item.value);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: 'white',
    //marginHorizontal: 10,
    marginRight: 10, // Added marginRight here
    marginBottom:40,

  },
  column: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 5,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    marginTop: 10,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  inputSearchStyle: {
    height: 0,
    fontSize: 16,
  },
});

export default BookTime;
