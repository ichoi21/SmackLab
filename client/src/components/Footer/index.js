import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";
import "./Footer.css";

function Copyright() {
  return (
    <Typography variant="body2" className="text-color" align="left">
      {"Copyright © "}
      <Link color="inherit" href="/">
        SmackLab
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div>
      <Grid container>
        <Grid className="footerColor footer-pos" item xs={3}>
          <div className="text-color text-link" >
            <p><b>INFO</b></p>
            <p>SMACKLAB is the global destination to get
              the best workout of your life while talking smack.
            </p>
          </div>
        </Grid>
        <Grid className="footerColor footer-pos" item xs={1}></Grid>
        <Grid item xs={8}>
          <div className="footerColor footer-pos" id="Footer">
            <div className="text-color" id="FooterLinks">
              <p><b>MORE</b></p>
              <Link color="inherit" href="/About">
                About Us
              </Link>{" "}
              <Link color="inherit" href="/Contact">
                Contact
              </Link>{" "}
            </div>
          </div>
        </Grid>
      </Grid>
      <Grid container className="footerColor">
        <Grid item xs={12} className="copyright">
          <Copyright />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
