import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';

const screenWidth = Dimensions.get('window').width;


const NavBar = () => {
    return(
      <View style={styles.bottomMenu}>
      {/* Icons for different screens */}
      <Link href="/home/plants" asChild>
      <Pressable >
        <View style={[styles.circle, { backgroundColor: '#A9C5B7' }]} >
          <Image source='../../assets/icons/user.svg' contentFit="cover"/>
        </View>
      </Pressable>
      </Link>
      <Link href="/home/chat" asChild>
      <Pressable >
        <View style={[styles.circle, { backgroundColor: '#7DC98B' }]} >
        <Image source='../../assets/icons/chat.svg' contentFit="cover"/>
        </View>
      </Pressable>
      </Link>
      <Link href="/home/profile" asChild>
      <Pressable >
        <View style={[styles.circle, { backgroundColor: '#9C8410E5' }]} >
        <Image source='../../assets/icons/profile.svg' contentFit="cover"/>
        </View>
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
    image: {
      flex: 1,
      width: '100%',
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
      justifyContent: 'center'
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