import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable} from 'react-native';
import { Link } from 'expo-router';
import NavBar from '../components/navigationBar';

const PlantSettingsScreen = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <View style={styles.container}>
      
      <View style={styles.topSection}>
      <Link href="/home/plant" asChild>
          <Pressable style={{ position: 'absolute', left: 20, top: 20}}
          ><Text style={{fontWeight: '500', fontSize: 16}}>Back</Text></Pressable>
        </Link>
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

      <NavBar/>
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
    backgroundColor: '#2ecc71', 
    
  },
  gap: {
    width: 10,
  },
});

export default PlantSettingsScreen;
