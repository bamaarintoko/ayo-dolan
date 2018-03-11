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
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import {normalize, normalizeFont} from "../../utils/func";
import {Alert} from "react-native";
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
        marginHorizontal: 8,
        fontSize:normalizeFont(4 * .5)
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
        var _this = this;
        // console.log("RNRestart.Restart();", isLoading)
        return (
            <Swiper style={styles.wrapper} loop={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <View style={{flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            resizeMode={'contain'}
                            style={{width: normalize(130 * .9)}}
                            source={require('../../utils/assetss/header.png')}
                        />
                    </View>
                    <View style={{flex: 1.5, paddingLeft: 30, paddingRight: 30}}>
                        <Item rounded>
                            <View style={{width: 25}}>
                                <Icon style={{paddingLeft: 10}} size={normalizeFont(4 * .5)} active name='envelope'/>
                            </View>
                            <Input style={{height: 40, fontSize: normalizeFont(4 * .5)}} placeholder='Email'/>
                        </Item>
                        <Item style={{marginTop: 10}} rounded>
                            <View style={{width: 25, alignItems: 'center'}}>
                                <Icon style={{paddingLeft: 10}} size={normalizeFont(4 * .5)} active name='lock'/>
                            </View>
                            <Input style={{height: 40, fontSize: normalizeFont(4 * .5)}} placeholder='Password'/>
                        </Item>
                        <View style={{flex: 0.7, flexDirection: 'row', alignItems: 'center'}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontSize: normalizeFont(4 * .5)}}>Create Account</Text>
                            </View>
                            <View style={{flex: 1, alignItems:'flex-end'}}>
                                <Text style={{fontSize: normalizeFont(4 * .5)}}>Forgot Password?</Text>
                            </View>
                        </View>
                        <Button small block info>
                            <Text>Login</Text>
                        </Button>
                        <View style={styles.separatorContainer} animation={'zoomIn'} delay={700} duration={400}>
                            <View style={styles.separatorLine}/>
                            <Text style={styles.separatorOr}>Or Login With</Text>
                            <View style={styles.separatorLine}/>
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <FBLogin style={{ marginBottom: 10, }}
                                         ref={(fbLogin) => { this.fbLogin = fbLogin }}
                                         permissions={["email","user_friends"]}
                                         loginBehavior={FBLoginManager.LoginBehaviors.Native}
                                         onLogin={function(data){
                                             console.log("Logged in!");
                                             console.log(data);
                                             _this.setState({ user : data.credentials });
                                         }}
                                         onLogout={function(){
                                             console.log("Logged out.");
                                             _this.setState({ user : null });
                                         }}
                                         onLoginFound={function(data){
                                             console.log("Existing login found.");
                                             console.log(data);
                                             _this.setState({ user : data.credentials });
                                         }}
                                         onLoginNotFound={function(){
                                             console.log("No user logged in.");
                                             _this.setState({ user : null });
                                         }}
                                         onError={function(data){
                                             console.log("ERROR");
                                             console.log(data);
                                         }}
                                         onCancel={function(){
                                             console.log("User cancelled.");
                                         }}
                                         onPermissionsMissing={function(data){
                                             console.log("Check permissions!");
                                             console.log(data);
                                         }}
                                />
                                {/*<Button style={{marginTop: 2, backgroundColor: '#3b5998'}} small block info>*/}
                                    {/*<Text><Icon style={{paddingLeft: 10}} size={normalizeFont(4 * .5)} active*/}
                                                {/*name='facebook'/></Text>*/}
                                {/*</Button>*/}
                            </View>
                            <View style={{flex: 1}}>
                                <Button style={{marginTop: 2, backgroundColor: '#d34836'}} small block info>
                                    <Text><Icon style={{paddingLeft: 10}} size={normalizeFont(4 * .5)} active
                                                name='google'/></Text>
                                </Button>
                            </View>
                        </View>
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
