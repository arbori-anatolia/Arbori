import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const PlantScreen = ({ navigation }) => { // Add navigation as a prop
  // Dummy data for plant statistics
  const plantStatistics = [
    { title: 'Humidity', percentage: Math.floor(Math.random() * 100), color: '#7AA78E' },
    { title: 'Nutrients', percentage: Math.floor(Math.random() * 100), color: '#72BF7A' },
    { title: 'Water', percentage: Math.floor(Math.random() * 100), color: '#666666' },
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
          <Image source={require('../../assets/images/plant.jpg')} style={styles.plantImage} />
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
      <View style={styles.additionalInfoBox}>
        <Text style={styles.additionalInfoText}> Try the AI chatbot !! </Text>
      </View>

      {/* Bottom Menu Bar */}
      <View style={styles.bottomMenu}>
        {/* Icons for different screens */}
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          {/* Circle for Home */}
          <View style={[styles.circle, { backgroundColor: '#A9C5B7' }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PlantScreen')}>
          {/* Circle for Plant */}
          <View style={[styles.circle, { backgroundColor: '#7DC98B' }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          {/* Circle for Profile */}
          <View style={[styles.circle, { backgroundColor: '#9C8410E5' }]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AppStoreScreen')}>
          {/* Circle for App Store */}
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
