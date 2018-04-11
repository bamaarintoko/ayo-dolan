import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native-animatable';
import {Container} from 'native-base'
import Head from '../../Components/Head'
function mapStateToProps(state) {
    return {

    };
}

class ViewRegister extends Component {
    render() {
        return (
            <Container>
                <Head
                    leftIcon={'arrow-left'}
                    body={'Create Account'}
                    leftPress={() => this.props.navigation.goBack()}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />
                </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ViewRegister);