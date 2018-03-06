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
function mapStateToProps(state) {
    return {redGetUserId: state.redGetUserId};
}

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

    onBack(key,img,id) {
        // setTimeout(() => {
        //     this.props.navigation.navigate(key);
        // }, 300);
        this.props.navigation.navigate('DetailMessage',{name:key,image:img,id:id})
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
                        dataArray={home}
                        //keyExtractor={(item, index) => '' + index}
                        renderRow={(item) => (
                            this.props.redGetUserId.data.toString() !== item.user_id
                            &&
                            <List onPress={() => console.log('asu')}>
                                <TouchableWithoutFeedback onPress={_.debounce(() =>
                                    this.onBack(item.people_name,item.people_photo,item.user_id),300)
                                }>
                                    <ListItem avatar>
                                        <Left>
                                            <Thumbnail source={{uri: item.people_photo}}/>
                                        </Left>
                                        <Body>
                                        <Text style={{fontSize:normalizeFont(3 * .7)}}>{item.people_name+", "+item.user_id}</Text>
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

export default connect(
    mapStateToProps,
)(ViewMessage);
