import React from 'react';
import Chat from './Chat.js';


export default class ChatBox extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      message= '';
    }
  }
  onChage(e){
    this.state({
      message : e.target.value;
    })
  }
  onKeyUp(e) {
    if(e.key === 'Enter') {
      if(this.state.message.length) {
        this.props.sendMessage({
          type: 'message',
          text: this.state.message
        });
        this.setState({message: ''});
      } else {
        alert('Enter message');
      }
    }
  }
}
