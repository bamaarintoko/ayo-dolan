import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, AsyncStorage, Image, StatusBar} from "react-native";
import {Button, Input, Item, Text} from "native-base";
// import { Field, reduxForm } from "redux-form";
import {actLogin} from './action'
import Icon from 'react-native-vector-icons/FontAwesome';
// import Modal from 'react-native-modal';
// import Spinner from 'react-native-spinkit';
import md5 from 'crypto-js/md5';
import Swiper from 'react-native-swiper'
let styles = {
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        // console.log("RNRestart.Restart();", isLoading)
        return (
            <Swiper style={styles.wrapper} showsButtons>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        );
    }
}



function mapStateToProps(state) {
    return {};
}

// FormLogin = connect(mapStateToProps)(Login)
// export default reduxForm({
//     form: 'FormLogin'
// })(FormLogin);
export default connect()(Login)
