import React, { Component } from 'react';

import {Project} from '~common-components/projects/Project.js';

export class ProjectList extends Component {

    render() {
        return (
            <div className="raw projects-container">
                <div className="projects-title blue-text text-darken-3">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="projects-board">
                    <ul className="projects-list">
                        {
                            (!this.props.isLoading) ?
                                (this.props.projects && this.props.projects.map((project) =>
                                        <li key={project.id} className="projects-list-item">
                                            <Project {...project}/>
                                        </li>
                                ))
                                : (<div className="progress">
                                <div className="indeterminate"></div>
                            </div>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}