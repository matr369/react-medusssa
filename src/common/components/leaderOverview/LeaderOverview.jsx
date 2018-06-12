import React, { Component } from 'react';

export class LeaderOverview extends Component {

    render() {
        return (
            <div class="card-panel grey lighten-3">
                <span class="leader-overview-text grey-text text-darken-4">
                    {this.props.overview}
                </span>
            </div>
        );
    }
}

