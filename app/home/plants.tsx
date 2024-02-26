
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Link } from 'expo-router';
import NavBar from '../components/navigationBar';
const screenWidth = Dimensions.get('window').width;

const StartingScreen = ({ navigation }) => {
  // Dummy data for plant statistics
  const plantStatistics = [
    { title: 'Humidity', percentage: Math.floor(Math.random() * 100), color: '#7AA78E' },
    { title: 'Nutrients', percentage: Math.floor(Math.random() * 100), color: '#72BF7A' },
    { title: 'Water', percentage: Math.floor(Math.random() * 100), color: '#666666' },
  ];

  // Dummy data for plant images
  const plantImages = [
    { source: require('../../assets/images/plant1.png') },
    { source: require('../../assets/images/plant2.png') },
    { source: require('../../assets/images/plant3.png') },
  ];

  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName);
  };


  return (
    <View style={styles.container}>
      <View style={styles.plantImagesContainer}>
        {plantImages.map((plant, index) => (
          <View key={index} style={styles.outerCircle}>
            <Link href="/home/plant" asChild>
              <Pressable style={styles.plantImageContainer} >
                 <Image source={require('../../assets/images/plant3.png') } style={styles.plantImage} />
              </Pressable>
            </Link>            
          </View>
        ))}
      </View>

      {/* Add Plant Button */}
      <TouchableOpacity style={styles.addPlant}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

      {/* Plant Statistics */}
      <View style={styles.statisticsContainer}>
        <Text style={styles.statisticsTitle}>Overview of Plants</Text>
        <FlatList
          data={plantStatistics}
          renderItem={({ item }) => (
            <View style={styles.statItem}>
              <View style={[styles.bullet, { backgroundColor: item.color }]} />
              <Text style={styles.statTitle}>{item.title}</Text>
              <Text style={[styles.statPercentage, item.percentage < 10 ? { color: 'red' } : item.percentage < 30 ? { color: 'orange' } : null]}>{item.percentage}%</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {/* Additional Information Box */}
      <TouchableOpacity style={styles.additionalInfoBox} onPress={() => console.log('Additional Info Pressed')}>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 30,
  },
  headerTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginleft: 20,
    fontWeight: 'bold'
  },
  plantImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  outerCircle: {
    width: screenWidth / 4,
    height: screenWidth / 4,
    borderRadius: screenWidth / 8,
    borderWidth: 2,
    borderColor: 'black',
    overflow: 'hidden',
  },
  plantImageContainer: {
    width: '100%',
    height: '100%',
  },
  plantImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addPlant: {
    width: screenWidth / 4,
    height: screenWidth / 4,
    borderRadius: screenWidth / 8,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 15
  },
  plus: {
    fontSize: 50,
    color: '#fff',
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

export default StartingScreen;

