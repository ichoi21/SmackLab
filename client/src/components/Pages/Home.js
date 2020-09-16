import React from "react";
// import lgLogo from "../img/sl_md.png";
// import logo from "../img/logo1.png";
import { Paper, Grid, makeStyles, Typography } from "@material-ui/core";
import "./Home.css";
import "../../App.css";
import Card from "../Card/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "default",
  },
  palette: {
    type: "dark",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const Home = () => {
  const classes = useStyles();

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const currentUserName = currentUser.first_name;

  return (
    <div className="Home">
      <Grid container className="Title" spacing={3}>
        <div className="userName">
          <Typography
            variant="h3"
            className="welcome"
            color="textPrimary"
            gutterBottom
          >
            Welcome Back {currentUserName}!
          </Typography>
        </div>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card title="Profile" text="View Profile" />
        </Grid>
        <Grid item xs={6}>
          <Card title="Recommendations" text="View Recommendations" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Card title="Workouts" text="View Workouts" />
        </Grid>
        <Grid item xs={4}>
          <Card title="Tips" text="View Tips" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;

//BOTTOM CODE IS ACTUALLY NAVBAR - this has been MIGRATED YO!
