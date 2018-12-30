import React, { Component } from 'react';
import './App.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';
import store from '../../configureStore';
import _ from 'lodash';


export default class AppContainer extends Component {
  
  render() {
    const {contacts, activeUserId, user} = store.getState();
    console.log(store.getState())
    return (
      <div className='App'>
        <Sidebar contacts={_.values(contacts)}/>
        <Main user={user} activeUserId={activeUserId}/>
      </div>
    );
  }
}
