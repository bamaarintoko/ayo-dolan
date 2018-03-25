import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container} from "native-base";

class ViewEditProfile extends Component {
    render() {
        return (
            <Container>
                
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(ViewEditProfile);
