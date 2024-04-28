import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import { StyleSheet, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanData, setScanData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // const handleBarCodeScanned = ({ type, data }) => {
  //     setScanData(data);
  //     console.log(`Data: ${data}`);
  //     console.log(`Type: ${type}`);

  //     // Assuming you have navigation available in your component
  //     navigation.navigate('ViewQRData', { scannedData: data });

  // };

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);

    let dataGet;
    // Assuming your local server is running on localhost:3000
    try {
      // const response = await fetch(`http://localhost:8000/qr-items/search-qr-items/${data}`);
      const response = await fetch(`http://192.168.1.100:8000/qr-items/inc-qr-items/${data}`, {
        method: 'PATCH',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      dataGet = JSON.stringify(result);
      console.log(dataGet);

    } catch (error) {
      console.error('An error occurred while fetching the data.', error);
    }
    // Assuming you have navigation available in your component
    navigation.navigate('ViewQRData', { scannedData: dataGet });
  };


  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
      />
      {/* {scanData &&
        <Button title={'Tap to Scan Again'} onPress={() => setScanData(undefined)} />
      } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});