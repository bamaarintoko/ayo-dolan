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
            page : 2,
            isRefresh:false
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
            this.setState((prevstate,props)=>({
                page:prevstate.page+1
            }))
            Api.GET('?page='+this.state.page+'&results=10&').then((response) => {
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
    onRefresh(){
        Api.GET('?page=1&results=10&').then((response) => {
            console.log("--->", response)
            this.setState({
                data: response.data.results,
                isRefresh:false
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
                    style={{backgroundColor:'#FFFFFF'}}
                    data={this.state.data}
                    refreshing={this.state.isRefresh}
                    onRefresh={()=>{this.onRefresh()}}
                    renderItem={({item}) => (
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            padding: 5,
                            marginTop: 5,
                            marginLeft: 5,
                            marginRight: 5,
                            backgroundColor: '#FFFFFF'
                        }}>
                            <View style={styles.box_parent}>
                                <View style={styles.box_child_image}>
                                    <Image
                                        style={{width: 100, height: 100}}
                                        source={{uri: item.picture.large}}
                                    />
                                </View>
                                <View style={styles.box_child_info}>
                                    <Text style={{
                                        fontSize: 12,
                                        color: '#000000'
                                    }}>{capitalizeFirstLetter(item.name.first) + " " + capitalizeFirstLetter(item.name.last)}</Text>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Dari </Text>
                                    <Text style={{fontSize: 12, color: '#000000'}}>Ke</Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row'}}>
                                    <View style={{flex: 1, alignItems: 'center'}}>

                                    </View>
                                    <View style={{flex: 1, alignItems: 'center', padding: 5}}>
                                        <Text><Icon size={20} name="star-o" color="#FFEB3B"/></Text>
                                        <Text>1k</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.box_child_footer}>
                                <View style={styles.footer}>
                                    <Text style={styles.text_footer}><Icon size={17} name="user-o"
                                                                           color="#000000"/>{' '}0 dari 10</Text>
                                </View>
                                <View style={styles.footer}>
                                    <Text style={styles.text_footer}><Icon size={17} name="calendar"
                                                                           color="#000000"/>{' '}13 Maret
                                        2018</Text>
                                </View>
                                <View style={styles.footer}>
                                    <Text style={styles.text_footer}><Icon size={17} name="clock-o"
                                                                           color="#000000"/>{' '}12:00</Text>
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
        height: 100,
        flex: 1, flexDirection: 'row',
    },
    box_child_image: {
        overflow: 'hidden',
        height: 100, backgroundColor: '#FFFFFF', width: 100, borderTopLeftRadius: 5
    },
    box_child_info: {
        marginLeft: 10,
        flex: 3
    },
    box_child_footer: {
        height: 30, flex: 1, flexDirection: 'row', backgroundColor: '#E3F2FD', borderBottomLeftRadius: 5
    },
    footer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    text_footer: {
        paddingLeft: 5, fontSize: 12, color:'#000000'
    }
});
export default connect(
    mapStateToProps,
)(HomePage);