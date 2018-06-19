import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Leader} from '~common-components/leader/Leader.jsx';
import {LeaderOverview} from '~common-components/leaderOverview/LeaderOverview.jsx';
import {fetchLeader} from '~actions';

class LeaderPage extends Component {

    componentDidMount() {
        if (!this.props.leader) {
            this.props.dispatch(fetchLeader(Number(this.props.match.params.id)));
        }
    }

    render() {
        return (
            <div className="leader-page-container">
                <div className="container">
                    <div className="row">
                        {
                            (!this.props.isLoading) ? (
                                <Fragment>
                                    <div className="col s4"><Leader {...this.props.leader}/></div>
                                    <div className="col s8"><LeaderOverview overview={this.props.overview}/></div>
                                </Fragment>
                            ) : (
                            <div className="progress">
                                <div className="indeterminate"></div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps (state, ownProps) {
    const id = Number(ownProps.match.params.id);
    return {
        leader: state.leaders[id],
        overview: state.leaders[id] && state.leaders[id].overview,
        isLoading: state.leaders[id] && state.leaders[id].isLoading
    };
}

const LeaderPageWrapped = withRouter(connect(mapStateToProps)(LeaderPage));
export {LeaderPageWrapped as LeaderPage};
