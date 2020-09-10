import React from "react";

const Home = () => {
  return (
<<<<<<< HEAD
    <div>
      <h3>Hello</h3>
=======
    <div className="App">
      <header className="App-header">
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="#212121"
              aria-label="menu"
              image={logo}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <img src={logo_sm} />
            </Typography>

            <Button color="white">
              <Link to="/signup">Sign Up</Link>
            </Button>
            <Button color="white">
              <Link to="/login">Log In</Link>
            </Button>
            <Button color="inherit">
              <Link to="/chat">Chat</Link>
            </Button>
            <Button color="inherit">
              <Link to="/profile">Profile</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </header>

      <Switch>
        <route path="/signup">
          <SignUp />
        </route>
        <route path="/login">
          <Login />
        </route>
        <route path="/chat">
          <Chat />
        </route>
      </Switch>
      <route path="/profile"></route>
>>>>>>> profile
    </div>
  );
};

export default Home;

//BOTTOM CODE IS ACTUALLY NAVBAR - this has been MIGRATED YO!
