import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Text>This is the starting page</Text>
      <Link href="home" asChild style={{ marginTop: 30 }}>
        <Pressable style={{ backgroundColor: 'rgba(255,255,255,0.90)', borderRadius: 9 }}>
            <Text style={{ padding: 16, fontSize: 18, color: 'black' }}>Go to home!</Text>
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
