import React,  { Component } from 'react';
import './App.css';
import {translate} from 'react-i18next';
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'


class App extends Component {
  render() {
    const {i18n } = this.props;

    return (
      <div className="App">
          <AppBar>
          <Toolbar>
              {this.props.t('welcome.title', {framework: "react-i18next"})}

              <FormControl>
                  <InputLabel shrink htmlFor="language-label-placeholder">
                      {this.props.t('welcome.language', {framework: "react-i18next"})}
                  </InputLabel>
                  <NativeSelect
                      name="lang"
                      value={i18n.language}
                      onChange={(event) =>  i18n.changeLanguage(event.target.value)}
                      input={<Input name="lang" id="language-label-placeholder" />}>
                      <option value={"en"}>English</option>
                      <option value={"pl"}>Polski</option>
                  </NativeSelect>
              </FormControl>
          </Toolbar>
      </AppBar>
          <br/>
          <br/>
          <br/>
          <img alt={"test"} src={"https://image.shutterstock.com/image-vector/good-job-stampvector-illustration-260nw-773726719.jpg"}/>
          <button>Rozpocznij badanie</button>
          <br/>
          <Button>test</Button>
          <button onClick={() => i18n.changeLanguage('en')}>en</button>
          <button onClick={() => i18n.changeLanguage('pl')}>pl</button>


      </div>
    );
  }
}

export default translate('common')(App);
