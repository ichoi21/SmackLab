import React from 'react';
import { 
    makeStyles, 
    Card,
    CardActions,
    CardContent,
    Button,
    Typography
} from '@material-ui/core';
import GradientButton from "../Button/GradientButton";

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
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <GradientButton text={props.text}/>
            </CardActions>
        </Card>
    )
}

export default ProfileCard;
