import React from 'react'
import "./explore.css"
import { ExploreData } from '../../../../data/ExploreData'

function Explore({searchQuery}) {

  const filtered = ExploreData.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const categoryMatch = item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return titleMatch || categoryMatch;
  });

  return (
    <div>
      <div className="max-width explore-section">
      <h1 className='explore-title'>Delivery restaurants Near Banglore</h1>
        <div className='cards-grid'>
        {filtered.map((item, index) => (
          <div className="explore-card-section" key={index}>
            <div className='explore-card-cover'>
              <img src={item.cover} alt={item.title} className='card-img'/></div>
            <div className='card-footer-section'>
              <div className='restaurant-title-rating'>
                <div className='restaurant-title'>{item.title}</div>
                <div className='restaurant-rating abs-center'>{item.rating} <i className="fi fi-rr-star"></i></div>
              </div>
              <div className='category-time'>
                <p className='exlpore-card-category'>{item.category}</p>
                <div className='explore-card-time'>{item.time}</div>
              </div>  
            </div>   
          </div>
        ))}
        </div>
      </div>
    </div>  
  )
}

export default Explore 