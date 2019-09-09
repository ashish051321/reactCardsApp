import React, { Component } from 'react';
import Sidebar from './Sidebar';
import QuestCard from './QuestCard';
import './css/MainApp.css';
import questData from './questApp';

export default class MainApp extends Component {

    render() {
        return (

            <div className="container-fluid" style={{ minHeight: '100vh' }}>
                <nav className="navbar fixed-top navbar-dark bg-primary">
                    <a className="navbar-brand" href="#!">Questions Repository for Credit Risk</a>
                </nav>
                <div className="row mainbody mh-100">
                    <div className="col-4 mh-100 p-0 bg-dark text-white"><Sidebar titles={questData.map(item => item.questTitle)} /></div>
                    <div className="col-8 mh-100 bg-secondary" ><QuestCard /></div>
                </div>
            </div>
        );
    }
}