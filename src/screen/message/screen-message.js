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
    return {};
}

const home = [
    {
        people_name: 'Jennifer J. Brown',
        people_photo: 'https://randomuser.me/api/portraits/women/80.jpg'
    },
    {
        people_name: 'Isabelle Chadwick',
        people_photo: 'https://randomuser.me/api/portraits/women/17.jpg'
    },
    {
        people_name: 'Abigail Booth',
        people_photo: 'https://randomuser.me/api/portraits/women/26.jpg'
    },
    {
        people_name: 'Harvey Reynolds',
        people_photo: 'https://randomuser.me/api/portraits/men/66.jpg'
    },
    {
        people_name: 'Alice Whittaker',
        people_photo: 'https://randomuser.me/api/portraits/women/79.jpg'
    }
]

class ViewMessage extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
            return <Icon name="comments-o" size={20} color={tintColor}/>;
        }
    }

    onBack(key,img) {
        // setTimeout(() => {
        //     this.props.navigation.navigate(key);
        // }, 300);
        this.props.navigation.navigate('DetailMessage',{name:key,image:img})
    }

    render() {
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
                            <List onPress={() => console.log('asu')}>
                                <TouchableWithoutFeedback onPress={_.debounce(() =>
                                    this.onBack(item.people_name,item.people_photo),300)
                                }>
                                    <ListItem avatar>
                                        <Left>
                                            <Thumbnail source={{uri: item.people_photo}}/>
                                        </Left>
                                        <Body>
                                        <Text style={{fontSize:normalizeFont(3 * .7)}}>{item.people_name}</Text>
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
