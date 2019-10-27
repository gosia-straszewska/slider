import React, { Component } from 'react';
import '../scss/main.scss';

export class TeamMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    };

    loadMembersFromServer (){
        fetch("http://localhost:3000/people")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                })
            });
    };

    componentDidMount() {
        this.loadMembersFromServer();
    };

    render() {
        console.log(this.state.items);
        const {items} = this.state;

        return (
            <div className="team-container">
                {items.map(item =>( 
                <div className='team-member'>
                    <div className='container'>
                        <div className='team-member-img mail'>
                            <img src={item.img} alt="" />
                        </div>
                        <h2 className='team-member-name'>{item.name}</h2>
                        <h3 className='team-member-position'>{item.position}</h3>
                        <p className='team-member-localization'>{item.localization}</p>
                    </div>
                </div>
                ))}
            </div>
        )
    }
}