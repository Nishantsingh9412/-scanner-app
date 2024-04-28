// import { StatusBar } from 'expo-status-bar';
// import { Camera } from 'expo-camera';
// import { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(false);
//   const [scanData, setScanData] = useState();

//   useEffect(() => {
//     (
//       async () => {
//         const { status } = await Camera.requestCameraPermissionsAsync();
//         setHasPermission(status === 'granted');
//       })()
//   }, [])

//   if (!hasPermission) {
//     return (
//       <View style={styles.container}>
//         <Text> Please Grant Camera Permission to app </Text>
//       </View>
//     )
//   }

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanData(data);
//     console.log(`Data: ${data}`);
//     console.log(`Type: ${type}`);
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         style={StyleSheet.absoluteFillObject}
//         onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
//         // barCodeScannerSettings={{
//         //   barCodeTypes: [Camera.Constants.BarCodeType.qr],
//         // }}
//       />
//       {scanData && <Button title={'Tap to Scan Again'} onPress={() => setScanData(undefined)} />}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// App.js
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/WelcomeScreen';
import CameraScreen from './app/CameraScreen';
import ViewQRData from './app/ViewQRData';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="ViewQRData" component={ViewQRData} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}