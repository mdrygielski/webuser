import React,  { Component } from 'react';
import './App.css';
import {withNamespaces, Trans} from 'react-i18next';
import Button from '@material-ui/core/Button'
import WUAppBar from './WUAppBar';
import axios from 'axios';

const WUAppBarWrapped = withNamespaces('common')(WUAppBar);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            language: "",
            country: "",
            countryCode: "",
            response: ""
        }
        this.getLocation()
    }


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
          <WUAppBarWrapped defaultCountryCode={this.state.countryCode}/>
          <br/>
          <img alt={"test"} src={"https://image.shutterstock.com/image-vector/good-job-stampvector-illustration-260nw-773726719.jpg"}/>
          <button>Rozpocznij badanie</button>
          <br/>
          <Button>test</Button><br/>
          {/*{this.getLocation()}*/}

          Lat: {this.state.latitude}<br/>
          Lng: {this.state.longitude}<br/>
          language: {this.state.language}<br/>
          Country: {this.state.country}

      </div>
    );
  }

  getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {

                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
                axios.get('http://api.geonames.org/countryCodeJSON', {
                    params: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        username: "mdrygielski"
                    }
                }).then((response) => {
                    console.log("response");
                    if (response.status === 200) {
                        this.setState({
                            language: response.data.languages,
                            country: response.data.countryName,
                            countryCode: response.data.countryCode
                        })
                        if (response.data.countryCode === "PL") {
                            this.props.i18n.changeLanguage("pl");
                        } else {
                            this.props.i18n.changeLanguage("en");
                        }
                    }else {
                        this.setState({
                            language: "en",
                            country: "United Kingdom",
                            countryCode: "GB"
                        })
                        this.props.i18n.changeLanguage("en");
                    }

                }).catch((error) =>{
                    console.log("ERROR");
                    this.setState({
                        language: "en",
                        country: "United Kingdom",
                        countryCode: "GB"
                    })
                    this.props.i18n.changeLanguage("en");
                })

            });
        }
        this.setState({
            language: "en",
            country: "United Kingdom",
            countryCode: "GB"
        })
        this.props.i18n.changeLanguage("en");
    }
}


export default withNamespaces('common')(App);
