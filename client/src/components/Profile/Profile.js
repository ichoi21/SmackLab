import React, { Component, Profiler } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import "./Profile";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="row">
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <Avatar></Avatar>
                <span className="card-title"></span>
              </div>
              <div className="card-content"></div>
              <div className="card-action"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
