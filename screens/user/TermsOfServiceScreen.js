import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Platform } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
    return <View style={styles.separator} />;
  }
  
const TermsOfServiceScreen = props => {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.welcome}>
           Terms of Service
          </Text>
          
        </View>
        <Separator />
        <View>
          <Text style={styles.tos}>
           Quickbuy ( "The company " ) is not responsible for lost or stolen goods.
           By clicking I agree, I am assuring the company that I have a valid driver's licence
           and vehicle no more than 10 years old and in working condition as specified by the
           laws of my province/state and municipality. I hereby agree that as a contractor, 
           I can be terminated if deemed necessary by the company and that I cannot claim 
           wrongful dismissal if this situation unfortunately arises.
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
            onPress={() => props.navigation.navigate('Contract')}
  
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
  
  export default TermsOfServiceScreen;