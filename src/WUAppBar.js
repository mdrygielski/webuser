import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Trans } from 'react-i18next';
import Typography from '@material-ui/core/Typography';

import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function WUAppBar(props) {
    const {classes} = props;

    function onSelectFlag(countryCode)  {
        if (countryCode === "PL") {
            props.i18n.changeLanguage("pl");
        } else {
            props.i18n.changeLanguage("en");
        }
    }
    if (props.defaultCountryCode !== "") {
        console.log(props.defaultCountryCode);
    return (
        <div>
            Country Code: {props.defaultCountryCode}
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <Trans i18nKey="welcome.title"/>
                    </Typography>
                    <ReactFlagsSelect
                        onSelect={onSelectFlag}
                        defaultCountry={props.defaultCountryCode === "PL" ? "PL" : "GB"}
                        countries={["GB", "PL"]} customLabels={{"GB": "en", "PL":"pl"}}/>
                </Toolbar>
            </AppBar>

        </div>
    );}
    else {
        return "";
    }

}

// WUAppBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(WUAppBar);