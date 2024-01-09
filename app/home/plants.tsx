import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function PlantsPage() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/forest.jpg')}
        style={styles.backgroundImage}
      />
      <Text style={{ backgroundColor: 'rgba(0,0,0,0.95)', color:'rgba(255,255,255,0.95)',padding: 12, fontSize: 18, borderRadius: 6}}>This is the Plants page</Text>
      <Link href="/" asChild style={{ marginTop: 30 }}>
        <Pressable style={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 6 }}>
          <Text style={{ padding: 16, fontSize: 18, color: 'black' }}>Go to starting page!</Text>
        </Pressable>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
