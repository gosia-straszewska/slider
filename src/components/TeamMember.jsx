import React, { Component } from 'react';
import '../scss/main.scss';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


export class TeamMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentID: "0",
            on: false,
        }
        this.handlerClick = this.handlerClick.bind(this);
        this.handlerCancel = this.handlerCancel.bind(this);
    };

    loadMembersFromServer() {
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

    handlerClick(e) {
        console.log(e.currentTarget.dataset.id);
        this.setState({
            currentID: e.currentTarget.dataset.id,
            on: true,
        });
    }

    handlerCancel() {
        this.setState({
            currentID: 0,
            on: false,
        });
    }

    render() {
        console.log(this.state.items, typeof (this.state.currentID), this.state.items[this.state.currentID - 1]);

        const { items, currentID, on } = this.state;
        const slideNumb = Number(currentID)
        console.log(slideNumb, this.state.on)

        return (
            <div className="team-body">
                <div className="team-container">
                    {items.map(item => (
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
                {on ?
                //pobieram id slidu przez klikniecie w wizytówkę i ustawiam id w SlideIndex jako pierwszy slide w karuzeli
                    <Slider slideIndex={slideNumb} className="slider-wrapper" onSlideChange={event => console.log(event.slideIndex)}>
                        {items.map((item, index) => <div key={index} className="slider-content">
                            <div className="cancel">
                                <div className="button" onClick={this.handlerCancel}></div>
                            </div>
                            <div className="inner">
                                <p className="position">{item.position}</p>
                                <p className="name">{item.name}</p>
                            </div>
                        </div>)}
                    </Slider> : null}
            </div>
        )
    }
}