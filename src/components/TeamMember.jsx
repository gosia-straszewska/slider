import React, { Component } from 'react';
import '../scss/main.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


export class TeamMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentID: null,
        }
        this.handlerClick =this.handlerClick.bind(this);
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

    handlerClick(e){
        // const id = e.currentTarget.dataset.id;
        console.log(e.currentTarget.dataset.id);
        this.setState({
            currentID: e.currentTarget.dataset.id
        });

        
        
        
    }
    render() {
        console.log(this.state.items);
        console.log(this.state.currentID, this.state.items[this.state.currentID-1]);

        const {items} = this.state;

        return (
            <div>
            <div className="team-container">
                {items.map(item =>( 
                <div className='team-member' key={item.id} data-id={item.id} onClick={this.handlerClick} >
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
                <Slider >
                    {items.map((item, index) => <div key={index}>
                        <div>
                            <h2>{item.position}</h2>
                            <p>{item.name}</p>
                        </div>
                    </div>)}
                </Slider>
            </div>
        )
    }
}