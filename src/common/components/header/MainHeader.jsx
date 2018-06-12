import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class MainHeader extends Component {

    render() {
        return (
            <header className="main-header">
                <nav>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">
                            <img src={this.props.logo} height="42" className="brand-logo-icon" alt="logo" />
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/">Contacts</a></li>
                            <li><a href="/">Solutions</a></li>
                            <li><Link to="/techboard">JavaScript</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

