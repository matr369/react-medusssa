import React, { Component } from 'react';

export class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
    }

    onClick() {
        if (this.textareaRef.current.value) {
            this.props.addComment(this.props.userId, this.textareaRef.current.value)
            this.textareaRef.current.value = '';
        }
    }

    render() {
        return (
            <div className="row">
                <div className="input-field col s9">
                    <textarea id="textarea1" ref={this.textareaRef} className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">Please add comment...</label>
                </div>
                <div className="input-field col s3">
                    <button className="btn btn btn-small waves-effect waves-light blue darken-3 right" onClick={() => this.onClick()}>Add Comment</button>
                </div>
            </div>
        );
    }
}