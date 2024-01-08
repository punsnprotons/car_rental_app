import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign} from '@expo/vector-icons'; 

const ProfileScreen = () => {

  const renderProfileBox = (title, info) => (
    <View style={styles.box}>
      <View style={styles.column}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>
      <TouchableOpacity onPress={() => handleEdit(title)}>
        <Ionicons name="pencil-sharp" size={20} color="#007AFF" />  
      </TouchableOpacity>
    </View>
  );

  const handleEdit = (field) => {
    // Handle edit action based on the field (Name, Email, Password, Mobile Number)
    console.log(`Edit ${field}`);
  };

  return (
    <View style={styles.container}>
      {renderProfileBox('Name', 'Shaad Sufi')}
      {renderProfileBox('Email', 'shaad@gmail.com')}
      {renderProfileBox('Password', '••••••••••')}
      {renderProfileBox('Mobile Number', '+923368941901')}

      <Text style={styles.connectedAccountsTitle}>Connected Accounts</Text>

      <View style={styles.box}>
        <AntDesign name="facebook-square" size={24} color="black" />
        <Text style={styles.connectedAccountsText}>Facebook</Text>
        <TouchableOpacity>
            <Text style={styles.connect}>Connect</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <AntDesign name="google" size={24} color="black" />
        <Text style={styles.connectedAccountsText}>Google</Text>
        <TouchableOpacity>
            <Text style={styles.connect}>Connect</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 70,
  },
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, // for Android
    marginVertical: 10,
    paddingHorizontal:20,
  },
  column: {
    width: '70%',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    marginTop:5,
  },
  connectedAccountsTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  connectedAccountsBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
  },
  connectedAccountsText: {
    fontSize: 16,
  },
  connect:{
    //flex:2,
    color:'#007AFF',
    fontWeight:'600',
    fontSize:16,
    //marginLeft:200,

  }
});

export default ProfileScreen;
