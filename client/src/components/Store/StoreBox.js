import React from "react";

import "./StoreBox.css";

const Storedetails = (props) => (
  <div className="profilebox shadow">
    <div className="profileImage">
      <img className="profileImage" src={props.profile.image} alt="merch" />
    </div>
    <div className="profileinfo">
      <h4 className="font15 weight800">{props.profile.name}</h4>
      <p className="font12 weight500 padding10">{props.profile.description}</p>
      <p className="font12 weight800 rankInfo shadow">{props.profile.rank}</p>
    </div>
  </div>
);

export default Storedetails;
