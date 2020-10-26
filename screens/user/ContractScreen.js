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
           CONTRACT
          </Text>
          
        </View>
        <Separator />
        <View>
          <Text style={styles.tos}>
           IN LIEU OF CONTRACT 1
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
            onPress={() => props.navigation.navigate('BGC')}
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