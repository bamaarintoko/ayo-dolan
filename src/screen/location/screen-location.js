import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow,
    Text
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
function mapStateToProps(state) {
    return {

    };
}

class ViewLocation extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
          return <Icon name="bell" size={20} color={tintColor} />;
        }
      }
    render() {
        return (
            <Content>
                
            </Content>
        );
    }
}

export default connect(
    mapStateToProps,
)(ViewLocation);