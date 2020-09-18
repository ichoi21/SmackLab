import React from "react";

import "./box.css";

const details = (props) => (
  <div className="profilebox shadow">
    <div className="profileImage">
      <img src={props.profile.image} alt="profile" />
    </div>
    <div className="profileinfo">
      <h4 className="font15 weight800">{props.profile.name}</h4>
      <p className="font12 weight500 padding10">{props.profile.description}</p>
      <p className="font12 weight800 rankInfo shadow">{props.profile.rank}</p>
    </div>
  </div>
);

export default details;
