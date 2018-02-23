import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from "react-native";
import {Container, Content} from "native-base";
import Head from "../../Components/Head";
import {Bubble, GiftedChat} from 'react-native-gifted-chat'
class ViewDetailMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message :[]
        }
        this.renderBubble = this.renderBubble.bind(this)
    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Jadi pergi gak?',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: this.props.navigation.state.params.image,
                    },
                },
            ],
        })
    }
    renderBubble (props) {
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
    }
    render() {
        const { params } = this.props.navigation.state
            console.log(this.props.navigation.state.params.image)
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
                            _id: 1,
                        }}
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
)(ViewDetailMessage);
