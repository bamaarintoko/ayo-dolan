import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AppRegistry,
    StyleSheet,
    View, Dimensions, Image, Platform, StatusBar, Text, FlatList, Animated
} from 'react-native';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow

} from "native-base";
import Head from '../../Components/Head'
import axios from 'axios'
import io from 'socket.io-client'
import Api from '../../utils/Api'
// import {url_} from '../../utils/Api'
import Icon from 'react-native-vector-icons/FontAwesome';
import {normalize, normalizeFont} from "../../utils/func";
import store from "react-native-simple-store";
import Collapsible from 'react-native-collapsible-header';
import {actGetPeople} from "./action";
import Placeholder from 'rn-placeholder';
import HomeLoading from "../../Components/HomeLoading";
import {LeftImage, RightImage} from "../../Components/List";

// let url = '192.168.100.38:3010';
// let url = 'http://192.168.43.147:3010';
let url = 'http://api.malaskoding.com:5000';
const {width, height} = require('Dimensions').get('window');

function mapStateToProps(state) {
    return {
        redGetUserId: state.redGetUserId,
        redGetDataPeople: state.redGetDataPeople,
        redAuthCredential: state.redAuthCredential
    };
}

const home = [
    {
        user_id: '1383',
        people_name: 'Jennifer J. Brown',
        people_photo: 'https://randomuser.me/api/portraits/women/80.jpg'
    },
    {
        user_id: '1903',
        people_name: 'Isabelle Chadwick',
        people_photo: 'https://randomuser.me/api/portraits/women/17.jpg'
    },
    {
        user_id: '1482',
        people_name: 'Elline Chadwick',
        people_photo: 'https://randomuser.me/api/portraits/women/16.jpg'
    },
    {
        user_id: '1582',
        key: '2',
        people_name: 'Abigail Booth',
        people_photo: 'https://randomuser.me/api/portraits/women/26.jpg'
    },
    {
        user_id: '1682',
        key: '3',
        people_name: 'Harvey Reynolds',
        people_photo: 'https://randomuser.me/api/portraits/men/66.jpg'
    },
    {
        user_id: '1782',
        key: '4',
        people_name: 'Alice Whittaker',
        people_photo: 'https://randomuser.me/api/portraits/women/79.jpg'
    }
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class HomePage extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
            return <Icon name="home" size={20} color={tintColor}/>;
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 2,
            isRefresh: false,
            initialRedGetDataPeople: true,

        }
        this.socket = io(url, {
            // const socket = io('http://192.168.43.72:3010', {
            transports: ['websocket']
        })
        this.socket.on('online_user', (data) => {
            console.log("online user", data)
        });
        this.onLoad = this.onLoad.bind(this)
    }


    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.redGetDataPeople)
        if (this.props.redGetDataPeople.status === prevState.initialRedGetDataPeople) {
            this.setState({
                data: this.props.redGetDataPeople.data
            })
            this.props.dispatch({
                type: 'GET_DATA_PEOPLE_REFRESH'
            })
        }
    }


    componentDidMount() {
        // console.log(this.props.redAuthCredential.data.user_id)
        this.socket.on('connect', () => {
            console.log("is connect")
            this.socket.emit('online', {myId: this.props.redAuthCredential.data.user_id, friendId: ['1', '2']})
        })
        this.socket.emit('online_user', {myId: this.props.redAuthCredential.data.user_id, friendId: ['1', '2']})
        this.socket.on('connect_error', (err) => {
            console.log("--->", err.message)
        })
        this.socket.on('disconnect', () => {
            console.log("Disconnected Socket!")
        })
        this.props.dispatch(actGetPeople())
    }

    onLoad() {
        if (this.state.data.length < 50) {
            this.setState((prevstate, props) => ({
                page: prevstate.page + 1
            }))
            Api.GET('?page=' + this.state.page + '&results=10&').then((response) => {
                // console.log("onLoad--->", response)
                var joined = this.state.data.concat(response.data.results);
                this.setState({
                    data: joined
                })
            }).catch(error => {
                console.log(error)
            })
        }
    }

    onRefresh() {
        Api.GET('?page=1&results=10&').then((response) => {
            //console.log("--->", response)
            this.setState({
                data: response.data.results,
                isRefresh: false
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <Container>
                <Head
                    leftIcon={'filter'}
                    leftPress={() => this.props.navigation.navigate('DrawerOpen')}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />

                {
                    this.state.data.length < 1
                        ?
                        <HomeLoading/>
                        :
                        <FlatList
                            style={{marginTop: 2}}
                            data={this.state.data}
                            refreshing={this.state.isRefresh}
                            onRefresh={() => {
                                this.onRefresh()
                            }}
                            renderItem={({item, index}) => (
                                <View>
                                    {
                                        index % 2 === 0
                                            ?
                                            <LeftImage img={item.picture.large}>
                                                <Text
                                                    style={{fontSize: normalizeFont(3 * .7)}}>{capitalizeFirstLetter(item.name.first)}</Text>
                                                <View>
                                                    <Text style={{
                                                        fontSize: normalizeFont(2 * .7),
                                                        color: '#000000',
                                                        marginTop: 5
                                                    }}>Siapa mau main
                                                        ke ...</Text>
                                                    <Text style={{
                                                        fontSize: normalizeFont(2 * .7),
                                                        color: '#000000',
                                                        marginTop: 5
                                                    }}>Kumpul di
                                                        ...</Text>

                                                </View>
                                                <View style={{flexDirection:'row',position: 'absolute', bottom: 0, marginBottom: 10}}>
                                                    <View style={{flex: 1}}>
                                                        <Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}
                                                                    name="calendar-o"/></Text>
                                                    </View>
                                                    <View style={{flex: 1}}>
                                                        <Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}
                                                                    name="clock-o"/></Text>
                                                    </View>
                                                    <View style={{flex: 1}}>
                                                        <Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}
                                                                    name="user"/></Text>
                                                    </View>
                                                </View>

                                            </LeftImage>
                                            :
                                            <RightImage img={item.picture.large}>
                                                <View style={{height: normalize(125 * .6), marginLeft: 7}}>
                                                    <Text style={{
                                                        fontSize: normalizeFont(3 * .7)
                                                    }}>{capitalizeFirstLetter(item.name.first)}</Text>
                                                    <Text style={{
                                                        fontSize: normalizeFont(2 * .7),
                                                        color: '#000000',
                                                        marginTop: 5
                                                    }}>Siapa mau main
                                                        ke ...</Text>
                                                    <Text style={{
                                                        fontSize: normalizeFont(2 * .7),
                                                        color: '#000000',
                                                        marginTop: 5
                                                    }}>Kumpul di
                                                        ...</Text>
                                                </View>
                                                <View style={{flexDirection:'row',position: 'absolute', bottom: 0, marginBottom: 10, marginLeft:7}}>
                                                    <View style={{flex: 1}}>
                                                        <Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}
                                                                    name="calendar-o"/></Text>
                                                    </View>
                                                    <View style={{flex: 1}}>
                                                        <Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}
                                                                    name="clock-o"/></Text>
                                                    </View>
                                                    <View style={{flex: 1}}>
                                                        <Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}
                                                                    name="user"/></Text>
                                                    </View>
                                                </View>
                                            </RightImage>
                                    }

                                    {/*<View style={{*/}
                                    {/*flex: 1,*/}
                                    {/*flexDirection: 'column',*/}
                                    {/*padding: 10,*/}
                                    {/*marginBottom: 2,*/}
                                    {/*backgroundColor: '#FFFFFF'*/}
                                    {/*}}>*/}
                                    {/*<View style={styles.box_parent}>*/}
                                    {/*{console.log(index%2)}*/}
                                    {/*<View style={styles.box_child_image}>*/}
                                    {/*<Image*/}
                                    {/*style={{width: normalize(150 * .6), height: normalize(150 * .6)}}*/}
                                    {/*source={{uri: item.picture.large}}*/}
                                    {/*/>*/}
                                    {/*</View>*/}
                                    {/*<View style={styles.box_child_info}>*/}
                                    {/*<View style={{height: normalize(125 * .6)}}>*/}
                                    {/*<Text style={{*/}
                                    {/*fontSize: normalizeFont(3 * .7),*/}
                                    {/*fontWeight: 'bold',*/}
                                    {/*color: '#000000'*/}
                                    {/*}}>{capitalizeFirstLetter(item.name.first) + " " + capitalizeFirstLetter(item.name.last)}</Text>*/}

                                    {/*<Text style={{*/}
                                    {/*fontSize: normalizeFont(2 * .7),*/}
                                    {/*color: '#000000',*/}
                                    {/*marginTop: 5*/}
                                    {/*}}>Siapa mau main*/}
                                    {/*ke ...</Text>*/}
                                    {/*<Text style={{*/}
                                    {/*fontSize: normalizeFont(2 * .7),*/}
                                    {/*color: '#000000',*/}
                                    {/*marginTop: 5*/}
                                    {/*}}>Kumpul di*/}
                                    {/*...</Text>*/}
                                    {/*</View>*/}
                                    {/*<View style={{flex: 1, flexDirection: 'row'}}>*/}
                                    {/*<View style={{flex: 1}}>*/}
                                    {/*<Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}*/}
                                    {/*name="calendar-o"/></Text>*/}
                                    {/*</View>*/}
                                    {/*<View style={{flex: 1}}>*/}
                                    {/*<Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}*/}
                                    {/*name="clock-o"/></Text>*/}
                                    {/*</View>*/}
                                    {/*<View style={{flex: 1}}>*/}
                                    {/*<Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}*/}
                                    {/*name="user"/></Text>*/}
                                    {/*</View>*/}
                                    {/*</View>*/}
                                    {/*</View>*/}
                                    {/*</View>*/}
                                    {/*</View>*/}
                                </View>
                            )}
                            keyExtractor={(item, index) => '' + index}
                            onEndReached={this.onLoad}
                            onEndReachedThreshold={1}
                        />
                }


            </Container>
        );
    }
}

const styles = StyleSheet.create({
    box_parent: {
        height: normalize(150 * .6),
        flex: 1, flexDirection: 'row',
    },
    box_child_image: {
        overflow: 'hidden',
        height: normalize(150 * .6),
        backgroundColor: '#FFFFFF',
        width: normalize(150 * .6),
        borderRadius: normalizeFont(3 * .7)
    },
    box_child_info: {
        marginLeft: 10,
        flex: 8,
        flexDirection: 'column'
    },
    box_child_footer: {
        height: 30, flex: 1, flexDirection: 'row', backgroundColor: '#E3F2FD', borderBottomLeftRadius: 5
    },
    footer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    text_footer: {
        paddingLeft: 5, fontSize: 12, color: '#000000'
    }
});
export default connect(
    mapStateToProps,
)(HomePage);