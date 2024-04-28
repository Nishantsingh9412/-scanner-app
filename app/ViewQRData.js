import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const ViewQRData = ({ route }) => {
    const navigation = useNavigation();
    const { scannedData } = route.params;
    let dataObject;
    try {
        dataObject = JSON.parse(scannedData);
    } catch (error) {
        console.error('Error parsing scannedData:', error);
    }

    return (
        <View style={styles.container}>
            {/* <Text
                style={{
                    padding: 40,
                }}
            >
                {scannedData ?
                    scannedData :
                    'No data found. Please add item to the Database.'
                }
            </Text> */}
            
            <Text
                style={{
                    marginTop: 20,
                    padding: 40,
                    color: '#333', // Dark gray color
                    fontSize: 18, // Increase the font size
                    lineHeight: 24, // Increase the line height for better readability
                    backgroundColor: '#f9f9f9', // Light gray background color
                    borderRadius: 10, // Rounded corners
                    textAlign: 'left',
                }}
            >
                {dataObject ?
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Item Details:</Text>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 16 }}>Item: {dataObject.result.item_name}</Text>
                            <Text style={{ fontSize: 16 }}>Quantity: {dataObject.result.item_count}</Text>
                        </View>
                    </View>
                    :
                    <Text style={{ padding: 40, fontSize: 16, textAlign: 'center' }}>
                        'No data found. Please add item to the Database.'
                    </Text>
                }
            </Text>

        </View>
    )
}

export default ViewQRData

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
