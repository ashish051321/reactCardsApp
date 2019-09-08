import React, { Component } from 'react';

export default class Quest extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Question
                </div>
                <div className="card-body">
                    <h4 className="card-title">Java Basics</h4>
                    <p className="card-text">Explain about Public and Private access specifiers.</p>
                </div>
            </div>
        );
    }
}