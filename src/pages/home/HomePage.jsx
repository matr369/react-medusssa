import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Overview} from '~common-components/overview/Overview.jsx';
import {Leadership} from '~common-components/leadership/Leadership.jsx';
import {fetchLeadership} from '~actions';


class HomePage extends Component {

    componentDidMount() {
        if (!this.props.leaders) {
            this.props.dispatch(fetchLeadership());
        }
    }

    render() {
        return (
            <div className="home-page-container">
                <div className="container">
                    <Overview/>
                    <Leadership {...this.props}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        leaders: state.leadership && state.leadership.leaders,
        title: state.leadership && state.leadership.title,
        isLoading: state.leadership && state.leadership.isLoading
    };
}

const HomePageWrapped = withRouter(connect(mapStateToProps)(HomePage));
export {HomePageWrapped as HomePage};

