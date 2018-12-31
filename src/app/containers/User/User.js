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
            <img src={profile_pic} className='User_picture' alt='User_profile_picture'/>
            <div className='User-details'>
                <p className='User-name'>{name}</p>
                <p className='User-summary'>{summary}</p>
            </div>
        </div>
    )     
}

export default User;