import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { Link } from 'expo-router';
import NavBar from './components/navigationBar';



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

      <NavBar/>


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