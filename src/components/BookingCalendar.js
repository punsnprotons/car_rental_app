import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const markedDates = selectedDate
    ? { [selectedDate]: { selected: true, selectedColor: 'blue' } }
    : {};

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        style={styles.calendar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor:'white',
    marginBottom:20,
  },
  calendar: {
    // You can add additional styles for the Calendar component here
    borderRadius:10,
    backgroundColor:'white',
    color:'black',
    fontWeight:'400',
  },
});

export default BookingCalendar;
