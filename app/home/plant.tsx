import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions,Pressable } from 'react-native';
import { Link } from 'expo-router';
import NavBar from '../components/navigationBar';


const PlantScreen = ({ navigation }) => { 
  const plantStatistics = [
    { title: 'Humidity', percentage: Math.floor(Math.random() * 100), color: '#7AA78E' },
    { title: 'Nutrients', percentage: Math.floor(Math.random() * 100), color: '#72BF7A' },
    { title: 'Water', percentage: Math.floor(Math.random() * 100), color: '#666666' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <Link href="/home/plants" asChild>
          <Pressable><Text>Back</Text></Pressable>
        </Link>
        <Text style={styles.headerTitle}>Plant #1</Text>
        <Link href="/home/settings" asChild>
          <Pressable><Text>Settings</Text></Pressable>
        </Link>
        </View>
        {/* Plant Image and Growth Percentage */}
      <View style={styles.plantContainer}>
        <View style={styles.outerCircle}>
          <Image source={require('../../assets/images/plant1.png')} style={styles.plantImage}/>
          <Text style={styles.growthPercentage}>30%</Text>
        </View>
      </View>

      {/* Plant Statistics */}
      <View style={styles.statisticsContainer}>
        <Text style={styles.statisticsTitle}>Plant Statistics</Text>
        <FlatList
          data={plantStatistics}
          renderItem={({ item }) => (

                <View style={styles.statItem}>
                  <View style={[styles.bullet, { backgroundColor: item.color }]} />
                  <Text style={styles.statTitle}>{item.title}</Text>
                  <Text style={styles.statPercentage}>{item.percentage}%</Text>
                </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {/* Additional Information Box */}
      <TouchableOpacity style={styles.additionalInfoBox} onPress={() => console.log('Additional Info Pressed') }>
        <Text style={styles.additionalInfoText}> Try the AI chatbot !! </Text>
      </TouchableOpacity>
      <NavBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    justifyContent: 'space-between',
  },
  headerWrapper: {
    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 34,
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
    borderColor: '#0F4761',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },
  plantImage: {
    width: 196,
    height: 196,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  growthPercentage: {
    fontSize: 32,
    fontWeight: '500',
    bottom: 12,
    position: 'absolute'
  },
  statisticsContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  statisticsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    fontSize: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDA806',
    marginTop: 5
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  statTitle: {
    marginRight: 'auto', 
    fontSize: 18,
  },
  statPercentage: {
    marginLeft: 'auto', 
    fontSize: 18,
  },
  additionalInfoBox: {
    backgroundColor: '#72BF7A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    borderRadius: 20,
    width: 130
  },
  additionalInfoText: {
    fontSize: 16,
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

export default PlantScreen;
