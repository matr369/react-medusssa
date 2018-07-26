import React, { Component } from 'react';

export class ContactsInfo extends Component {

    render() {
        return (
            <div className="contacts-info-block">
                <div className="card">
                    <div className="card-content grey lighten-4">
                        <address>
                            <div className="contacts-info">
                                <div className="region-info">{this.props.region}</div>
                                <p className="address-info">{this.props.address}</p>
                                <div className="phone-number-info">
                                    <a href={"tel:" + this.props.phoneNumber}>{this.props.phoneNumber}</a>
                                </div>
                                <div className="email-info">
                                    <a href={"mailto:" + this.props.email} target="_top">{this.props.email}</a>
                                </div>
                            </div>
                        </address>
                    </div>
                    <div className="card-action blue darken-3 waves-effect waves-light center-align contact-us-button">
                        <a className="white-text" href={"mailto:" + this.props.email} target="_top">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

