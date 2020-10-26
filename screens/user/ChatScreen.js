import React from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, Text} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import HeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Fire from "../../components/UI/Fire";

class ChatScreen extends React.Component {
    state = {
        messages: []
    }
    /*
    get user() {
        return {
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }
    */
    componentDidMount() {
        Fire.get(message => 
            this.setState(previous => ({
                messages: GiftedChat.append(previous.messages, message)
            }))    
        );
    }

    componentWillUnmount() {
        Fire.off();
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;
        //const chat = <Text messages={this.state.messages} onSend={Fire.send} user={this.user} />;

        if (Platform.OS === "android") {
            return (
                <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={30} enabled>
                    {chat}
                </KeyboardAvoidingView>
            )
        }

        return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
    }
}


ChatScreen.navigationOptions = navData =>{
    return {
        headerTitle: 'Chat',
        headerLeft: (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
              onPress={() => {
                navData.navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
        headerRight: (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Add"
              iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              onPress={() => {
                navData.navigation.navigate('EditProduct');
              }}
            />
          </HeaderButtons>
        )
      };
};

export default ChatScreen;