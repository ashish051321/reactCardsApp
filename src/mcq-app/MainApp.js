import React, { Component } from 'react';
import Sidebar from './Sidebar';
import QuestCard from './QuestCard';
import './css/MainApp.css';
import questData from './questApp';

export default class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedQuest: questData[0] };
    }

    questSelected = (questTitle) => {
        console.log('quest was selected', questTitle);
        const selectedQuestion = questData.find(item => (item.questTitle === questTitle));
        this.setState({ selectedQuest: selectedQuestion });
        window.scrollTo(0, 0);// direct access to browser APIs     
    };

    render() {
        return (

            <div className="container-fluid" style={{ minHeight: '100vh' }}>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    <a className="navbar-brand" href="#!">Questions Repository for Credit Risk</a>
                </nav>
                <div className="row mainbody">
                    <div className="col-4 mh-100 p-0 bg-dark text-white" style={{ overflowY: 'auto' }}><Sidebar
                        titles={questData.map(item => item.questTitle)} questSelected={this.questSelected} />
                    </div>
                    <div className="col-8 mh-100 bg-secondary" ><QuestCard questObj={this.state.selectedQuest} /></div>
                </div>
            </div>
        );
    }
}