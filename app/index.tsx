import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { Link } from 'expo-router';
import NavBar from './components/navigationBar';



const HomePage = () => {

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <Text style={styles.title}>Arbori</Text>
        <Image
          source={require('../assets/images/logo.png')} 
          style={styles.photo}
        />
        <Text style={styles.welcomeText}>Welcome back @username</Text>
      </View>

      <NavBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '92.5%',
    position: 'relative',
    backgroundColor: 'ligth green'
  },
  contentcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: 'white',
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  selectedCircle: {
    backgroundColor: '#2ecc71', 
  },
  gap: {
    width: 10,
  },
});

 
  
export default HomePage;