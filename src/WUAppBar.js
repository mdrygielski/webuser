import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Trans } from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl/FormControl";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect/NativeSelect";
import Button from '@material-ui/core/Button';

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
    return (

        <div>
            <AppBar>
                <Toolbar>
                    {/*/!*{props.t('welcome.title')}*!/*/}
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <Trans i18nKey="welcome.title"/>
                    </Typography>
                    {/*<FormControl>*/}
                        {/*/!*<InputLabel shrink htmlFor="language-label-placeholder">*!/*/}
                            {/*/!*{classes.t('welcome.language', {framework: "react-i18next"})}*!/*/}
                        {/*/!*</InputLabel>*!/*/}
                        {/*<NativeSelect*/}
                            {/*name="lang"*/}
                            {/*value={"1"} >*/}
                            {/*/!*onChange={(event) =>  classes.changeLanguage(event.target.value)}*!/*/}
                            {/*/!*input={<Input name="lang" id="language-label-placeholder" />}>*!/*/}
                            {/*/!*<option value={"en"}>English</option>*!/*/}
                            {/*/!*<option value={"pl"}>Polski</option>*!/*/}

                        {/*</NativeSelect>*/}
                    {/*</FormControl>*/}
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

WUAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WUAppBar);