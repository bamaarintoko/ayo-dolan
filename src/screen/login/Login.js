import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, AsyncStorage, Image, StatusBar, TouchableWithoutFeedback} from "react-native";
import {Button, Input, Item, Text} from "native-base";
// import { Field, reduxForm } from "redux-form";
import Icon from 'react-native-vector-icons/FontAwesome';
// import Modal from 'react-native-modal';
// import Spinner from 'react-native-spinkit';
import md5 from 'crypto-js/md5';
import Swiper from 'react-native-swiper'
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import {normalize, normalizeFont} from "../../utils/func";
import {Alert, Keyboard, TouchableHighlight} from "react-native";
import {actLogin} from "./action";
import * as Animatable from 'react-native-animatable';

let styles = {
    wrapper: {},
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
        flexDirection: 'column',
        backgroundColor: '#2196F3'
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
        borderColor: '#FFFFFF'
    },
    separatorOr: {
        color: '#FFFFFF',
        marginHorizontal: 8,
        fontSize: normalizeFont(4 * .5)
    },
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            flexLogo: 1,
            hideButtonFb: false
        }
        // this.login = this.login.bind(this)
    }



    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        this.setState({
            flexLogo: 0,
            hideButtonFb: true
        })
        // alert('Keyboard Shown');
    }

    _keyboardDidHide = () => {
        this.setState({
            flexLogo: 1,
            hideButtonFb: false
        })
        // alert('Keyboard Hidden');
    }

    onChange = (key) => {
        return (e) => {
            let state = {};
            state[key] = e
            this.setState(state);
            // console.log(e)
        }
    }
    onLogin = () => {
        let params = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.dispatch(actLogin(params))
        // console.log(params)
    }
    login = () => {
        FBLoginManager.loginWithPermissions(["email", "user_friends"], (error, data) => {
            if (!error) {

                // return dispatch=>{
                this.props.dispatch({
                    type: 'LOGIN_SUCCESS',
                    status_login: true,
                    data: data.profile,
                    message: "login facebook sukses"
                })
                this.props.dispatch({
                    type: 'HOME'
                })
                // }
            } else {
                console.log("Error: ", data);
            }
        })
    }

    render() {
        return (

            <Swiper style={styles.wrapper} loop={false}>

                <View style={styles.slide1}>
                    <StatusBar
                        backgroundColor="#4FC3F7"
                        barStyle="light-content"
                    />
                    <Text>Haloo</Text>
                </View>
                <View style={styles.slide2}>
                    <Text>Halloo</Text>
                </View>
                <View style={styles.slide3}>
                    <View style={{
                        flex: this.state.flexLogo,
                        backgroundColor: '#2196F3',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Image
                            resizeMode={'contain'}
                            style={{width: normalize(130 * .9)}}
                            source={require('../../utils/assetss/header.png')}
                        />
                    </View>
                    <View style={{flex: 2, paddingLeft: 30, paddingRight: 30}}>
                        <Item rounded style={{backgroundColor:'#FFFFFF'}}>
                            <View style={{width: 25}}>
                                <Icon style={{paddingLeft: 10}} size={normalizeFont(4 * .5)} active
                                      name='envelope'/>
                            </View>
                            <Input onChangeText={this.onChange('username')}
                                   style={{height: 40, fontSize: normalizeFont(4 * .5)}} placeholder='Email'/>
                        </Item>
                        <Item style={{marginTop: 10,backgroundColor:'#FFFFFF'}} rounded>
                            <View style={{width: 25, alignItems: 'center'}}>
                                <Icon style={{paddingLeft: 10}} size={normalizeFont(4 * .5)} active name='lock'/>
                            </View>
                            <Input onChangeText={this.onChange('password')}
                                   style={{height: 40, fontSize: normalizeFont(4 * .5)}} placeholder='Password'/>
                        </Item>
                        <View style={{flexDirection: 'row', alignItems: 'center', height: 40}}>
                            <View style={{flex: 1}}>
                                <TouchableWithoutFeedback style={{paddingTop: 10, paddingBottom: 10}}
                                                    onPress={() => console.log("asu")}>
                                    <Text style={{color:'#FFFFFF',fontSize: normalizeFont(4 * .5)}}>Create Account</Text>
                                </TouchableWithoutFeedback>

                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <TouchableWithoutFeedback style={{paddingTop: 10, paddingBottom: 10}}
                                                    onPress={() => console.log("asu")}>
                                    <Text style={{color:'#FFFFFF',fontSize: normalizeFont(4 * .5)}}>Forgot Password?</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <Button onPress={this.onLogin} small block info>
                            <Text>Login</Text>
                        </Button>
                        {
                            !this.state.hideButtonFb
                            &&
                            <View>
                                <View style={styles.separatorContainer}>
                                    <View style={styles.separatorLine}/>
                                    <Text style={styles.separatorOr}>Or Login With</Text>
                                    <View style={styles.separatorLine}/>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex: 1}}>
                                        <Button onPress={this.login} style={{marginTop: 2, backgroundColor: '#3b5998'}}
                                                small
                                                block info>
                                            <Text><Icon style={{paddingLeft: 10}} size={normalizeFont(4 * .5)} active
                                                        name='facebook'/></Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        }

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
export default connect(mapStateToProps)(Login)
