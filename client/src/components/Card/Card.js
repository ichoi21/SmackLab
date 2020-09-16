import React from 'react';
import {
    makeStyles,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    createMuiTheme, 
    ThemeProvider
} from '@material-ui/core';
import GradientButton from "../Button/GradientButton";

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
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

const ProfileCard = (props) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={darkTheme}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {props.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.subtitle}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <GradientButton text={props.text} />
                </CardActions>
            </Card>
        </ThemeProvider>
    )
}

export default ProfileCard;
