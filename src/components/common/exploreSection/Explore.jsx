import React from 'react'
import "./explore.css"
import { ExploreData } from '../../../../data/ExploreData'

function Explore() {

  return (
    <div>
      <div className="max-width">
      <h1>Delivery restaurants Near Banglore</h1>
        <div className='explore-section'>
        {ExploreData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.cover} alt={item.title} />
            <h4>{item.title}</h4>
            <p>{item.category}</p>
          </div>
        ))}
        </div>
      </div>
    </div>  
  )
}

export default Explore 