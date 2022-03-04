import React, { Component } from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from "react-router-dom"

export default class Error extends Component {
  render() {
    return (
      <Hero>
          <Banner title="404" subtitle={`Page Your  Requested  Not Found`} >
              
              <Link to="/" className="btn-primary">Return Home</Link>
          </Banner>
      </Hero>
        
    );
  }
}
