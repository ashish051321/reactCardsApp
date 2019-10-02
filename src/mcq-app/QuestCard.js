import React, { Component } from 'react';
import Quest from './Quest';
import Ans from './Ans';

export default class QuestCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="p-2">
                <div className="mb-2">
                    <Quest questTitle={this.props.questObj.questTitle} questBody={this.props.questObj.question} />
                </div>
                <div>
                    <Ans ans={this.props.questObj.answer} />
                </div>
            </div>
        );
    }
}