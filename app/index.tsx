import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.jpeg')}
        style={styles.startingImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.headerText}>Manage your Aerogarden</Text>
        <View style={styles.menuContainer}>
        <Link href="/home/plants" asChild>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>My plants</Text>
          </Pressable>
        </Link>
        <Link href="/home/explore" asChild>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>Explore</Text>
          </Pressable>
        </Link>
        <Link href="/home/account" asChild>
          <Pressable style={styles.menuItem}>
            <Text style={styles.menuText}>My Account</Text>
          </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AECBA4',
  },

  startingImage: {
   resizeMode: 'center',
   heigh:100,
   width: 200,
   alignSelf: 'center',
   
    
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', 
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(174,203,164,0.8)', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  menuContainer: {
    width: '80%',
    marginBottom: 20,
  },
  menuItem: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#4CAF50', 
    borderRadius: 10,
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomePage;