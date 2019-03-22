import React, { Component } from 'react';
import '../App.css';


class RoomList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      newRoomName: ''
    };
    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  handleChange(e) {
    this.setState({ newRoomName: e.target.value });
  }

  createRoom(e){
    e.preventDefault();
    this.roomsRef.push({
      name: this.state.newRoomName
    });
    document.getElementById('roomInput').value = '';
  }

  deleteRoom(room) {
    const deleteKey = room.key;
    this.roomsRef.child(deleteKey).remove();
    this.setState({ rooms: this.state.rooms.filter(room => room.key !== deleteKey)});
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
        { this.state.rooms.map( (room) =>
          <li key={room.key} onClick={() => this.props.handleRoomClick(room)} className="room-list">
            {room.name}
            <button id="delete" onClick={() => this.deleteRoom(room)}>
              <span className="ion-md-trash"></span>
            </button>
          </li>
        )}<br />
        <form className="newRoom" onSubmit={(e) => this.createRoom(e)}>
          <input type="text" id="roomInput" placeholder="Enter Room Name" onChange={(e) => this.handleChange(e)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}




export default RoomList;
