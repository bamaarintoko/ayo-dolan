import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from "react-native";
import {Container, Content} from "native-base";
import Head from "../../Components/Head";
import io from 'socket.io-client'
import {Bubble, GiftedChat} from 'react-native-gifted-chat'
import store from "react-native-simple-store";

// let room = "1903";

class ViewDetailMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: [],
            userId: null
        }
        this.socket = io('http://192.168.242.2:3010', {
            transports: ['websocket']
        })

        this.socket.on('message', (message) => {

            if (this.props.navigation.state.params.id === message.senderId.toString()){
                //console.log("con", message.senderId)
                //console.log("con",this.props.navigation.state.params.id)
                this.onSetMessage(message)

            }
        });
        this.renderBubble = this.renderBubble.bind(this)
        this.onSetMessage = this.onSetMessage.bind(this)
        this._storeMessages = this._storeMessages.bind(this)
        this.socket.on('message_',this.onSetMessage)
    }

    onSetMessage(data){
        // console.log(data.text)
        this._storeMessages(data.text)
    }
    _storeMessages(messages){
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }

    componentDidMount() {
        this.socket.emit('init', {
            senderId: this.props.redGetUserId.data,
            receiverId: this.props.navigation.state.params.id,
        });
        this.socket.emit('room', this.props.navigation.state.params.id);
    }

    renderBubble(props) {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#FFFFFF'
                    }
                }}
            />
        )
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))

        this.socket.emit('message', {
            text: messages,
            senderId: this.props.redGetUserId.data,
            receiverId: this.props.navigation.state.params.id,
        });
    }

    render() {
        const {params} = this.props.navigation.state
        let user = {_id: this.state.userId || -1};
        return (
            <Container>
                <Head
                    body={params.name}
                    leftIcon={'arrow-left'}
                    leftPress={() => this.props.dispatch({type: 'Navigation/BACK'})}
                    rightPress={() => this.props.navigation.navigate('DetailMessage')}
                />
                <GiftedChat
                    renderBubble={this.renderBubble}
                    messages={this.state.messages}
                    onSend={messages => this.onSend(messages)}
                    user={{
                        _id : this.props.redGetUserId.data
                    }}
                />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {redGetUserId: state.redGetUserId};
}

export default connect(
    mapStateToProps,
)(ViewDetailMessage);
