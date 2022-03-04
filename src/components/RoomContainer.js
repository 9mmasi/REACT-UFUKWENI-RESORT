import React from 'react'
import RoomFilter from "./RoomFilter"
import RoomsList from "./RoomList"
import {RoomConsumer} from "../context"

import Loadings from './loadings'

function RoomContainer() {
    
  return (

    <RoomConsumer>
        {value=>{
            const{loading,rooms,sortRooms}=value;
            if(loading){
                return(<Loadings/>)
            }
            return(
                <React.Fragment>
                     <RoomFilter rooms={rooms}  />
                     <RoomsList rooms={sortRooms} />

                </React.Fragment>
            )
        }}
       
    </RoomConsumer>
  )
}

export default RoomContainer