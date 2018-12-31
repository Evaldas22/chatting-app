import React from "react";
import './MessageInput.css';
import store from "../../configureStore";
import { setTypingValue, sendMessage } from "../../duck/actions";


const MessageInput = ({inputValue}) => {  

    const handleChange = (e) => {
        store.dispatch(setTypingValue(e.target.value));
    };

    const state = store.getState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const {typing, activeUserId} = state;
        store.dispatch(sendMessage(typing, activeUserId))
    }

    return(
        <form className="Message" onSubmit={handleSubmit}>
            <input
                className="Message-input"
                onChange={handleChange}
                value={inputValue}
                placeholder="Write you message here"
            />
        </form>
    )
}


export default MessageInput;