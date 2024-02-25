import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable} from 'react-native';
import { Link } from 'expo-router';

const ProfilePage = ({ navigation }) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.settingsButton}>
          <Text>Settings</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Image source={require('../../assets/images/profileicon.png')} style={styles.profileImage} />
        <View>
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.subscription}>Subscription Type</Text>
        </View>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.greenBoxTitle}>My Plants</Text>
      </View>
      <View style={styles.myPlants}>
        <View style={styles.plantItem}>
          <Image source={require('../../assets/images/plant1.png')} style={styles.plantImage} />
          <View style={styles.plantInfo}>
            <Text style={styles.plantName}>Plant 1</Text>
            <Text style={styles.plantTime}>1 day ago</Text>
            <Text style={styles.plantType}>Type of plant</Text>
            <Text style={styles.removeOption}>Remove</Text>
          </View>
        </View>
        <View style={styles.plantItem}>
          <Image source={require('../../assets/images/plant2.png')} style={styles.plantImage}/>
          <View style={styles.plantInfo}>
            <Text style={styles.plantName}>Plant 2</Text>
            <Text style={styles.plantTime}>2 days ago</Text>
            <Text style={styles.plantType}>Type of plant</Text>
            <Text style={styles.removeOption}>Remove</Text>
          </View>
        </View>
        <View style={styles.plantItem}>
          <Image source={require('../../assets/images/plant3.png')} style={styles.plantImage} />
          <View style={styles.plantInfo}>
            <Text style={styles.plantName}>Plant 3</Text>
            <Text style={styles.plantTime}>3 days ago</Text>
            <Text style={styles.plantType}>Type of plant</Text>
            <Text style={styles.removeOption}>Remove</Text>
          </View>
        </View>
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
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#7AA78E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 70
  },
  settingsButton: {
    position: 'absolute',
    left: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginRight: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subscription: {
    fontSize: 16,
    color: 'grey',
  },
  greenBox: {
    backgroundColor: '#7AA78E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 150,
    alignSelf: 'center',
    borderRadius: 100,

  },
  greenBoxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center'
  },
  myPlants: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  plantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  plantImage: {
    width: 10,
    height: 10,
    borderRadius: 30,
    marginRight: 10,
  },
  plantInfo: {
    flex: 1,
    alignItems: 'flex-start'
  },
  plantName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight:100
    
  },
  plantTime: {
    fontSize: 14,
    color: 'grey',
    paddingLeft: 190
  },
    plantType: {
    fontSize: 14,
    color: 'grey',
    paddingLeft: 180
  },
  removeOption: {
    color: 'red',
    fontSize: 14,
    paddingLeft: 210
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

export default ProfilePage;
