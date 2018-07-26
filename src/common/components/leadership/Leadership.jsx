import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Leader} from '~common-components/leader/Leader.jsx';


export class Leadership extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: ''
        };
    }

    onChangeHandler(e) {
        let filter = e.target.value;
        this.setState({
            filter: filter
        });
    }

    render() {
        return (
            <div className="raw leadership-container">
                <div className="leadership-title blue-text text-darken-3">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="leadership-introduction grey-text text-darken-2">
                    <p>{this.props.introduction}</p>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="filter2" type="text" className="validate" onChange={this.onChangeHandler.bind(this)}/>
                        <label className="active" htmlFor="filter2">Filter...</label>
                    </div>
                </div>
                <div className="leadership-board">
                    <ul className="leadership-list">
                        {
                            (!this.props.isLoading) ?
                                (this.props.leaders && this.props.leaders
                                    .filter(leader => {
                                        return leader.name.indexOf(this.state.filter) > -1;
                                    })
                                    .map(leader =>
                                        <li key={leader.id} className="leadership-list-item">
                                            <L
                                                eader {...leader}/>
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

Leadership.propTypes = {
    title: PropTypes.string,
    leaders: PropTypes.array,
    introduction: PropTypes.string,
    isLoading: PropTypes.bool,
    isError: PropTypes.bool
};

