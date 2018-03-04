import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from "react-native";
import {Container, Content} from "native-base";
import Head from "../../Components/Head";
import io from 'socket.io-client'
import {Bubble, GiftedChat} from 'react-native-gifted-chat'
import store from "react-native-simple-store";

let room = "abc123";

class ViewDetailMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: []
        }
        this.socket = io('http://192.168.242.2:3010', {
            // const socket = io('http://192.168.43.72:3010', {
            transports: ['websocket']
        })
        this.socket.on('tes', (d) => {
            console.log("halooo",d)
            //this.socket.emit('online', this.props.redGetUserId.data)
        })
        this.renderBubble = this.renderBubble.bind(this)
    }

    componentDidMount() {
        console.log("--->", this.props.redGetUserId.data)
        this.socket.on('connect', () => {
            //console.log("socket connected",this.socket)
            this.socket.emit('online', this.props.redGetUserId.data)
            this.socket.emit('room', room);
        })
        this.socket.on('connect_error', (err) => {
            console.log("--->", err)
        })
        this.socket.on('message_', function(data) {
            console.log('Incoming message:', data);
        });
        this.socket.on('disconnect', () => {
            console.log("Disconnected Socket!")
        })

        this.socket.on('reply'+this.props.redGetUserId.data, (d) => {
            console.log("--->",d)
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, d),
            }))
            //this.socket.emit('online', this.props.redGetUserId.data)
        })
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
        this.socket.emit('message', messages) //YOUR EVENT TO SERVER

        // socket.on('EVENT YOU WANNA LISTEN', (r) => {
        //
        // })
        //EVENT YOU WANNA LISTEN

        this.socket.on('connect_error', (err) => {
            console.log("--->", err)
        })

        this.socket.on('disconnect', () => {
            console.log("Disconnected Socket!")
        })
    }

    render() {
        const {params} = this.props.navigation.state
        //console.log(this.state.messages)
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
                        _id: 1903,
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
