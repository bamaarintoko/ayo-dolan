/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View, Dimensions, Image, Platform, StatusBar
} from 'react-native';
import { connect } from "react-redux";
import { ListView, TouchableWithoutFeedback } from 'react-native';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow,
    Text
} from "native-base";
import Head from '../../Components/Head'
import Icon from 'react-native-vector-icons/FontAwesome';
import HomePage from './home_page'
// import PTRView from 'react-native-pull-to-refresh';
import axios from 'axios'
// import FCM, { FCMEvent } from 'react-native-fcm'
import Api from "../../utils/Api";
import MyApp from './index'

class screen_home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            int: 0,
            info: [],
            letsTry: false,
            //--------------------------
            warehouse_id: 0,
            incoming: 0,
            outgoing: 0,
            w_cost_update_date: '',
            w_cost_per_day: 0,
            last_update: ''
        }

    }
    componentDidMount() {


    }
    componentDidUpdate(prevProps, prevState) {



    }

    render() {
        //console.log("--->", this.props.redAuth)
        return (
            <Container>
                <Head
                    leftPress={() => this.props.navigation.navigate('DrawerOpen')}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />

                <MyApp />

            </Container>
        );
    }
}



function mapStateToProps(state) {
    return {
        redAuth: state.redAuth,
        redUpdateWarehouseIn: state.redUpdateWarehouseIn,
        redUpdateWarehouseOut: state.redUpdateWarehouseOut
    };
}

export default connect(mapStateToProps)(screen_home)
