import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import GradientButton from "../Button/GradientButton";
import { Link, BrowserRouter as Router } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "../Card/Card";
import Quiz from "../Quiz/Quiz";
import QuizCard from "./QuizCard";
import axios from "axios";

const ProfileRoute = (state) => {
  console.log(state);
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `http://localhost:5000/api/users/profile`,
    });
  });
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <div className="Profile">
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="column-reverse"
          justify="center"
          alignItems="center"
        >
          <ProfileCard />
        </Grid>
        <Grid
          container
          spacing={3}
          direction="column-reverse"
          justify="center"
          alignItems="center"
        >
          <QuizCard />
        </Grid>
      </div>
    </div>
  );
};

export default Profile;
