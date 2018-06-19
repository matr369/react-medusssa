import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class MainHeader extends Component {

    render() {
        return (
            <header className="main-header">
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">
                            <img src={this.props.logo} height="42" className="brand-logo-icon" alt="logo" />
                        </Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/contacts">Contacts</Link></li>
                            <li><Link to="/">Technologies</Link></li>
                            <li><Link to="/techboard">JavaScript</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

