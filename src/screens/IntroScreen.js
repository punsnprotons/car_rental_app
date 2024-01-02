import React from 'react';
import { View, StyleSheet, ImageBackground, Text, Button,Image,TouchableOpacity } from 'react-native';

const IntroScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/rentacar_home.jpeg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => console.log('button pressed')}>
          <Text style={styles.button}>Let's go</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
      },
      container: {
        flex: 1,
        justifyContent: 'space-between',
      },
      buttonContainer: {
        marginTop:700,
        padding:10,
        marginBottom: 20, // Adjust the margin as needed
        marginHorizontal: 20, // Optional: Add horizontal margin for better aesthetics
        backgroundColor: '#007AFF',
        borderRadius: 15,

      },
      button:{
        color:'white',
        fontWeight:"400",
        fontSize:20,
        textAlign:'center'
      }
});

export default IntroScreen;
