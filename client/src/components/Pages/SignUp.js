import React, { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { auth, setAuth } = useAuthContext();

  const editState = (e) => {
    setState({...state, [e.target.name]:e.target.value})
  }

  const submitState = (e) => {
    e.preventDefault();
    createUser(state).then((res) => {
      // setState({
      //   ...state,
      //   [e.target.name]:e.target.value
      // });
      console.log(res.data.user)
      setAuth({type: "LOGIN", payload: { user: res.data.user, token: res.data.token }});
      let token = res.data.token;
      localStorage.setItem("token", "Bearer" + token);
      (this.$router.push({name:'HomePage'}));
    }).catch(err=>{
      console.log(err.response)
    });
  };

  const createUser = (state) => {
    console.log(state);
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `http://localhost:5000/api/users/register`,
        data: {
          first_name: state.first_name,
          last_name: state.last_name,
          email: state.email,
          password: state.password,
          password2: state.password2
        },
      })
        .then((response) => {
          console.log(response);
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={submitState} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={editState}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="last_name"
                onChange={editState}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={editState}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={editState}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password2"
                label="Verify Password"
                type="password"
                id="password2"
                onChange={editState}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
