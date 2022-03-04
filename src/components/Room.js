import React from 'react'
import{Link} from "react-router-dom"
import PropTypes from "prop-types"
import defaultImg from '../images/room-12.jpeg'

export default function Room({room}) {
  const{name,slug,price,images}=room;
  
  
  
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]||defaultImg} alt="featureRoom" />
        <div className="price-top">
          <h6>{price}</h6>
          <p>per Night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">Feature</Link>
        <p className="room-info">{name}</p>
      </div>
      
    </article>
  )
}
Room.propTypes={
  room:PropTypes.shape({
    name:PropTypes.string,
    images:PropTypes.arrayOf(PropTypes.string),
    slug:PropTypes.string,
    price:PropTypes.number
  }).isRequired
}
