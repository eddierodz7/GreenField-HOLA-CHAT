import React from 'react';
import Chat from './Chat.js';


export default class ChatBox extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      message= '';
    }
  }
}
