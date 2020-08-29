import React,{useEffect, useState} from 'react';
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'

const socket = io.connect('http://localhost:4000');

const Chat = () => {

    const [state, setState] = useState({message: '', name: ''});
    const [chat, setChat] = useState([]);
  
  
    const onTextChange = (e) => {
      setState({...state, [e.target.name]: e.target.value});
    }
  
  const onMessageSubmit = (e) => {
    e.preventDefault();
    const {name, message} = state;
    socket.emit('message', {name, message});
    setState({message: "" , name});
  }
  
    const renderChat = () =>{
      return chat.map(({name, message}, index)=>(
        <div key={index}>
          <h3>
            {name}: <span>{message}</span>
          </h3>
        </div>
      ))
    }
   
    
  useEffect(() => { 
    socket.on('message', ({name, message}) => {
      setChat([...chat, {name, message}]);
    })
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
      <div className="render-chat" style={{justifyContent: 'center', alignItems: 'center', display:"flex"}}>
        <div className="container" style={{border: "1px solid", width: "50%"}}>
        <h1>Chat Log</h1>
        {renderChat()}
        </div>
      </div>
    </div>
    )
}

export default Chat