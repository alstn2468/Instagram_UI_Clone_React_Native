import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// Add AppStackNavigator Module From react-navigation lib
import {createStackNavigator} from 'react-navigation';
// Add MainScreen
import MainScreen from './Components/MainScreen';

export default class App extends React.Component {
    render() {
        return (
            <AppStackNavigator/>
        );
    }
}

// Add StackNavigator to App.js
const AppStackNavigator = createStackNavigator({
    Main: {
        screen: MainScreen
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
