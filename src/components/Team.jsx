import React, { Component } from 'react';
import '../scss/main.scss';
import { TeamMember } from './TeamMember';

export class Team extends Component {
    render() {
        return (
            <div className="team-container">
                <h1>
                    Meet our team
                </h1>
                <div>
                    <TeamMember/>
                </div>
            </div>
        )
    }
}