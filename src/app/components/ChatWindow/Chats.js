import React from "react";
import './Chats.css';


class Chats extends React.Component {  
    constructor(props){
        super(props);

        this.chatsRef = React.createRef();
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }
    
    render(){
        const {messages} = this.props;
        return(
            <div className='Chats' ref={this.chatsRef} >
                {messages.map((message, i) => <Message key={i} message={message}/>)}
            </div>
        )
    }
}

const Message = ({message}) => {
    const {text, is_user_msg} = message;

    return (
        <span className={`message${is_user_msg ? '-this-user' : ''}`}>
            {text}
        </span>
    )
}


export default Chats;