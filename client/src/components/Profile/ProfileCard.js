import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { pink, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: pink[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const currentUserName = currentUser.first_name;

  return (
    <Card className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <CardHeader
            avatar={
              <Avatar aria-label="avatar" className={classes.avatar}>
                SL
              </Avatar>
            }
            title=""
          />
        </Grid>
      </Grid>
      <CardMedia />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <p> Name: {currentUserName} </p>
          <p>Age: 27</p>
          <p>Weight: 119 </p>
          <p>Height: 5'2 </p>
          <p>Fitness Goal: Cardio </p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>
  );
}

//routes still need to be made from quiz and calculator for profile
