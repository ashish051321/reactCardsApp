import React, { Component } from 'react';

export default class Ans extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Answer
                </div>
                <div className="card-body">
                    {this.props.ans}
                </div>
            </div>
        );
    }
}