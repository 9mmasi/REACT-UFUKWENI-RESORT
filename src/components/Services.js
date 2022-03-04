import React, { Component } from 'react';
import Title from './Title';
import{FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
        {
            icon:<FaCocktail />,
            title:"We Offer Different CockTail flavour",
            info:"combination of spirits, or one or more spirits mixed with other ingredients such as fruit juice, flavored syrup, or cream"
        },
        {
            icon:<FaShuttleVan />,
            title:"Free Transportation",
            info:"fare free from the Airpot of your Arrival to the Hotel and from the Hotel to Airpot on Departure Time"
        },
        {
            icon:<FaBeer />,
            title:"Strongest Brand Beer",
            info:" carbonated, fermented alcoholic beverage that is usually made from malted cereal grain (especially barley), is flavored with hops"
        },
        {
            icon:<FaHiking />,
            title:"Endless and Forever Hiking",
            info:"A wonderful way to immerse yourself in the outdoors. Transported by your own two feet and carrying only what you need for the day on your back"
        }
        
    ]}
    render() {
        return (
            <div>
                <Title title="Services" />
                <div className="services-center">
                            {this.state.services.map((items,index)=>(<article key={index} className="services">
                                                        <span>{items.icon}</span>
                                                        <h6>{items.title}</h6>
                                                        <p>{items.info}</p>

                                                  </article>))}
                </div>
            </div> 
        )
    }
}


