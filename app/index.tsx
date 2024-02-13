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
        {selectedButton ? (
          <Text>{`Page for ${selectedButton}`}</Text>
        ) : (
          <Text>Main Content Goes Here</Text>
        )}
      </View>

      <View style={styles.bottomBar}>
        <Link href="/home/plants" asChild>
          <Pressable
            style={[styles.circle, selectedButton === 'Button 1' && styles.selectedCircle]}
            onPress={() => handleButtonPress('Button 1')}
          ><Text>Plants</Text></Pressable>
        </Link>
        <View style={styles.gap} />

        <Link href="/home/explore" asChild>
          <Pressable
            style={[styles.circle, selectedButton === 'Button 2' && styles.selectedCircle]}
            onPress={() => handleButtonPress('Button 2')}
            ><Text>Explore</Text></Pressable>
        </Link>
        <View style={styles.gap} />

        <Link href="/home/account" asChild>
          <Pressable
            style={[styles.circle, selectedButton === 'Button 3' && styles.selectedCircle]}
            onPress={() => handleButtonPress('Button 3')}
            ><Text>Account</Text></Pressable>
        </Link>
        <View style={styles.gap} />

        <Link href="/home/settings" asChild>
          <Pressable
            style={[styles.circle, selectedButton === 'Button 4' && styles.selectedCircle]}
            onPress={() => handleButtonPress('Button 4')}
            ><Text>Settings</Text></Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 60,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498db',
  },
  selectedCircle: {
    backgroundColor: '#2ecc71', // Change color for the selected circle
  },
  gap: {
    width: 10,
  },
});

  
export default HomePage;