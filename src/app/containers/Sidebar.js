import React from 'react';
import './styles/Sidebar.css';
import User from './User';
import {contacts} from '../static-data';

const Sidebar = (props) => {
    return (
        <aside className="Sidebar">Sidebar</aside>
        {
            contacts.map(contact => <User />)
        }
    )
}

export default Sidebar; 