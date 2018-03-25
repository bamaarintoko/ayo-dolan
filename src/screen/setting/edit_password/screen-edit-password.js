import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from "native-base";
import Head from "../../../Components/Head";


class ViewEditPassword extends Component {
    render() {
        return (
            <Container>
                <Head
                    body={"Edit Password"}
                    leftIcon={'arrow-left'}
                    leftPress={() => this.props.navigation.goBack()}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(ViewEditPassword);
