import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

const HomePage = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
      <Text style={styles.title}>Arbori</Text>
        <Image
          source={require('../../assets/images/logo.png')} 
          style={styles.photo}
        />
        <Text style={styles.welcomeText}>Welcome back @username</Text>
      </View>

      <View style={styles.bottomMenu}>
        <Link href="/home/start" asChild>
          <Pressable
            style={[styles.circle, { backgroundColor: '#A9C5B7' }, selectedButton === 'Button 1' && styles.selectedCircle]}
            onPress={() => handleButtonPress('Button 1')}
          ><Text>Home</Text></Pressable>
        </Link>
        <View style={styles.gap} />

        <Link href="/home/explore" asChild>
          <Pressable
            style={[styles.circle, { backgroundColor: '#7DC98B' },selectedButton === 'Button 2' && styles.selectedCircle]}
            onPress={() => handleButtonPress('Button 2')}
            ><Text>Explore</Text></Pressable>
        </Link>
        <View style={styles.gap} />

        <Link href="/home/account" asChild>
          <Pressable
            style={[styles.circle, { backgroundColor: '#9C8410E5' }, selectedButton === 'Button 3' && styles.selectedCircle]}
            onPress={() => handleButtonPress('Button 3')}
            ><Text>Account</Text></Pressable>
        </Link>
        <View style={styles.gap} />

        <Link href="/home/profile" asChild>
          <Pressable
            style={[styles.circle, { backgroundColor: '#9C8410E5' }, selectedButton === 'Button 4' && styles.selectedCircle]}
            onPress={() => handleButtonPress('Button 4')}
            ><Text>Profile</Text></Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'ligth green'
  },
  contentContainer: {
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
    backgroundColor: '#2ecc71', // Change color for the selected circle
  },
  gap: {
    width: 10,
  },
});

 
  
export default HomePage;