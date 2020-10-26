import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import Constants from 'expo-constants';

import PhotoSelect from '../../components/UI/PhotoSelect';


function Separator() {
  return <View style={styles.separator} />;
}

const DriverRegistrationScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.welcome}>
          Welcome Aboard, BirdPerson!
        </Text>
        
      </View>
      <Separator />
      <View>
        
        <PhotoSelect/>
        <Button
          title="Upload PhotoId"
          color="#19FF19"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      <Separator />
      <View>
        
        
        <Button
          title="CONTINUE"
          color="#19FF19"
          //onPress={() => Alert.alert('Button with adjusted color pressed')}
          onPress={() => props.navigation.navigate('TOS')}
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

export default DriverRegistrationScreen;