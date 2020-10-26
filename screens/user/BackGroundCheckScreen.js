import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import Constants from 'expo-constants';
function Separator() {
    return <View style={styles.separator} />;
  }
  
const ContractScreen = props => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.welcome}>
           BACKGROUND CHECK AUTHORIZATION
          </Text>
          
        </View>
        <Separator />
        <View>
          <Text style={styles.tos}>
           We're gonna need to do a BACKGROUNDCHECK just to make sure 
           you're not like a serial killer or anything ;)
          </Text>
          
        </View>
        <Separator />
        <View>
          
          <Button
            title="I HAVE READ AND AGREE"
            color="#19FF19"
            onPress={() => Alert.alert('You have agreed to TOS')}
          />
        </View>
        <Separator />
        <View>
          
          
          <Button
            title="CONTINUE"
            color="#19FF19"
            //onPress={() => Alert.alert('Button with adjusted color pressed')}
            
            onPress={() => props.navigation.navigate('Shop')}
            
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
    tos: {textAlign: 'center',
      marginVertical: 8,
      fontSize: 12}
  });






export default ContractScreen;