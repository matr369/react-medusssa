import React, { Component } from 'react';

export class CommentList extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.children}
                <div className="row">
                    {
                        (this.props.comments && this.props.comments.length) ?
                            (
                                <ul className="collection">
                                    {
                                        this.props.comments.map(
                                            (comment) => <li className="collection-item" key={comment.commentId}>
                                                <p>{comment.message}</p>
                                                {comment.date}
                                            </li>
                                        )
                                    }
                                </ul>
                            ) : (
                            <div className="col s12">
                                No comments...
                            </div>
                        )
                    }
                </div>
            </React.Fragment>
        );
    }
}
