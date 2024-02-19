import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const PlantScreen = ({ navigation }) => {
  // Dummy data for plant statistics
  const plantStatistics = [
    { title: 'Humidity', percentage: Math.floor(Math.random() * 100), color: '#7AA78E' },
    { title: 'Nutrients', percentage: Math.floor(Math.random() * 100), color: '#72BF7A' },
    { title: 'Water', percentage: Math.floor(Math.random() * 100), color: '#666666' },
  ];

  // Dummy data for plant images
  const plantImages = [
    { uri: 'https://www.rawpixel.com/image/12701460/png-plant-leaf-houseplant-generated-image-rawpixel' },
    { uri: 'https://www.rawpixel.com/image/12701460/png-plant-leaf-houseplant-generated-image-rawpixel' },
    { uri: 'https://www.rawpixel.com/image/12701460/png-plant-leaf-houseplant-generated-image-rawpixel' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Plants</Text>
        <View />
      </View>

      {/* Plant Images */}
      <View style={styles.plantImagesContainer}>
        {plantImages.map((plant, index) => (
          <View key={index} style={styles.outerCircle}>
            <TouchableOpacity style={styles.plantImageContainer}>
              <Image source={{ uri: plant.uri }} style={styles.plantImage} />
            </TouchableOpacity>
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

      {/* Bottom Menu Bar */}
      <View style={styles.bottomMenu}>
        {/* Icons for different screens */}
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <View style={[styles.circle, { backgroundColor: '#A9C5B7' }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PlantScreen')}>
          <View style={[styles.circle, { backgroundColor: '#7DC98B' }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <View style={[styles.circle, { backgroundColor: '#9C8410E5' }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AppStoreScreen')}>
          <View style={[styles.circle, { backgroundColor: '#9C8410E5' }]} />
        </TouchableOpacity>
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
    marginRight: 'auto', // Push the percentage to the right
    fontSize: 18,
  },
  statPercentage: {
    marginLeft: 'auto', // Align the percentage to the right
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
    alignItems: 'center',
    backgroundColor: '#8DA197',
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    width: screenWidth,
    marginTop: 20
    
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default PlantScreen;

