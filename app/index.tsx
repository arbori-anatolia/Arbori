import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/plant.jpeg')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Text style={styles.headerText}>Manage your Aerogarden</Text>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>My Plants</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Explore</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>My Account</Text>
          </TouchableOpacity>
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
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(174,203,164,0.8)', 
    justifyContent: 'center',
    alignItems: 'center',
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