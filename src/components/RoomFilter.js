import React from 'react'
import Title from './Title'
import {RoomConsumer} from "../context"

const getUniqueValue=(items,value)=>{
   return [...new Set(items.map(item=>item[value]))]
}

function RoomFilter({rooms}) {
    
  return (
      <RoomConsumer>
          {value=>{
              const{HandleChange,capacity,price,type,breakfast,minPrice,maxPrice}=value;
              let types=getUniqueValue(rooms,"type")
              types=[...types,"all"]
              let capacities=getUniqueValue(rooms,"capacity")
              

              return(
               <section className="filter-container">
               <Title title="Search Room" />
               <form className="filter-form">
                   <div className="form-group">
                       <label htmlFor="type">Type</label>
                       <select className="form-control" name="type" value={type} id="type" onChange={HandleChange}>
{types.map((item,index)=>{ return <option value={item} key={index}>
    {item}
</option>})}
                       </select>
                   </div>
                   <div className="form-group">
                       <label htmlFor="capacity">Guests</label>
                       <select className="form-control" name="capacity" value={capacity} id="capacity" onChange={HandleChange}>
{capacities.map((item,index)=>{ return <option value={item} key={index}>
    {item}
</option>})}
                       </select>
                   </div>
                   <div className="form-group">
                       <label htmlFor="price">$:{price} </label>
                       <input id="price" className="form-control" type="range" value={price} name="price" max={maxPrice} min={minPrice} onChange={HandleChange}/>
                   </div>
         <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={HandleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          </div>

               </form>
       
               
           </section>
          )}}
         

      </RoomConsumer>
    
  )
}

export default RoomFilter