
/*
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function BarcodeScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

*/






import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import Constants from 'expo-constants';

import PhotoSelect from '../../components/UI/PhotoSelect';


function Separator() {
  return <View style={styles.separator} />;
}

const BarcodeScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.welcome}>
          Barcode Scanner 
        </Text>
        
      </View>
      <Separator />
      <View>
        
        <PhotoSelect/>
        
      </View>
      <Separator />
      <View>
        
        
        <Button
          title="CONTINUE"
          color="#19FF19"
          onPress={() => props.navigation.navigate('Orders')}
        />
      </View>
      <Separator />
      <View>
         
      </View>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  welcome: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 25
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default BarcodeScreen;
