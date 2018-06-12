import React, { Component } from 'react';
import {Leader} from '~common-components/leader/Leader.jsx';


export class Leadership extends Component {
    render() {
        return (
            <div className="raw leadership-container">
                <div className="leadership-title blue-text text-darken-3">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="leadership-introduction grey-text text-darken-2">
                    <p>{this.props.introduction}</p>
                </div>
                <div className="leadership-board">
                    <ul className="leadership-list">
                        {this.props.leaders.map((leader) =>
                            <li key={leader.name} className="leadership-list-item">
                                <Leader {...leader}/>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

