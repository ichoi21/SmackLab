import React from "react";
import Chat from "../Chat/Chat";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import "./ChatBtn.css";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "1px solid",
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ChatBtn() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const chat = open ? "simple-popper" : undefined;

  return (
    <div className="chatBtn">
      <Fab
        color="secondary"
        variant="extended"
        aria-label="chat"
        aria-describedby={chat}
        type="button"
        onClick={handleClick}
      >
        Smack Talk
      </Fab>
      <Popper id={chat} open={open} anchorEl={anchorEl}>
        <Chat />
      </Popper>
    </div>
  );
}
