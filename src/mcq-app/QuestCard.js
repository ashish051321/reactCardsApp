import React, { Component } from 'react';
import Quest from './Quest';
import Ans from './Ans';

export default class QuestCard extends Component {
    
    render() {
        return(
            <div className="p-2">
                <div className="mb-2">
                    <Quest/>
                </div>
                <div>
                    <Ans/>
                </div>
            </div>
        );
    }
}