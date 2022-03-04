import React, { Component } from 'react';
import {  RoomContext } from '../context';
import Loadings from './loadings';
import Room from './Room'
import Title from './Title'
//import {useParams} from "react-router-dom"
export default class FeatureRoom extends Component {
    static contextType=RoomContext;
  render() {
      let {featureRooms:rooms,loading}=this.context;
      rooms=rooms.map(room=>{return <Room key={room.id} room={room}/>}  )
     
    return (
      <React.Fragment>
        <section className="featured-rooms">
          <Title title="Feature Room" />
          <div className="featured-rooms-center">
            {loading ? <Loadings />:rooms}
          </div>
        </section>
        
      </React.Fragment>
        
      
    );
  }
}
