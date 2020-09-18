import React from 'react';
// import Chat from "../components/Chat/Chat";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import "./ChatBtn.css";

const ChatBtn = () => {
    return (
        <div className="chatBtn">
            <Fab color="secondary" variant="extended" aria-label="chat">
                <Link to="/chat">{"Let's Chat..."}</Link>
            </Fab>
        </div>
    )
}

export default ChatBtn;
