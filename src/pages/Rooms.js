import React, { Component } from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from "react-router-dom";
import RoomContainer from "../components/RoomContainer"


export default class Rooms extends Component {
  render() {
    return (
      <React.Fragment>
         <Hero hero='roomsHero'>
        <Banner title="Our Room">
            <Link to="/" className="btn-primary">Return Home</Link>
        </Banner>
      </Hero>
      <RoomContainer />
      </React.Fragment>
     
    );
  }
}
