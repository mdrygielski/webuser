import React,  { Component } from 'react';
import './App.css';
import {withNamespaces, NamespacesConsumer, Trans} from 'react-i18next';
import Button from '@material-ui/core/Button'
import WUAppBar from './WUAppBar';

const WUAppBarWrapped = withNamespaces('common')(WUAppBar);

class App extends Component {
  render() {
    const {t, i18n } = this.props;

    return (
      <div className="App">
          <br/>
          <br/>
          <br/>
          <Trans i18nKey="welcome.test">
              testTrans
          </Trans>
          <WUAppBarWrapped />
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

export default withNamespaces('common')(App);
