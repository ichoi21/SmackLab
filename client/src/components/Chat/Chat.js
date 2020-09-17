import React, { useEffect, useState } from "react";
import io from "socket.io-client";

import { Grid, TextField, TextareaAutosize } from "@material-ui/core";
import "./Chat.css";

const socket = io.connect("http://localhost:4000");
const currentUser = JSON.parse(localStorage.getItem("user"));
// const currentUserName = currentUser.first_name;

const Chat = () => {
  const [state, setState] = useState({
    message: "",
    name: "Smack Talker", //currentUserName - not working when its logout.
  });
  const [chat, setChat] = useState([]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit("message", { name, message });
    setState({ message: "", name });
  };

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <p>
          {name}: <span>{message}</span>
        </p>
      </div>
    ));
  };

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  return (
    <div className="container Chat shadow">
      <Grid container className="Chat padding" spacing={2}>
        <form className="margin" onSubmit={onMessageSubmit}>
          <Grid item md={10} className="title">
            <h2>MESSENGER</h2>
            <p className="font9 weight500">
              Smack talk w/ trainers and fellow workout users!
            </p>
          </Grid>
          <Grid item md={2} className="name-field">
            <TextField
              name="name"
              onChange={(e) => onTextChange(e)}
              value={state.name}
            />
          </Grid>
          <Grid item md={6}>
            <TextareaAutosize
              rowsMin={3}
              name="message"
              onChange={(e) => onTextChange(e)}
              value={state.message}
              placeholder="Type a Message"
            />
          </Grid>
          <Grid item md={2}>
            <button color="primary"> Send</button>
          </Grid>
        </form>
        <Grid
          item
          md={6}
          className="render-chat container"
          style={{
            justifyContent: "left",
            alignItems: "left",
            display: "flex",
            fontSize: "12px",
          }}
        >
          <div
            className="ChatRoom"
            style={{
              border: "10px solid crimson",
              width: "100%",
              color: "black",
            }}
          >
            <h3>Chatting is: LIVE...</h3>
            {renderChat()}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Chat;
