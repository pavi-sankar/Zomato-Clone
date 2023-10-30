import React from 'react'
import "./filtersection.css"

function FilterSection({ filterlist }) {
  return (
  <div className='filter-container'>
    <ul className="filters max-width">
      {filterlist &&
        filterlist.map((item,index) => (
          <li className="filter-list" key={index}>
            {item.icon && item.icon}
            <div className="filter-title">
              {item.title}
            </div>
          </li>
        ))}
    </ul>
  </div>  
  );
}


export default FilterSection