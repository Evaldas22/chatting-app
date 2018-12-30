import React from 'react';
import './User.css'

const User = ({user}) =>{

    const {profile_pic, name, summary} = user;

    return (
       <div className='User'>
            <img src={profile_pic} className='user_picture' alt='user_profile_picture'/>
            <div className='user-details'>
                <p className='user-name'>{name}</p>
                <p className='user-summary'>{summary}</p>
            </div>
       </div>
    )
}

export default User;