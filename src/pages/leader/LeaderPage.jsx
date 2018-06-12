import React, { Component } from 'react';
import {Leader} from '~common-components/leader/Leader.jsx';
import {LeaderOverview} from '~common-components/leaderOverview/LeaderOverview.jsx';
import DATA from '~data/data.json';

export class LeaderPage extends Component {

    constructor(props) {
        super(props);
        this.id = parseInt(this.props.match.params.id, 10);
        this.state = {
            leader: []
        }
    }

    componentDidMount() {
        var self = this;
        const leader = DATA.leadership.leaders.find((item) => {
            return item.id === self.id;
        });

        this.setState({
            leader: leader
        });
    }

    render() {
        return (
            <div className="leader-page-container">
                <div className="container">
                    <div className="row">
                        <div className="col s4"><Leader {...this.state.leader}/></div>
                        <div className="col s8"><LeaderOverview overview={this.state.leader.overview}/></div>
                    </div>
                </div>
            </div>
        );
    }
}

