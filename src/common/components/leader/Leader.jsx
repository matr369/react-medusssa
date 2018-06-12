import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';
import * as Images from '~data/images/leaders/index.js';

export class Leader extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.materialboxed');
        this.materialboxedInstance = M.Materialbox.init(elems, {});
    }

    componentWillUnmount() {
        this.materialboxedInstance && this.materialboxedInstance[0].destroy();
    }

    render() {
        return (
            <div className="leader-container card">
                <div className="card-image leader-image-container">
                    <img src={Images[this.props.photoUrl]} className="materialboxed leader-photo" alt="leader"/>
                </div>
                <div className="card-content">
                    <div className="leader-name">
                        <Link to={"/leader/" + this.props.id}>{this.props.name}</Link>
                    </div>
                    <div className="leader-position">{this.props.position}</div>
                </div>
            </div>
        );
    }
}

