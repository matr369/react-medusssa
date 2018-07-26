import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Leader} from '~common-components/leader/Leader.jsx';
import {LeaderOverview} from '~common-components/leaderOverview/LeaderOverview.jsx';
import {fetchLeader, addComment, fetchComments} from '~actions';
import { LeaderComments } from '~common-components/leaderComments/LeaderComments.jsx';

class LeaderPage extends Component {

    componentDidMount() {
        if (!this.props.leader) {
            this.props.fetchLeader(Number(this.props.match.params.id));
            this.props.fetchComments(Number(this.props.match.params.id));
        }
    }

    render() {
        return (
            <div className="leader-page-container">
                <div className="container">
                    {
                        (!this.props.isLoading) ? (
                            <Fragment>
                                <div className="row">
                                    <div className="col s4"><Leader {...this.props.leader}/></div>
                                    <div className="col s8"><LeaderOverview overview={this.props.overview}/></div>
                                </div>
                                <LeaderComments comments={this.props.comments} addComment={this.props.addComment} userId={Number(this.props.match.params.id)}/>
                            </Fragment>
                        ) : (
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                        )
                    }
                </div>
            </div>
        );
    }
}


function mapStateToProps (state, ownProps) {
    const id = Number(ownProps.match.params.id);
    return {
        leader: state.leaderPage.leaders[id],
        overview: state.leaderPage.leaders[id] && state.leaderPage.leaders[id].overview,
        comments: state.leaderPage.comments && state.leaderPage.comments[id],
        isLoading: state.leaderPage.leaders[id] && state.leaderPage.leaders[id].isLoading
    };
}

const mapDispatchToProps = dispatch => ({
    addComment: (id, message) => dispatch(addComment(id, message)),
    fetchLeader: id => dispatch(fetchLeader(id)),
    fetchComments: id => dispatch(fetchComments(id))
});

const LeaderPageWrapped = withRouter(connect(mapStateToProps, mapDispatchToProps)(LeaderPage));
export {LeaderPageWrapped as LeaderPage};
