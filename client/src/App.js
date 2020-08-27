import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'
import axios from 'axios';
import './App.css';

const scoket = io.connect('http://localhost:4000');

//comment
function App() {

  const [state, setState] = useState({message: '', name: ''});
  const [chat, setChat] = useState([]);


  const renderChat = () =>{
    return chat.map({name, message}, index=>(
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ))
  }


  useEffect(() => {
    axios.get(`/example`).then((res)=>console.log(res));
  }, []);

  return (
    <div className="App">
      <form onSubmit={onMessageSubmit}>
        <h1>Messenger</h1>
        <div className="name-field">
          <TextField name="name" onChange={e => onTextChange(e)} value = {state.name} label = "Name"/>
        </div>
        <div>
          <TextField name="message" onChange={e => onTextChange(e)} value = {state.message} label = "Message"/>
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default App;
