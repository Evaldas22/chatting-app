import React, { Component } from 'react';
import './App.css';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import store from '../configureStore';
import _ from 'lodash';


export default class AppContainer extends Component {
  
  render() {
    const {contacts} = store.getState();

    return (
      <div className='App'>
        <Sidebar contacts={_.values(contacts)}/>
        <ChatWindow />
      </div>
    );
  }
}
