import React from "react";
import "./Landing.css";
import landingImg from "../img/landing.png";
import { Grid, makeStyles, Box } from "@material-ui/core";
import GradientButton from "../Button/GradientButton";
import { Link, BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div className="Landing">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5} className="parentTitle">
            <h1 className="title linear-wipe">
              YOUR FITNESS
              <br />
              BEGINS WITH
              <br />
              <span className="outline">SMACK LAB</span>
            </h1>
            <div className="parentBtn">
              <Link to="/login">
                <GradientButton className="lBtn" text="Log In" />
              </Link>
              <Link to="/signup">
                <GradientButton className="lBtn" text="Sign Up" />
              </Link>
            </div>
          </Grid>
          <Grid item xs={6} className="parentBlob">
            <img src={landingImg} alt="landing" />
            {/* <div className="blob red one"></div> */}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Landing;
