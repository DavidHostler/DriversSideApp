import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,  Dimensions } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import Driver from '../../components/UI/Driver';

import { Destination } from '../../components/UI/Destination';

import { CurrentLocation } from '../../components/UI/CurrentLocation';


function Separator() {
  return <View style={styles.separator} />;
}

export default class MapScreen extends React.Component {
    constructor(props){
      super(props);
    this.state={
      region:{
        //CN TOWER COORDINATES
        latitude:43.642567,
        longitude:-79.387054,
        latitudeDelta: 0.1,//0.935,
        longitudeDelta: 0.1
        //0.935
        //0.0415
        
        }
      }
      this._getLocationAsync();
    }


    _getLocationAsync = async() =>{
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted')
        console.log('Permission Denied');

        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        let region = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.051,
          longitudeDelta: 0.051

        }
        this.setState({})
    }


//Lets us centre the map as needed
    centerMap(){
      const {
      latitude, longitude,latitudeDelta, longitudeDelta
    } = this.state.region;
    this.map.animateToRegion({
      latitude, longitude,latitudeDelta, longitudeDelta
    })
  }



    render() {
      return (
        <View style={styles.container}>
           <Destination/>
           <CurrentLocation cb={() => { this.centerMap() }}/>
           

           


          <MapView 
          //This lets us center the map via MapView
          ref={(map)=>{this.map=map}}
          initialRegion={this.state.region}
          showsUserLocation={true}
          showsCompass={true}
          rotateEnabled={false}
          style={{flex:1, zIndex: 0}}
          //
          >
            
            <Driver
           driver ={{uid: 'null', 
           location:{
           latitude:43.642567,
           longitude:-79.387054,
           }
          }}
           />





        </MapView> 
        </View>
      );
    }
  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



