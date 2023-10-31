import React from 'react'
import FilterSection from '../common/filterSection/FilterSection'
import DeliveryCollections from './delivery_collections/DeliveryCollections'
import Explore from '../common/exploreSection/Explore';

function Delivery() {

  const filterItems = [
    {
      id: 1,
      icon: <i class="fi fi-rr-settings-sliders"></i>,
      title: "Filters",
    },
    { id: 2, title: "4.0+" },
    { id: 3, title: "Pure Veg" },
    { id: 4, title: "Cuisines  v" },
  ];

  return (
    <div className='delivery-container'>
        <FilterSection filterlist={filterItems} />
        <DeliveryCollections carousal={true} />
        <DeliveryCollections carousal={false} />
        <Explore />
    </div>
  )
}

export default Delivery