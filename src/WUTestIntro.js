import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Trans} from "react-i18next";
import Button from "@material-ui/core/Button/Button";
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        marginLeft: '20px'
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 2,
    },
    button: {
        margin: theme.spacing.unit,
    }
});

function PaperSheet(props) {
    const {classes} = props;

    return (
        <Grid key={"content"} item xs={5} className={classes.root}>
            <Paper elevation={1} className={classes.paper}>
                <Typography variant="h5" component="h3" align='center'>
                    <Trans i18nKey="welcome.test"/>
                </Typography>
                <Typography component="p">
                    <Trans i18nKey="welcome.test"/>
                </Typography>

                <br/>
                <div>
                    <Button variant="contained" color="primary" className={classes.button}>test</Button>
                </div>
            </Paper>
        </Grid>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);