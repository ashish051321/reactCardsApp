import React, { Component } from 'react';

export default class Sidebar extends Component {

    render() {
        return (
            <div className="pt-2">

                <ul className="w-100 list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>

            </div>
        );
    }
}