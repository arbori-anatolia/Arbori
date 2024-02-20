import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import NavBar from '../components/navigationBar';

const ProfilePage = ({ navigation }) => {
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
      <NavBar/>
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
    width: 80,
    height: 80,
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
    width: 60,
    height: 60,
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
});

export default ProfilePage;
