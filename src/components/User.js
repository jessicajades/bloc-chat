import React, { Component } from 'react';


class User extends Component {

  componentDidMount(){
    this.props.firebase.auth().onAuthStateChanged( user => {
    this.props.setUser(user);
    });
  }

  signIn(e){
    e.preventDefault();
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider );
  }

  signOut(e){
    e.preventDefault();
    this.props.firebase.auth().signOut();
  }

  render(){
    return (
      <div id="buttons">
        <button id="signIn" onClick={(e) => this.signIn(e)}>Sign In</button>
        <button id="signOut" onClick={(e) => this.signOut(e)}>Sign Out</button>
        <h4>Current User: {this.props.user ? this.props.user.displayName : 'guest'}</h4>
      </div>
    )
  }
}








export default User;
