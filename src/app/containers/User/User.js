import React from 'react';
import './User.css';

import { setActiveUserId } from '../../duck/actions/index';
import store from '../../configureStore';

const User = ({user}) => {

    function handleUserClick({user_id}){
        store.dispatch(setActiveUserId(user_id));
    }

    const {profile_pic, name, summary} = user;

    return (
        <div className='User' onClick={handleUserClick.bind(null, user)} >
            <img src={profile_pic} className='user_picture' alt='user_profile_picture'/>
            <div className='user-details'>
                <p className='user-name'>{name}</p>
                <p className='user-summary'>{summary}</p>
            </div>
        </div>
    )     
}

export default User;