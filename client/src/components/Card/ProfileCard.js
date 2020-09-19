import React from 'react';
import {
    makeStyles,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Button,
    Typography,
    createMuiTheme,
    ThemeProvider,
    Avatar,
    deepOrange,
} from '@material-ui/core';
import GradientButton from "../Button/GradientButton";
import "./ProfileCard.css";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        borderRadius: "50px",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const ProfileCard = (props) => {
    const classes = useStyles();

    return (
        <ThemeProvider>
            <div className={classes.root}>
                <Card className="parentProfile">
                    <div className="childProfile">
                        <CardContent>
                            <div className="nameProfile">
                                <CardHeader
                                    avatar={<Avatar>{props.letter}</Avatar>}
                                    title={<h3>{props.fullName}</h3>}
                                />
                                <CardActions>
                                    <GradientButton link={props.link} text={props.text} />
                                </CardActions>
                            </div>
                            <Typography className={classes.pos} color="textSecondary">
                                {props.subtitle}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {props.body}
                            </Typography>
                        </CardContent>
                        
                    </div>
                </Card>
            </div>
        </ThemeProvider>
    )
}

export default ProfileCard;
