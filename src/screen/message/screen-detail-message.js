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
                console.log("con", message.senderId)
                console.log("con",this.props.navigation.state.params.id)
                this.onSetMessage(message)

            }
            // const newMessage = {
            //     createdAt: message.createdAt,
            //     text: message.text,
            //     userId: message.senderId,
            //     _id: message.msgId,
            // };
            /* sending message function */
        });
        this.renderBubble = this.renderBubble.bind(this)
        this.onSetMessage = this.onSetMessage.bind(this)
        this._storeMessages = this._storeMessages.bind(this)
        this.socket.on('message_',this.onSetMessage)
    }

    onSetMessage(data){
        console.log(data.text)
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
        console.log("--->", this.props.navigation.state.params.id)
        // console.log("--->", this.socket.id)
        // this.socket.on('connect', () => {
        //     this.socket.emit('online', this.props.redGetUserId.data)
        // })
        this.socket.emit('init', {
            senderId: this.props.redGetUserId.data,
            receiverId: this.props.navigation.state.params.id,
        });
        this.socket.emit('room', this.props.navigation.state.params.id);
        // this.socket.on('connect_error', (err) => {
        //     console.log("--->", err)
        // })
        // this.socket.on('disconnect', () => {
        //     console.log("Disconnected Socket!")
        // })
        this.setState({
            messages: [
                // {
                //     _id: 1,
                //     text: 'Jadi pergi gak?',
                //     createdAt: new Date(),
                //     user: {
                //         _id: this.props.redGetUserId.data,
                //         name: 'React Native',
                //         avatar: this.props.navigation.state.params.image,
                //     },
                // },
                // {
                //     _id: 2,
                //     text: 'Jadi pergi gak?',
                //     createdAt: new Date(),
                //     user: {
                //         _id: this.props.redGetUserId.data,
                //         name: 'React Native',
                //         avatar: this.props.navigation.state.params.image,
                //     },
                // },
                // {
                //     _id: 3,
                //     text: 'oke',
                //     createdAt: new Date(),
                //     user: {
                //         _id: this.props.redGetUserId.data,
                //         name: 'React Native',
                //         avatar: this.props.navigation.state.params.image,
                //     },
                // },
                // {
                //     _id: 4,
                //     text: 'oke',
                //     createdAt: new Date(),
                //     user: {
                //         _id: 1,
                //         name: 'React Native',
                //         avatar: this.props.navigation.state.params.image,
                //     },
                // },
                // {
                //     _id: 5,
                //     text: 'okeeeee',
                //     createdAt: new Date(),
                //     user: {
                //         _id: 1,
                //         name: 'React Native',
                //         avatar: this.props.navigation.state.params.image,
                //     },
                // },
            ],
        })
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
            //conversationId: conversation.id,
            text: messages,
            senderId: this.props.redGetUserId.data,
            receiverId: this.props.navigation.state.params.id,
            //createdAt: new Date(),
            //msgId: message[0]._id,
        });
        // this.socket.emit('message', messages) //YOUR EVENT TO SERVER
        //
        // // socket.on('EVENT YOU WANNA LISTEN', (r) => {
        // //
        // // })
        // //EVENT YOU WANNA LISTEN
        //
        // this.socket.on('connect_error', (err) => {
        //     console.log("--->", err)
        // })
        //
        // this.socket.on('disconnect', () => {
        //     console.log("Disconnected Socket!")
        // })
    }

    render() {
        const {params} = this.props.navigation.state
        let user = {_id: this.state.userId || -1};
        // console.log(this.state.messages)
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
