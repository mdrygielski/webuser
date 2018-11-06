import React, {Component} from 'react';
import './App.css';
import {withNamespaces, Trans} from 'react-i18next';
import WUAppBar from './WUAppBar';
import WUUserDataTable from './WUUserDataTable';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import WUTestIntro from './WUTestIntro';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {
                latitude: "",
                longitude: "",
                isExact: false,
                isEu: "",
                countryName: "",
                coutryCode: "",
                continentName: "",
                continentCode: "",
                flagUrl: "",
                language: ""
            },
            lng: "en"
        }
        this.getIpData();
        this.getLocation();

    }

    onLanguageUpdate = (language) => {
        this.setState({lng: language})
        if (language === "pl") {
            this.props.i18n.changeLanguage("pl");
        } else {
            this.props.i18n.changeLanguage("en");
        }
    }

    render() {
        const {t, i18n} = this.props;

        return (
            <div className="App">
                <br/>
                <br/>
                <br/>
                <WUAppBar language={this.state.lng} onLanguageUpdate={this.onLanguageUpdate}/>
                <Grid container
                      spacing={16}
                      direction="row"
                      justify="space-between"
                      alignItems="flex-start">
                    <WUTestIntro/>
                    <WUUserDataTable data={this.state}/>
                </Grid>


            </div>
        );
    }


    getIpData() {
        axios.get("https://api.ipdata.co?api-key=8c206a3f41fe19087eeaa52f781259c5d441f1a8e911797ecf1f7a51").then((response) => {
                this.setState({
                        location: {
                            latitude: response.data.latitude,
                            longitude: response.data.longitude,
                            isEu: response.data.is_eu,
                            countryName: response.data.country_name,
                            coutryCode: response.data.country_code,
                            continentName: response.data.continent_name,
                            continentCode: response.data.continent_code,
                            flagUrl: response.data.flag,
                            language: response.data.languages[0].name
                        }
                    }
                )
                if (response.data.country_code === "PL") {
                    this.setState({lng: 'pl'})
                    this.props.i18n.changeLanguage("pl");

                }
                return true;
            }
        ).catch((error) => {
            console.log(error);
            return error.message;
        })
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log("geolocation"+position.coords.latitude);
                this.setState({
                    location: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        isExact: true
                    }
                })
            });
        }
    }

}


export default withNamespaces('common')(App);
