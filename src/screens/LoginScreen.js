import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Login pressed');
  };

  return (
    <View style={styles.container}>
      {/* Screen Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome back! 😉</Text>
        <Text style={styles.subtitle}>Login and rent super cars anytime!</Text>
      </View>

      {/* Email Address Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      {/* Login Button */}
      <View style={styles.loginButtonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Don't have an account */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={[styles.signupText, styles.signupLink]}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: '',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 70,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical:20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginVertical:10,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  loginButtonContainer: {
    width: '100%',
    marginTop:40,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    color: 'grey',
    fontSize: 16,
  },
  signupLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
