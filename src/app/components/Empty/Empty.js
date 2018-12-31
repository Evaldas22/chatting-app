import React from 'react';
import './Empty.css'

const Empty = ({user}) => {
    const {name, profile_pic, summary} = user;
    const firstName = name.split(' ')[0];

    return (
        <div className='Empty'>
            <h1 className='Empty_name'>Welcome, {firstName}</h1>
            <img src={profile_pic} alt='user_profile_picture' className='Empty_image' />
            <p className='Empty_summary' >
                <b>Summary: </b>{summary}
            </p>
            <button className="Empty_btn">Start a conversation</button>
            <p className="Empty_info">
                Search for someone to start chatting with or go to Contacts to see who
                is available
            </p>    
        </div>
    )
}

export default Empty;