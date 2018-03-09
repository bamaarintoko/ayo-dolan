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
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    modalContent: {
        //backgroundColor: 'white',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    fullWidthButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});


function mapStateToProps(state) {
    return {};
}

// FormLogin = connect(mapStateToProps)(Login)
// export default reduxForm({
//     form: 'FormLogin'
// })(FormLogin);
export default connect()(Login)
