import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, TouchableHighlight} from "react-native";
import Head from "../../Components/Head";
import {Container, Content, Text} from "native-base";
import {normalizeFont} from "../../utils/func";
import Icon from 'react-native-vector-icons/FontAwesome';

class ViewSetting extends Component {
    constructor(props, context) {
        super(props, context);

    }

    onLogOut = () => {
        this.props.dispatch({type: 'LOG_OUT'})
        this.props.navigation.navigate('Splash')
    }

    render() {
        return (
            <Container style={{backgroundColor: '#FFFFFF'}}>
                <Head
                    body={"Setting"}
                    leftIcon={'arrow-left'}
                    leftPress={() => this.props.navigation.goBack()}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />
                <Content>
                    <View style={{height: 40, padding: 10, justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>Account</Text>
                    </View>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('ViewEditProfile')}>
                    <View style={styles.icon_list}>
                        <View style={{width: 30}}><Icon name="user" size={20} color={'#757575'}/></View>
                        <Text>Edit Profil</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>this.props.navigation.navigate('ViewEditPassword')}>
                        <View style={styles.icon_list}>
                            <View style={{width: 30}}><Icon name="lock" size={20} color={'#757575'}/></View><Text>Edit
                            Password</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine}/>
                    </View>
                    <TouchableHighlight onPress={this.onLogOut} underlayColor={'#EEEEEE'}>
                        <View style={styles.icon_list}>
                            <View style={{width: 30}}><Icon name="sign-out" size={20} color={'#757575'}/></View><Text>Log
                            Out</Text>
                        </View>
                    </TouchableHighlight>
                </Content>
            </Container>
        );
    }
}

let styles = {
    icon_list: {
        height: 50, padding: 15, alignItems: 'center', flex: 1, flexDirection: 'row'
    },
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
        marginVertical: 5
    },
    separatorLine: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#E0E0E0'
    },
    separatorOr: {
        color: '#9B9FA4',
        marginHorizontal: 8,
        fontSize: normalizeFont(4 * .5)
    },
};

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(ViewSetting);
