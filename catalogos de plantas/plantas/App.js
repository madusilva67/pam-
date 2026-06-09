import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.fundo}>
    <View style={styles.fundo}>
      <Text>Catalogo de plantas</Text>
      
    </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#81b65e',
  },
});
