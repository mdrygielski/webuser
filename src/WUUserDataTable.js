import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Trans} from 'react-i18next';
import Grid from "@material-ui/core/Grid/Grid";

const styles = theme => ({
    paper: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 2,
        marginLeft: '10px',
        marginRight: '5px'
    },
});

let id = 0;

function createData(name, value) {
    id += 1;
    return {id, name, value};
}

function SimpleTable(props) {
    const {classes} = props;

    const rows = [
        createData(<Trans i18nKey="language"/>, props.data.lng),
        createData(<Trans i18nKey="latitude"/>, props.data.location.latitude),
        createData(<Trans i18nKey="longitude"/>, props.data.location.longitude),
        createData(<Trans i18nKey="isPrecise"/>, props.data.location.isExact ? <Trans i18nKey="yes"/> :
            <Trans i18nKey="no"/>),
        createData(<Trans i18nKey="isEu"/>, props.data.location.isEu ? <Trans i18nKey="yes"/> : <Trans i18nKey="no"/>),
        createData(<Trans i18nKey="country"/>, props.data.location.countryName),
        createData(<Trans i18nKey="continent"/>, props.data.location.continentName),
    ];

    return (
            <Grid item className={classes.root}>
                <Paper className={classes.paper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell><Trans i18Key="name"/>Name</TableCell>
                                <TableCell><Trans i18Key="value"/>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => {
                                return (
                                    <TableRow key={row.id}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell numeric>{row.value}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </Grid>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);