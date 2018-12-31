import React from 'react';
import Header from './Header';
import store from "../../configureStore";

const ChatWindow = ({activeUserId}) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];

    return (
        <div className='ChatWindow' >
            <Header user={activeUser}/>
        </div>
    )
}

export default ChatWindow;