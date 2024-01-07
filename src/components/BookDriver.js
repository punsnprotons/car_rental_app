import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const BookDriver = () => {
  const [toggleValue, setToggleValue] = React.useState(false);

  const onToggleChange = () => {
    setToggleValue(!toggleValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={styles.title}>Book with driver</Text>
        <Text style={styles.subtitle}>We provide you with a driver of your choice</Text>
      </View>

      <View style={styles.rightColumn}>
        <Switch
          value={toggleValue}
          onValueChange={onToggleChange}
          trackColor={{ false: 'gray', true: '#007AFF' }}
          thumbColor={toggleValue ? 'white' : 'white'}
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
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius:10,
    backgroundColor:'white',
    marginBottom:20,
    marginTop:20,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    width: 50,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom:3,
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
  },
});

export default BookDriver;
