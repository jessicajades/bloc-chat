import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDgfT_M9CXTdmVQvVbm0wByX2qnkXMA41k",
    authDomain: "bloc-chat-6cc0e.firebaseapp.com",
    databaseURL: "https://bloc-chat-6cc0e.firebaseio.com",
    projectId: "bloc-chat-6cc0e",
    storageBucket: "bloc-chat-6cc0e.appspot.com",
    messagingSenderId: "1022040609173"
  };
  firebase.initializeApp(config);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeRoom: '',
      user: ''
    }
  }

  handleRoomClick(room) {
    this.setState({ activeRoom: room});
  }

  setUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div className="App">
        <h1 className="appName">Bloc Chat</h1>
        <User
          firebase={firebase}
          setUser={(user) => this.setUser(user)}
          user={this.state.user}
        />
        <RoomList
          firebase={firebase}
          handleRoomClick={(room) => this.handleRoomClick(room)}
          activeRoom={this.state.activeRoom}
        />
        <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
        />
      </div>
    );
  }
}

export default App;
