import React, { Component } from 'react';
import items from "./data"
//import {useParams} from "react-router-dom"
//import SingleRoom from './pages/SingleRoom';

const RoomContext=React.createContext();

class RoomProvider extends Component {
   state={
     rooms:[],
     sortRooms:[],
     featureRooms:[],
     loading:true,
     breakfast:false,
     price:0,
     maxPrice:0,
     minPrice:0,
     type:"all",
     capacity:1,
   } 
   componentDidMount(){
    
   
     let rooms=this.formatData(items);
     let maxPrice= Math.max(...rooms.map(room=>room.price))
     let featureRooms=rooms.filter(room=>room.featured===true);
     this.setState({
      featureRooms,rooms,sortRooms:rooms,
      loading:false,
      price:maxPrice,
      maxPrice

     }
       
     )

   }
   HandleChange=e=>{
     let target=e.target
     let name=target.name
     let value=target.type === "checkbox"?target.checked:target.value
     this.setState({
       [name]:value
     },this.filterData)
   }
   filterData(){
     let{rooms,capacity,price,breakfast,type}=this.state;
     capacity=parseInt(capacity)
     price=parseInt(price)
     let tempRooms=[...rooms];
     if(type!=="all"){
       tempRooms=tempRooms.filter((room)=>room.type===type)
      
       }
       if(capacity!==1){
         tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
       }
       tempRooms=tempRooms.filter(room=>room.price<=price)
       if(breakfast){
        tempRooms=tempRooms.filter(room=>room.breakfast===true)
       }
       
       this.setState({
        sortRooms:tempRooms,
     })

     }
  
   formatData(items){
     let tempItems=items.map(item=>{
        let id=item.sys.id;
        let images=item.fields.images.map(image=>
          image.fields.file.url);
        let room={...item.fields,images,id}
        return room;  
     })
     return tempItems;
   }
   getRoom=(slug)=>{
     
     const tempRooms=[...this.state.rooms]
     const room=tempRooms.find(room=>room.slug===slug)

     return room

   }
  render() {
    return (
      <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,HandleChange:this.HandleChange}}>
          {this.props.children}
        
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer=RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };