import React from 'react';
import store from "../../configureStore";
import Header from './Header';
import Chats from './Chats';
import MessageInput from './MessageInput';
import './ChatWindow.css';

const ChatWindow = ({activeUserId}) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const messages = state.messages[activeUserId];
    const typing = state.typing;

    return (
        <div className='ChatWindow' >
            <Header user={activeUser}/>
            <Chats messages={messages}/>
            <MessageInput inputValue={typing}/>
        </div>
    )
}

export default ChatWindow;