import React, { Component } from 'react';
import './styles/App.css';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';


export default class AppContainer extends Component {
  render() {
    return (
      <div className='App'>
        <Sidebar />
        <ChatWindow />
      </div>
    );
  }
}
