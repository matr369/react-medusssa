import React, { Component } from 'react';
import DATA from '~data/data.json';


export class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }
    }

    componentDidMount() {
        this.setState({
            text: DATA.overview.text,
            title: DATA.overview.title
        });
    }


    render() {
        return (
            <div className="raw overview">
                <div className="overview-title blue-text text-darken-3">
                    <h3>{this.state.title}</h3>
                </div>
                <div className="overview-text grey-text text-darken-2">{this.state.text}</div>
            </div>
        );
    }
}

