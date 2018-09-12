import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar'
import Chat from './components/chat/Chat'

class App extends React.Component {
render() {
  return(
    <React.Fragment>
       <Navbar/>
       <Chat/>
       </React.Fragment>
  );
  }
}

ReactDOM.render(<App/>, document.getElementsByClassName('root'));
