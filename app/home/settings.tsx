import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable} from 'react-native';
import { Link } from 'expo-router';

const PlantSettingsScreen = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <View style={styles.container}>
      <Link href="/home/plants" asChild>
          <Pressable
            style={[styles.header] }
          ><Text>Back</Text></Pressable>
        </Link>
      <View style={styles.topSection}>
        <View style={styles.growthCircle}>
          {/* Image of the plant */}
          <Image
            source={require('../../assets/images/plant1.png')}
            style={{ width: '100%', height: '100%', borderRadius: 75 }}
          />
        </View>
        <Text style={styles.plantName}>Plant #1</Text>
      </View>

      <View style={styles.deviceSettings}>
        <Text style={styles.sectionTitle}>Device Settings</Text>
        <TouchableOpacity style={styles.bubblyButton}>
          <Text>Option #1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bubblyButton}>
          <Text>Option #2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bubblyButton}>
          <Text>Option #3</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.otherSettings}>
        <Text style={styles.sectionTitle}>Other Settings</Text>
        <TouchableOpacity style={styles.bubblyButton}>
          <Text>Option</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bubblyButton, styles.removeButton]}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
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
    backgroundColor: '#fff',
  },
  topSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#7AA78E',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  growthCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  plantName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  deviceSettings: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  otherSettings: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bubblyButton: {
    backgroundColor: '#7AA78E',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  removeButton: {
    backgroundColor: 'red',
  },
  removeText: {
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

export default PlantSettingsScreen;
