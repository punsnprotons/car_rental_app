import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

const SignupScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Implement your signup logic here
    console.log('Signup pressed');
  };

  return (
    <View style={styles.container}>
      {/* Screen Title */}
      <Text style={styles.title}>Welcome to CarCare! 😉</Text>
      <Text style={styles.subtitle}>Register and rent super cars anytime!</Text>

      {/* Full Name Input */}
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter full name"
        keyboardType="default"
        autoCapitalize="words"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />

      {/* Email Address Input */}
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Phone Number Input */}
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        autoCapitalize="none"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        autoCapitalize="none"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Confirm Password Input */}
      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        autoCapitalize="none"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {/* Or Register With */}
      <Text style={styles.orText}>or register with</Text>

      {/* Social Media Icons */}
      <View style={styles.socialIconsContainer}>
        <FontAwesome name="facebook" size={40} color="#1877f2" style={styles.socialIcon} />
        <AntDesign name="google" size={40} color="#DB4437" style={styles.socialIcon} />
      </View>

      {/* Already have an account */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={[styles.loginText, styles.loginLink]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 70,
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
  label: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginBottom: 5,
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
  registerButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    fontWeight: '300',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialIcon: {
    marginHorizontal: 20,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: 'grey',
    fontSize: 16,
  },
  loginLink: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
