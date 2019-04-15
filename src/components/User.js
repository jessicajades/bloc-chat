import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false
    };
  }

  handleSignIn() {
    if (this.state.signedIn) {
      this.props.firebase.auth().signOut();
      this.setState({ signedIn: false });
    } else {
      const provider = new this.props.firebase.auth.GoogleAuthProvider();
      this.props.firebase.auth().signInWithPopup(provider);
      this.setState({ signedIn: true });
    }
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged(user => {
      this.props.setUser(user);
    });
  }

  //   signIn(e){
  //     e.preventDefault();
  //     const provider = new this.props.firebase.auth.GoogleAuthProvider();
  //     this.props.firebase.auth().signInWithPopup( provider );
  //   }

  //   signOut(e){
  //     e.preventDefault();
  //     this.props.firebase.auth().signOut();
  //   }

  render() {
    return (
      <div id="buttons">
        {/* <button id="signIn" onClick={(e) => this.signIn(e)}>Sign In</button>
        <button id="signOut" onClick={(e) => this.signOut(e)}>Sign Out</button> */}
        <h4 id="displayName">
          Current User:{" "}
          {this.props.user ? this.props.user.displayName : "guest"}
        </h4>
        <button id="signInBtn" onClick={() => this.handleSignIn()}>
          {this.state.signedIn ? "Sign Out" : "Sign In"}
        </button>
      </div>
    );
  }
}

export default User;
