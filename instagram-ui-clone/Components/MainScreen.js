import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Icon} from 'native-base';
import {createBottomTabNavigator} from 'react-navigation';

import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

class MainScreen extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <AppTabNavigator/>
        );
    }
}

export default MainScreen;

const AppTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeTab
    },
    Search: {
        screen: SearchTab
    },
    AddMedia: {
        screen: AddMediaTab
    },
    Likes: {
        screen: LikesTab
    },
    Profile: {
        screen: ProfileTab
    }
},
{
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        style: {
            ...Platform.select({
                android:{
                    backgroundColor: 'white'
                }
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIncoe: true,
    }
})

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
