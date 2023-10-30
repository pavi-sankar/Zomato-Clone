import React from 'react'
import FilterSection from '../common/filterSection/FilterSection'
import DeliveryCollections from './delivery_collections/DeliveryCollections'
import TopBrands from './TopBrands/TopBrands'

function Delivery() {

  const filterItems = [
    {
      id: 1,
      icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters",
    },
    { id: 2, title: "4.0+" },
    { id: 3, title: "Pure Veg" },
    { id: 4, title: "Cuisines" },
  ];

  return (
    <div className='delivery-container'>
        <FilterSection filterlist={filterItems} />
        <DeliveryCollections carousal="collection" />
        <DeliveryCollections carousal="topbrands" />
        <TopBrands />
    </div>
  )
}

export default Delivery