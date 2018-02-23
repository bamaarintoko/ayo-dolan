import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow,
    Text, Thumbnail
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View} from "react-native";
function mapStateToProps(state) {
    return {

    };
}

class ViewProfile extends Component {
    static navigationOptions = {
        
        header: ({ state }) => {
            console.log(state)
        },
        tabBarIcon: ({tintColor}) => {
            // console.log("--->",this.props)
          return <Icon name="user-circle-o" size={20} color={tintColor} />;
        }
      }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                    <View style={{flex:2, backgroundColor: '#03A9F4', alignItems:'center', justifyContent:'center'}} >
                        <Thumbnail large source={{uri: 'https://scontent.fsub5-1.fna.fbcdn.net/v/t1.0-9/17953001_1185980358197953_2390820174044708724_n.jpg?oh=63a0761867d5c4e05044cadb3dce089b&oe=5B137EB4'}} />
                    </View>
                    <View style={{height:60, backgroundColor: '#FFFFFF'}}>
                        <View style={{flex:1, flexDirection:'row', padding:10}}>
                            <View style={{flex:1, borderRightWidth:1, borderRightColor:'#E0E0E0', alignItems:'center'}}>
                                <Text style={styles.font_middle}>Total Dolan</Text>
                                <Text style={styles.font_middle}>0</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                <Text style={styles.font_middle}>Dolan Terjauh</Text>
                                <Text style={styles.font_middle}>0 Km</Text>
                            </View>
                            <View style={{flex:1, borderLeftWidth:1, borderLeftColor:'#E0E0E0',alignItems:'center'}}>
                                <Text style={styles.font_middle}>Terakhir Dolan</Text>
                                <Text style={styles.font_middle}>-</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: '#F0F0F0',padding:10, borderTopWidth:1,borderBottomWidth:1,
                        borderTopColor:'#E0E0E0',borderBottomColor:'#E0E0E0'
                    }} >
                        <Text>Informasi</Text>
                    </View>
                    <View style={{flex:3, backgroundColor: '#FFFFFF'}} />

            </View>
        );
    }
}
const styles = StyleSheet.create({
    font_middle: {
        fontSize: 14,
    },
});
export default connect(
    mapStateToProps,
)(ViewProfile);