import React from 'react';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow,
    Text
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image} from "react-native";

const Head = ({leftPress, bodyPress, rightPress, leftIcon, body}) => {
    console.log("--->", typeof body)
    return (
        <Header androidStatusBarColor="#4FC3F7"
                style={{backgroundColor: '#4FC3F7', borderBottomWidth: 1, borderBottomColor: '#BEBEBE'}}>
            <Left style={{flex: 1}}>
                <Button full transparent onPress={leftPress}>
                    <Icon size={20} name={leftIcon} color="#29363d"/>
                </Button>
            </Left>
            <Body style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>

            <Text>{body}</Text>
            {
                typeof body === 'undefined'
                &&
                <Image
                    resizeMode={'contain'}
                    style={{width:100}}
                    source={require('../utils/assetss/header.png')}
                />
            }

            </Body>
            <Right style={{flex: 1}}>
            </Right>
        </Header>
    );
};

export default Head;