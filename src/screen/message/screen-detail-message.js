import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from "react-native";
import {Container, Content} from "native-base";
import Head from "../../Components/Head";
import io from 'socket.io-client'
import {Bubble, GiftedChat} from 'react-native-gifted-chat'
import store from "react-native-simple-store";
// import {url_} from "../../utils/Api";
// let url = 'http://192.168.43.147:3010';
let url = 'http://api.malaskoding.com:3010';
// let room = "1903";

class ViewDetailMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: [],
            userId: null
        }
        this.socket = io(url, {
            transports: ['websocket']
        })

        this.socket.on('message', (message) => {
            // console.log(this.props.navigation.state.params.id)
            console.log(message.senderId)
            if (this.props.navigation.state.params.id === message.senderId){
                // console.log("con", message)
                this.onSetMessage(message)

            }
        });
        this.renderBubble = this.renderBubble.bind(this)
        this.onSetMessage = this.onSetMessage.bind(this)
        this._storeMessages = this._storeMessages.bind(this)
        // this.socket.on('message_',this.onSetMessage)
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
        this.socket.on('connect', () => {
            console.log("is connect")
            this.socket.emit('init', {
                senderId: this.props.redAuthCredential.data.user_id,
                receiverId: this.props.navigation.state.params.id,
            });
            // this.socket.emit('online')
        })

        // this.socket.emit('room', this.props.navigation.state.params.id);
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
            senderId: this.props.redAuthCredential.data.user_id,
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
                        _id : this.props.redAuthCredential.data.user_id
                    }}
                />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        redGetUserId: state.redGetUserId,
        redAuthCredential: state.redAuthCredential,
    };
}

export default connect(
    mapStateToProps,
)(ViewDetailMessage);
