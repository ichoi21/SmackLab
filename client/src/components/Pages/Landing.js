import React from 'react';
import "./Landing.css";
import landingImg from "../img/landing.png";
import { Grid, makeStyles } from "@material-ui/core";
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
                <Grid container spacing={3}>
                    <Grid item xs={6} className="parentTitle">
                        <h1 className="title">YOUR FITNESS
                        <br/>
                        BEGINS AT
                        <br />
                        <span className="outline">SMACK LABS</span></h1>
                        <GradientButton className="lbutton" text="Log In"/>
                    </Grid>
                    <Grid item xs={6} className="parentBlob">
                        <img src={landingImg} alt="landing" />
                        <div className="blob red one"></div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Landing;
