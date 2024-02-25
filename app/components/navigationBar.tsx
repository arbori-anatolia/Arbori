import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;


const NavBar = () => {
    return(
      <View style={styles.bottomMenu}>
      {/* Icons for different screens */}
      <Link href="/home/feed" asChild>
      <Pressable >
        <View style={[styles.circle, { backgroundColor: '#A9C5B7' }]} />
      </Pressable>
      </Link>
      <Link href="/home/plant" asChild>
      <Pressable >
        <View style={[styles.circle, { backgroundColor: '#7DC98B' }]} />
      </Pressable>
      </Link>
      <Link href="/home/settings" asChild>
      <Pressable >
        <View style={[styles.circle, { backgroundColor: '#9C8410E5' }]} />
      </Pressable>
      </Link>
      <Link href="/home/profile" asChild>
      <Pressable >
        <View style={[styles.circle, { backgroundColor: '#9C8410E5' }]} />
      </Pressable>
      </Link>
    </View>
    )
}


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
    bottomMenu: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'absolute',
      backgroundColor: '#8DA197',
      borderTopWidth: 2,
      borderTopColor: '#ccc',
      paddingVertical: 10,
      width: screenWidth,
      bottom: 0
    },
    selectedCircle: {
      backgroundColor: '#2ecc71', // Change color for the selected circle
    },
    gap: {
      width: 10,
    },
  });
  
    
  export default NavBar;