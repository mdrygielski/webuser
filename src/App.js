import React, {Component} from 'react';
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
            location: {
                latitude: "",
                longitude: "",
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
                <Trans i18nKey="welcome.test">
                    testTrans
                </Trans>
                <WUAppBarWrapped language={this.state.lng} onLanguageUpdate={this.onLanguageUpdate}/>
                <Trans i18nKey="general.language"/>: {this.state.lng}
                <br/>
                <img alt={"test"}
                     src={"https://image.shutterstock.com/image-vector/good-job-stampvector-illustration-260nw-773726719.jpg"}/>
                <button>Rozpocznij badanie</button>
                <br/>
                <Button>test</Button><br/>
                Lat: {this.state.location.latitude}<br/>
                Lng: {this.state.location.longitude}<br/>
                language: {this.state.location.language}<br/>
                Country: {this.state.location.countryName}

            </div>
        );
    }

    getIpData() {
        axios.get("https://api.ipdata.co?api-key=test").then((response) => {
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
            return error.message;
        })
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            });
        }
    }

}


export default withNamespaces('common')(App);
