import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>This is the home page</Text>
      <Link href="/" asChild style={{ marginTop: 30 }}>
        <Pressable style={{ backgroundColor: 'rgba(255,255,255,0.90)', borderRadius: 9 }}>
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
});
