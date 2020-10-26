import React from 'react';
import {
  StackNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

//import Reg from '../screens/user/DriverRegistrationScreen';

import DriverRegistrationScreen from '../screens/user/DriverRegistrationScreen';
import ChatScreen from '../screens/user/ChatScreen';
import MapScreen from '../screens/user/MapScreen';
import BarcodeScreen from '../screens/user/BarcodeScreen';
import AuthScreen from '../screens/user/AuthScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
//import StartupScreen from '../screens/StartupScreen';
import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth';
//NEW
//import CameraScreen from '../components/UI/Camera';
import TermsOfServiceScreen from '../screens/user/TermsOfServiceScreen';
import ContractScreen from '../screens/user/ContractScreen';
import BackGroundCheckScreen from '../screens/user/BackGroundCheckScreen';
//NEW


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

 

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);



const ChatNavigator = createDrawerNavigator({Chat: ChatScreen},
  
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
);

const MapNavigator = createDrawerNavigator({Map: MapScreen}, 
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
    }
  );


  const BarcodeNavigator = createDrawerNavigator({Barcode: BarcodeScreen}, 
    {
      navigationOptions: {
        drawerIcon: drawerConfig => (
          <Ionicons
            name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
            size={23}
            color={drawerConfig.tintColor}
          />
        )
      },
      defaultNavigationOptions: defaultNavOptions
      }
    );




const ShopNavigator = createDrawerNavigator(
  {
     
    Orders: OrdersNavigator,
     
    Chat: ChatNavigator,
    //Photo: CameraScreen,
    Map: MapNavigator,
    Barcode: BarcodeNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary
    },
    contentComponent: props => {
      const dispatch = useDispatch();
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
            <DrawerItems {...props} />
            <Button
              title="Logout"
              color={Colors.primary}
              onPress={() => {
                dispatch(authActions.logout());
                // props.navigation.navigate('Auth');
              }}
            />
          </SafeAreaView>
        </View>
      );
    }
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);





const RegistrationNavigator = createStackNavigator(
  {
    Register: DriverRegistrationScreen,
    
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);



const TOSNavigator = createStackNavigator(
  {
    TOS: TermsOfServiceScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

//TO BE IMPLEMENTED SHORTLY


const ContractNavigator = createStackNavigator(
  {
    Contract: ContractScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

const BGCNavigator = createStackNavigator(
  {
    BGC: BackGroundCheckScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);
/*
const DDNavigator = createStackNavigator(
  {
    DD: DirectDepositScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);
*/

//THIS IS IMPORTANT CODE FOR THE APP
const MainNavigator = createSwitchNavigator({
  //Startup: StartupScreen,
  //Auth: AuthNavigator,
  
  Register:RegistrationNavigator,
  TOS: TOSNavigator,
  Contract: ContractNavigator,
  BGC: BGCNavigator,
  Shop: ShopNavigator
});

export default createAppContainer(MainNavigator);




//export default createAppContainer(ShopNavigator);