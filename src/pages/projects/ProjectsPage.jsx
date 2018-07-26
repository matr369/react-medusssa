import React, {Component} from 'react';

import {ProjectList} from '~common-components/projects/ProjectList.js'

export class ProjectsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            projects: [
                {
                    id: 1,
                    name: 'Lalalala',
                    url: 'dflsdlfs'
                },
                {
                    id: 2,
                    name: 'bfbvsadvasd',
                    url: 'dflsdlfs'
                },
                {
                    id: 3,
                    name: 'Lalalfsdfsdf',
                    url: 'dflsdlfs'
                }
            ]
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="projects-page-container">
                <div className="container">
                    <ProjectList {...this.state}/>
                </div>
            </div>
        );
    }
}