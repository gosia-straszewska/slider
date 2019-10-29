import React, { Component } from 'react';
import '../scss/main.scss';
import { TeamMember } from './TeamMember';

export class Team extends Component {
    render() {
        return (
            <div className="main-page">
                <h1>
                    Meet our team
                </h1>
                <TeamMember/>
            </div>
        )
    }
}