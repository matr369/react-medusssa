import React, { Component } from 'react';
import {Map} from '~common-components/map/Map.jsx';
import {ContactsInfo} from '~common-components/contactsInfo/ContactsInfo.jsx';
import {LeaderOverview} from '~common-components/leaderOverview/LeaderOverview.jsx';
import DATA from '~data/data.json';

export class ContactsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            address: '',
            email: '',
            region: '',
            coordinates: []
        }
    }

    componentDidMount() {
        this.setState({
            phoneNumber: DATA.contacts.phoneNumber,
            address: DATA.contacts.address,
            email: DATA.contacts.email,
            region: DATA.contacts.region,
            coordinates: DATA.contacts.coordinates
        });
    }


    render() {
        return (
            <div className="contacts-page-container">
                <ContactsInfo {...this.state} />
                <Map coordinates={this.state.coordinates}/>
            </div>
        );
    }
}

