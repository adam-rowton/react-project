import React from 'react'


export default function Card(prop) {
    
    return (
        <div className="cardObject">
        
            <img className="picture" src={prop.item.imageUrl}/>
            <div className="details">
            
                <div className="location">
                    <img className="locIcon" src='./images/japan.png'/>
                    <span>{prop.item.location}</span> 
                    <span className="mapsLink"><a href={prop.item.googleMapsUrl}>Google maps</a></span>
                </div>
            
                <h3>{prop.item.title}</h3>
                <p>{prop.item.startDate}</p>
                <p className="description">{prop.item.description}</p>
                
            </div>
        </div>
        
    )}