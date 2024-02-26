import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Pressable} from 'react-native';
import { Link } from 'expo-router';
import NavBar from '../components/navigationBar';

const AppPage = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Subscription Plans</Text>
      <View style={styles.content}>
        <View style={[styles.textBox, styles.purpleBox]}>
          <Text style={styles.title}>Premium</Text>
          <Text style={styles.price}>19,99$/month</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Feature 1</Text>
            <Text style={styles.bulletPoint}>• Feature 2</Text>
            <Text style={styles.bulletPoint}>• Feature 3</Text>
            {/* Add more features here */}
          </View>
        </View>
        <View style={[styles.textBox, styles.greenBox]}>
          <Text style={styles.title}>Standard</Text>
          <Text style={styles.price}>free</Text>
          <View style={styles.bulletContainer}>
            <Text style={styles.bulletPoint}>• Feature A</Text>
            <Text style={styles.bulletPoint}>• Feature B</Text>
            <Text style={styles.bulletPoint}>• Feature C</Text>
            {/* Add more features here */}
          </View>
        </View>
      </View>
      <NavBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50, // Added padding to move content below header
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    alignItems: 'center',
  },
  textBox: {
    width: 350,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  purpleBox: {
    backgroundColor: 'purple',
  },
  greenBox: {
    backgroundColor: 'green',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'red',
    marginBottom: 10,
  },
  bulletContainer: {
    marginLeft: 15,
  },
  bulletPoint: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
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

export default AppPage;
