import React from 'react'
import Users from './Users.js'
import Messages from './Messages.js'
import EnterChat from './EnterChat.js'

export default class Chat extends React.Component {

constructor(props) {
  super(props);
  //this.socket:null;
  this.state = {
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '',
    uid: localStorage.getItem('uid') ? localStorage.getItem('uid') : this.generate(),
    chat_ready: false,
    users: [],
    messages: [],
    message: ''
     }
   }

   render() {
     return (
         <div className= "chat">
         {this.state.chat_ready ? (
           <React.Fragment>
                    <Users users={this.state.users}/>
                    <Messages
                           sendMessage={this.sendMessage.bind(this)}
                           messages={this.state.messages}
                    />
          </React.Fragment>
        ) : (
          <EnterChat
                  setUsername={this.setUserName.bind(this)}
          />

        )}
        </div>
     )
   }
}
