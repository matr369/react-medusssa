import React, { Component } from 'react';

import { CommentForm } from '~common-components/leaderComments/CommentForm.jsx';
import { CommentList } from '~common-components/leaderComments/CommentList.jsx';

export class LeaderComments extends Component {

    render() {
        return (
            <div className="row">
                <CommentList comments={this.props.comments}>
                    <CommentForm addComment={this.props.addComment} userId={this.props.userId}/>
                </CommentList>
            </div>
        );
    }
}