import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    AppRegistry,
    StyleSheet,
    View, Dimensions, Image, Platform, StatusBar, Text, FlatList
} from 'react-native';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow

} from "native-base";
import Head from '../../Components/Head'
import axios from 'axios'
import Api from '../../utils/Api'
import Icon from 'react-native-vector-icons/FontAwesome';
import {normalize, normalizeFont} from "../../utils/func";
const {width, height} = require('Dimensions').get('window');
function mapStateToProps(state) {
    return {};
}

const home = [
    {
        key: '0',
        people_name: 'Jennifer J. Brown',
        people_photo: 'https://randomuser.me/api/portraits/women/80.jpg'
    },
    {
        key: '1',
        people_name: 'Isabelle Chadwick',
        people_photo: 'https://randomuser.me/api/portraits/women/17.jpg'
    },
    {
        key: '2',
        people_name: 'Abigail Booth',
        people_photo: 'https://randomuser.me/api/portraits/women/26.jpg'
    },
    {
        key: '3',
        people_name: 'Harvey Reynolds',
        people_photo: 'https://randomuser.me/api/portraits/men/66.jpg'
    },
    {
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
            isRefresh: false
        }
        this.onLoad = this.onLoad.bind(this)
    }


    componentDidMount() {
        // console.log('asu')
        console.log("--->")
        Api.GET('?page=1&results=10&').then((response) => {
            console.log("--->", response)
            this.setState({
                data: response.data.results
            })
        }).catch(error => {
            console.log(error)
        })
    }

    onLoad() {
        console.log('halooo', this.state.data.length)
        if (this.state.data.length < 50) {
            this.setState((prevstate, props) => ({
                page: prevstate.page + 1
            }))
            Api.GET('?page=' + this.state.page + '&results=10&').then((response) => {
                console.log("onLoad--->", response)
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
            console.log("--->", response)
            this.setState({
                data: response.data.results,
                isRefresh: false
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        console.log("-->", this.state.data)
        return (
            <Container>
                <Head
                    leftIcon={'filter'}
                    leftPress={() => this.props.navigation.navigate('DrawerOpen')}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />
                <FlatList
                    style={{backgroundColor: '#E0E0E0'}}
                    data={this.state.data}
                    refreshing={this.state.isRefresh}
                    onRefresh={() => {
                        this.onRefresh()
                    }}
                    renderItem={({item}) => (
                        <View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#FFFFFF'
                            }}>

                                <View style={styles.box_parent}>
                                    <View style={styles.box_child_image}>
                                        <Image
                                            style={{width: normalize(135*.6), height: normalize(135*.6)}}
                                            source={{uri: item.picture.large}}
                                        />
                                    </View>
                                    <View style={styles.box_child_info}>
                                        <View style={{height:normalize(115*.6)}}>
                                            <Text style={{
                                                fontSize: normalizeFont(3 * .7),
                                                fontWeight: 'bold',
                                                color: '#000000'
                                            }}>{capitalizeFirstLetter(item.name.first) + " " + capitalizeFirstLetter(item.name.last)}</Text>

                                            <Text style={{fontSize: normalizeFont(2*.7), color: '#000000', marginTop: 5}}>Siapa mau main
                                                ke ...</Text>
                                            <Text style={{fontSize: normalizeFont(2*.7), color: '#000000', marginTop: 5}}>Kumpul di
                                                ...</Text>
                                        </View>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            <View style={{flex: 1}}>
                                                <Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}
                                                            name="calendar-o"/></Text>
                                            </View>
                                            <View style={{flex: 1}}>
                                                <Text><Icon color={'#000000'} size={normalizeFont(3 * .7)}
                                                            name="clock-o"/></Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{flex: 2, paddingLeft:2}}>
                                        <Text style={{color: '#000000', fontSize:normalizeFont(4 * .5)}}>10{' '}<Icon color={'#4FC3F7'} size={normalizeFont(4 * .7)}
                                                                                      name="user"/></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={(item, index) => '' + index}
                    onEndReached={this.onLoad}
                    onEndReachedThreshold={1}
                />
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    box_parent: {
        height: normalize(135*.6),
        flex: 1, flexDirection: 'row',
    },
    box_child_image: {
        overflow: 'hidden',
        height: normalize(135*.6), backgroundColor: '#FFFFFF', width: normalize(135*.6), borderRadius: normalizeFont(3 * .7)
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