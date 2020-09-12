import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
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
    <div className="" id="Footer">
      <div>
        <Link color="inherit" href="/About">
          About Us
        </Link>{" "}
        <Link color="inherit" href="/Contact">
          Contact
        </Link>{" "}
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
