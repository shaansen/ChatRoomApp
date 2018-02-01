import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from "./containers/Sidebar.js"
import { MessagesList } from "./containers/MessagesList.js"
import { AddMessage } from "./containers/AddMessage.js"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
