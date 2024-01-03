import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search vehicle"
        style={styles.inputStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    width: '80%',
    height:'200',
    marginHorizontal: '10%',
    borderRadius: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    padding: 10,
    alignItems:'center',
    marginBottom:20,
    marginTop:-15,
  },
  iconStyle: {
    fontSize: 24,
    marginRight: 10,
    color: '#333',
  },
  inputStyle: {
    
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;
