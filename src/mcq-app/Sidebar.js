import React, { Component } from 'react';

export default class Sidebar extends Component {

    render() {
        return (
            <div className="pt-2">

                <ul className="w-100 list-group list-group-flush">
                    {this.props.titles.map(title =>
                        (<li onClick={() =>{alert(title+' - was clicked !');}} className="list-group-item">{title}</li>))}
                </ul>

            </div>
        );
    }
}