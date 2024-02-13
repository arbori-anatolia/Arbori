import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

const PlantScreen = () => {
  // Dummy data for plant statistics
  const plantStatistics = [
    { title: 'Humidity', percentage: Math.floor(Math.random() * 100), color: 'blue' },
    { title: 'Nutrients', percentage: Math.floor(Math.random() * 100), color: 'green' },
    { title: 'Water', percentage: Math.floor(Math.random() * 100), color: 'orange' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Plant #1</Text>
        <TouchableOpacity onPress={() => navigation.navigate('NextScreen')}>
          <Text>Next</Text>
        </TouchableOpacity>
      </View>

      {/* Plant Image and Growth Percentage */}
      <View style={styles.plantContainer}>
        <View style={styles.outerCircle}>
          <Image source={{uri: 'https://www.rawpixel.com/image/12701460/png-plant-leaf-houseplant-generated-image-rawpixel'}} style={styles.plantImage} />
        </View>
        <Text>Growth Percentage: XX%</Text>
      </View>

      {/* Plant Statistics */}
      <View style={styles.statisticsContainer}>
        <Text style={styles.statisticsTitle}>Plant Statistics</Text>
        <FlatList
          data={plantStatistics}
          renderItem={({ item }) => (
            <View style={styles.statItem}>
              <View style={[styles.bullet, { backgroundColor: item.color }]} />
              <Text style={styles.statTitle}>{item.title}:</Text>
              <Text>{item.percentage}%</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {/* Bottom Menu Bar */}
      <View style={styles.bottomMenu}>
        {/* Icons for different screens */}
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          {/* Icon for Profile */}
          <Image source={require('../../assets/images/profile_icon.jpg')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          {/* Icon for Home */}
          <Image source={require("../../assets/images/homepage_icon.jpg")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PlantScreen')}>
          {/* Icon for Plant */}
          <Image source={require("../../assets/images/plant_icon.png")} style={styles.icon} />\
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AppStoreScreen')}>
          {/* Icon for App Store */}
          <Image source={require("../../assets/images/store_icon.jpg")} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 24,
  },
  plantContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'contain',
  },
  statisticsContainer: {
    paddingHorizontal: 20,
  },
  statisticsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  statTitle: {
    marginRight: 10,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default PlantScreen;
