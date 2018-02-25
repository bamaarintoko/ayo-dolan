import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow,
    Text
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import Head from "../../Components/Head";
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
            <Container>
                <Head

                    leftPress={() => this.props.navigation.navigate('DrawerOpen')}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ViewLocation);