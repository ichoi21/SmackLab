import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Video from "../Video";
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
import { green, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

let likes = [];
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: "white",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    color: "white",
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
    backgroundColor: green[500],
  },
}));

export default function ExerciseCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const saveLike = () => {
    likes.push(
      `https://www.youtube.com/embed/?listType=search&amp;list=${props.exercise}exercise&amp;wmode=transparent`
    );

    axios.post("/profile/uservideo", {
      link: likes,
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="exercises" className={classes.avatar}>
            {props.text}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon color="disabled" />
          </IconButton>
        }
        title={props.name}
      />

      <iframe
        id="ytplayer"
        type="text/html"
        src={`https://www.youtube.com/embed/?listType=search&amp;list=${props.exercise}exercise&amp;wmode=transparent`}
        frameborder="0"
        allowfullscreen=""
      ></iframe>
      <CardContent>
        <Typography variant="body2" color="white" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={saveLike}>
          <FavoriteIcon color="disabled" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon color="disabled" />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{props.name}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
