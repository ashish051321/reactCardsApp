import React, { Component } from 'react';

export default class Sidebar extends Component {

    render() {
        return (
            <div className="pt-2" style={{ overflowY: 'auto' }}>

                <ul className="w-100 list-group list-group-flush">
                    {this.props.titles.map((title, index) =>
                        (<li key={index} onClick={() => { this.props.questSelected(title); }} className="list-group-item">{title}</li>))}
                </ul>

            </div>
        );
    }
}