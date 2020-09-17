import React from "react";
import {
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  createMuiTheme,
  ThemeProvider,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import GradientButton from "../Button/GradientButton";
import Quiz from "../Quiz/index";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const QuizCard = (props) => {
  const classes = useStyles();

  return (
    <div className="container">
      <Quiz />
    </div>
  );
};

export default QuizCard;
