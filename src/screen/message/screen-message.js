import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, TouchableWithoutFeedback} from 'react-native'
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, List, Right, SwipeRow,
    Text
} from "native-base";
import {ListItem, Thumbnail} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from "../../Components/Head";
import {normalize, normalizeFont} from "../../utils/func";
import _ from 'lodash'
import io from "socket.io-client";
import {actionGet} from "../Action";
import {GET_MESSAGE, GET_MESSAGE_REFRESH} from "../../utils/Constants";


const home = [
    {
        user_id:'1383',
        people_name: 'Jennifer J. Brown',
        people_photo: 'https://randomuser.me/api/portraits/women/80.jpg'
    },
    {
        user_id:'1903',
        people_name: 'Isabelle Chadwick',
        people_photo: 'https://randomuser.me/api/portraits/women/17.jpg'
    },
    {
        user_id:'1482',
        people_name: 'Elline Chadwick',
        people_photo: 'https://randomuser.me/api/portraits/women/16.jpg'
    },
]

class ViewMessage extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
            return <Icon name="comments-o" size={20} color={tintColor}/>;
        }
    }

    constructor(props) {
        super(props);
        this.socket = io('http://192.168.242.2:3010', {
            transports: ['websocket']
        })
        this.state = {
            initialRedGetMessage : true,
            data : [],
            message : ""
        }
    }


    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.redGetMessage)
        if (this.props.redGetMessage.status === prevState.initialRedGetMessage){
            this.setState({
                data : this.props.redGetMessage.data
            })
            this.props.dispatch({
                type : GET_MESSAGE_REFRESH
            })
        }
    }

    componentDidMount() {
        this.props.dispatch(actionGet('back/message/get_message', GET_MESSAGE,{user_id:this.props.redAuthCredential.data.user_id}))
        // console.log(this.props.redGetUserId)
    }


    onBack(key,img,id,email) {
        // setTimeout(() => {
        //     this.props.navigation.navigate(key);
        // }, 300);
        this.props.navigation.navigate('DetailMessage',{name:key,image:img,id:id,email:email})
    }

    render() {
        console.log('---->',this.props.redGetUserId.data.toString())
        return (
            <Container>
                <Head

                    leftPress={() => this.props.navigation.navigate('DrawerOpen')}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />
                <Content style={{backgroundColor: '#FFFFFF'}}>
                    <List
                        dataArray={this.state.data}
                        //keyExtractor={(item, index) => '' + index}
                        renderRow={(item) => (
                            <List onPress={() => console.log('asu')}>
                                <TouchableWithoutFeedback onPress={_.debounce(() =>
                                    this.onBack(item.user_name,"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",item.user_id,item.user_email),300)
                                }>
                                    <ListItem avatar>
                                        <Left>
                                            <Thumbnail source={{uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}}/>
                                        </Left>
                                        <Body>
                                        <Text style={{fontSize:normalizeFont(3 * .7)}}>{item.user_name}</Text>
                                        <Text style={{fontSize:normalizeFont(3 * .6)}} note>Doing what you like will always keep you happy . .</Text>
                                        </Body>
                                        <Right>
                                            <Text style={{fontSize:normalizeFont(3 * .6)}} note>3:43 pm</Text>
                                        </Right>
                                    </ListItem>
                                </TouchableWithoutFeedback>
                            </List>
                        )}
                    />

                </Content>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        redGetUserId    :   state.redGetUserId,
        redGetMessage   :   state.redGetMessage,
        redAuthCredential   :   state.redAuthCredential,
    };
}
export default connect(
    mapStateToProps,
)(ViewMessage);
