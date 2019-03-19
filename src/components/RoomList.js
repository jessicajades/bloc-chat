import React, { Component } from 'react';


class RoomList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }

  render() {
    return (
      <div className="roomList">
        <h3>Rooms:</h3>
        { this.state.rooms.map( room => <li>{room.name}</li>) }
      </div>
    )
  }
}




export default RoomList;
