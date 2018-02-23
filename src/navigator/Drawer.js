import React, {Component} from 'react';
import {connect} from 'react-redux';
import store from "react-native-simple-store";
import {StyleSheet, TouchableHighlight, TouchableWithoutFeedback, View} from "react-native";
import {Container, Header, Content, Footer, FooterTab, Button, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
// import RNRestart from 'react-native-restart';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5
    },
    logo: {
        backgroundColor: '#FFFFFF',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        backgroundColor: '#29363d'
    },
    textColor: {
        color: '#FFFFFF',
        fontSize: 15
    },

    icn: {
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 15
    },
    txt: {
        justifyContent: 'center',
        paddingLeft: 10,
        flex: 10
    },
    vw: {
        height: 50,
        flexDirection: 'row',
        flex: 1
    }
});

class Drawer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            warehouse_code: '',
            warehouse_name: '',
            letsTry: true
        }
        this.onLogOut = this.onLogOut.bind(this)
    }

    onBack(key) {
        // setTimeout(() => {
        //     this.props.navigation.navigate(key);
        // }, 300);
        this.props.navigation.navigate('DrawerClose')
    }

    onLogOut() {
        // store.delete('AUTH')
        // this.props.navigation.dispatch({type: 'LOG_OUT_SUCCESS'})
        // RNRestart.Restart()
        // //this.props.dispatch({ type: 'LOGIN_ERROR_REFRESH' })
        this.props.navigation.navigate('DrawerClose')

    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {


    }

    render() {
        return (
            <View style={styles.container}>
                <Content>
                    <View>
                        <Text>Lokasi</Text>
                    </View>
                    <View>
                        <Text>Pengguna</Text>
                    </View>
                </Content>
                <Footer>
                    <FooterTab style={{backgroundColor:'#FFFFFF'}}>
                        <Button bordered warning>
                            <Text>setingan awal</Text>
                        </Button>
                        <Button bordered info>
                            <Text>Terapkan</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        redAuth: state.redAuth
    };
}

export default connect(
    mapStateToProps,
)(Drawer);
