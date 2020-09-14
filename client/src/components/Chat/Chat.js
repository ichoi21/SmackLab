import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const socket = io.connect("http://localhost:4000");

const Chat = () => {
  const [state, setState] = useState({ message: "", name: "" });
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
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setChat([...chat, { name, message }]);
    });
  });

  return (
    <div className="App container">
      <form onSubmit={onMessageSubmit}>
        <Grid container spacing={1}>
          <Grid item md={12} className="title">
            <h2>Messenger</h2>
          </Grid>
          <Grid item md={4} className="name-field">
            <TextField
              name="name"
              onChange={(e) => onTextChange(e)}
              value={state.name}
              label="Name"
            />
          </Grid>
          <Grid item md={8}>
            <TextField
              name="message"
              onChange={(e) => onTextChange(e)}
              value={state.message}
              label="Type a Message"
            />
          </Grid>
          <Grid item md={12}>
            <button color="primary"> Send Message</button>
          </Grid>
        </Grid>
      </form>
      <Grid
        className="render-chat"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          fontSize: "12px",
        }}
      >
        <div
          className="container"
          style={{ border: "1px solid", width: "80%" }}
        >
          <h4>Chat Log</h4>
          {renderChat()}
        </div>
      </Grid>
    </div>
  );
};

export default Chat;
