import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Trans} from 'react-i18next';
import Typography from '@material-ui/core/Typography';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from "@material-ui/core/Input";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    }
};


class WUAppBar extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
                            <Trans i18nKey="welcome.title"/>
                        </Typography>
                        <FormControl >
                            <InputLabel shrink htmlFor="language-label-placeholder">
                                <Trans i18nKey="general.language" />
                            </InputLabel>
                            <NativeSelect
                                value={this.props.language}
                                onChange={(e) => {
                                    this.props.onLanguageUpdate(e.target.value)
                                }}
                                input={<Input name="age" id="language-label-placeholder" />}
                            >
                                <option value="pl">PL</option>
                                <option value="en">EN</option>
                            </NativeSelect>
                        </FormControl >
                    </Toolbar>
                </AppBar>
            </div>

        )
    }

}

WUAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WUAppBar);