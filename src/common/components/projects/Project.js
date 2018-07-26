import React, {Component} from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

export class Project extends Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.materialboxed');
        this.materialboxedInstance = M.Materialbox.init(elems, {});
    }

    componentWillUnmount() {
        this.materialboxedInstance && this.materialboxedInstance[0].destroy();
    }

    render() {
        return (
            <div className="project-container card">
                <div className="card-image project-image-container">
                    <img src={this.props.photoUrl} className="materialboxed project-photo" alt="project"/>
                </div>
                <div className="card-content">
                    <div className="project-name">
                        <Link to={this.props.url}>{this.props.name}</Link>
                    </div>
                </div>
            </div>
        );
    }
}