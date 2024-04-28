import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Welcome! Click the button below to scan a QR Code </Text>
      <Button 
        style={styles.button}
      title="Scan Now" onPress={() => navigation.navigate('Camera')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 20,
    backgroundColor: 'pink',
    padding: 10,
  },
});