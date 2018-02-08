import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from "./containers/Sidebar.js"
import { MessageList } from "./containers/MessageList.js"
import { AddMessage } from "./containers/AddMessage.js"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessageList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
