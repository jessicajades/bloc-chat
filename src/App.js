import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
        <h1 className="appName">Bloc Chat</h1>
        <RoomList firebase={firebase} />
      </div>
    );
  }
}

export default App;
