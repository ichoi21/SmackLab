import React, { Component } from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";

class Output extends Component {
  // convert cm into ft
  toFeet = (num) => {
    let realFeet = (num * 0.3937) / 12;
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return `${feet}'${inches}`;
  };
  // convert kg to lbs
  toLbs = (num) => {
    let nearExact = num / 0.45359237;
    let lbs = Math.floor(nearExact);
    return lbs;
  };

  render() {
    let age = this.props.data.age;
    let gender = this.props.data.genderClass;
    let height = this.props.data.height;
    let weight = this.props.data.weight;
    let bmi = this.props.data.bmi;
    let bfp = this.props.data.bfp;
    let bmiClass = this.props.data.bmiClass;
    let bmr = this.props.data.bmr;

    // conversions from imperial to metric
    let heightFeet = this.toFeet(height);
    let pounds = this.toLbs(weight);

    return (
      <div className="output">
        <Grid container spacing={1}>
          <Grid item md={12} className="title">
            <h4>Results</h4>
          </Grid>
          <Grid item md={6} className="col">
            Age:{"\n"} {age} yrs
          </Grid>
          <Grid item md={6} className="col">
            {gender}
          </Grid>
          <Grid item md={6} className="col">
            Height:{"\n"} {heightFeet}
            <span className="metric"> {height} cm</span>
          </Grid>
          <Grid item md={6} className="col">
            Weight:{"\n"}
            {pounds}lbs
            <span className="metric"> {weight}kg</span>
          </Grid>
          <Grid item md={6} className="col">
            BMI: {bmi} <span className=""> body mass index</span>
          </Grid>
          <Grid item md={6} className="col">
            BFP: {bfp}% <span className=""> body fat %</span>
          </Grid>
          <Grid item md={6} className="col">
            Level: {bmiClass}
          </Grid>
          <Grid item md={6} className="col">
            BMR: {bmr} <span className=""> basal metabolic rate</span>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Output;
