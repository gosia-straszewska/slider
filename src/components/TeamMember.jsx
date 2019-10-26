import React, { Component } from 'react';
import '../scss/main.scss';

export class TeamMember extends Component {
    render() {
        return (
            <div className='team-member'>
            <div className='container'>
                <div className='team-member-img'>

                    <img src="https://source.unsplash.com/random/200x200" alt=""/>
                </div>
                <div className='team-member-mail'></div>
                <h2 className='team-member-name'>Imię i Nazwisko</h2>
                <h3 className='team-member-position'>Stanowisko</h3>
                <p className='team-member-localization'>Lokalizacja</p>
            </div>
            </div>
        )
    }
}