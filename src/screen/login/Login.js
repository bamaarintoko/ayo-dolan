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
        flexDirection:'column',
        backgroundColor: '#FFFFFF'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    separatorContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    separatorLine: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#9B9FA4'
    },
    separatorOr: {
        color: '#9B9FA4',
        marginHorizontal: 8
    },
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
            <Swiper style={styles.wrapper}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
                    </View>
                    <View style={{flex:1.5, paddingLeft:30, paddingRight:30}}>
                        <Item rounded>
                            <View style={{width:25}}>
                            <Icon style={{paddingLeft:10}} size={14} active name='envelope' />
                            </View>
                            <Input style={{height:40, fontSize:14}} placeholder='Email'/>
                        </Item>
                        <Item style={{marginTop:10}} rounded>
                            <View style={{width:25, alignItems:'center'}}>
                            <Icon style={{paddingLeft:10}} size={14} active name='lock' />
                            </View>
                            <Input style={{height:40, fontSize:14}} placeholder='Password'/>
                        </Item>
                        <Button style={{marginTop:10}} small block info>
                            <Text>Login</Text>
                        </Button>
                        <View style={styles.separatorContainer} animation={'zoomIn'} delay={700} duration={400}>
                            <View style={styles.separatorLine} />
                            <Text style={styles.separatorOr}>{'Or'}</Text>
                            <View style={styles.separatorLine} />
                        </View>
                        <Button style={{marginTop:5, backgroundColor:'#3b5998'}} small block info>
                            <Text>Facebook Login</Text>
                        </Button>
                        <Button style={{marginTop:10, backgroundColor:'#d34836'}} small block info>
                            <Text>Gmail Login</Text>
                        </Button>
                    </View>
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
