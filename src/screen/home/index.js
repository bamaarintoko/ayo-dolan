import { TabNavigator } from "react-navigation";
import HomePage from './home_page'
import ViewLocation from '../location/screen-location'
import ViewMessage from '../message/screen-message'
import ViewProfile from '../profile/screen-profile'
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyApp = TabNavigator({
    Homee: {
        screen: HomePage,
    },
    Location : {
        screen :ViewLocation
    },
    Message : {
        screen : ViewMessage
    },
    Profile : {
        screen : ViewProfile
    }
}, {
    // navigationOptions: ({ navigation }) => ({
    //     tabBarIcon : ({focused, tintColor}) => {
    //         const { routeName } = navigation.state;
    //         console.log(routeName)
    //         // let color = 'orange'
    //         // //console.log(focused)
    //         // if (routeName==='Home'){
    //         //     color = 'grey'
    //         // } 
    //         return <Icon name="home" size={20} color={tintColor} />;
    //     }
    // }),
        tabBarPosition: 'bottom',
        animationEnabled: true,        
        tabBarOptions: {
            showIcon: true,
            showLabel:false,
            activeTintColor: '#03A9F4',
            inactiveTintColor: 'gray',
            labelStyle: {
                color: '#424242'
            },
            style: {
                backgroundColor: 'white',
            },
        },
    })


export default (MyApp);