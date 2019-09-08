import React, { Component } from 'react';

export default class Ans extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Answer
                </div>
                <div className="card-body">
                    <pre>
                        Methods and instance variables are known as members.

                        Public:
                        Public members are visible in the same package as well as the outside package that is for other packages.

                        Private:
                        Private members are visible in the same class only and not for the other classes in the same package as well as classes in the outside packages.
                        </pre>
                </div>
            </div>
        );
    }
}