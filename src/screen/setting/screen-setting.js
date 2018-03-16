import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from "react-native";
import Head from "../../Components/Head";

class ViewSetting extends Component {
    render() {
        return (
            <View>
                <Head
                    body={"Setting"}
                    leftIcon={'arrow-left'}
                    leftPress={() => this.props.navigation.goBack()}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(ViewSetting);
