import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import{Link}from "react-router-dom";
import Services from '../components/Services';
import FeatureRoom from '../components/FeatureRoom';

export default class Home extends Component {
  render() {
    return (

        <React.Fragment>
            <Hero hero='defaultHero'>
          <Banner title="Luxurious Rooms" subtitle='Deluxe Room starting at $300'>
              <Link to="/rooms" className="btn-primary">Our Rooms</Link>
          </Banner>
        
      </Hero>
      <Services>
          
      </Services>
      <FeatureRoom />
        </React.Fragment>
      
    );
  }
}
