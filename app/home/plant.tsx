import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions,Pressable } from 'react-native';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;
const [selectedButton, setSelectedButton] = useState(null);

const handleButtonPress = (buttonName) => {
  setSelectedButton(buttonName);
};


const PlantScreen = ({ navigation }) => { 
  const plantStatistics = [
    { title: 'Humidity', percentage: Math.floor(Math.random() * 100), color: '#7AA78E' },
    { title: 'Nutrients', percentage: Math.floor(Math.random() * 100), color: '#72BF7A' },
    { title: 'Water', percentage: Math.floor(Math.random() * 100), color: '#666666' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Link href="/home/start" asChild>
          <Pressable
            style={[styles.header] }
          ><Text>Back</Text></Pressable>
        </Link>
        <Text style={styles.headerTitle}>Plant #1</Text>
        <Link href="/home/settings" asChild>
          <Pressable
            style={[styles.header] }
          ><Text>Settings</Text></Pressable>
        </Link>

        {/* Plant Image and Growth Percentage */}
      <View style={styles.plantContainer}>
        <View style={styles.outerCircle}>
          <Image source={require('../../assets/images/plant1.png')} />
          <Text style={styles.growthPercentage}>Growth Percentage%</Text>
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
    backgroundColor: '#F6F6F6',
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
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'contain',
  },
  growthPercentage: {
    position: 'absolute',
    fontSize: 14,
    bottom: 30,
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
