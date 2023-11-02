import React from 'react'
import "./dining.css"
import Collections from '../common/Collections/Collections';
import FilterSection from '../common/filterSection/FilterSection'
import Explore from '../common/exploreSection/Explore';

function DiningOut({searchQuery}) {

  const collectionList = [
    {
      id: 1, cover: "https://b.zmtcdn.com/data/collections/888af0efb05704bb3fcb19b14977b5b9_1685700703.png?output-format=webp", title: "25 Vibrant Places for Pride Month", places: "24 places"
    },
    {
      id: 2, cover: "https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg?output-format=webp", title: "Winners of Zomato Restaurant Awards", places: "12 places"
    },
    {
      id: 3, cover: "https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674839786.jpg?output-format=webp", title: "16 Best Bars & Pubs", places: "14 places"
    },
    {
      id: 4, cover: "https://b.zmtcdn.com/data/collections/66bee1c025922a59b8b1ab69a3a6b187_1675082109.jpg?output-format=webp", title: "13 Serene Rooftop Places", places: "12 places"
    },
    {
      id: 5, cover: "https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252825.jpg?output-format=webp", title: "11 Best Insta-worthy Places", places: "11 places"
    },
    {
      id: 6, cover: "https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054253.jpg?output-format=webp", title: "18 Blissful Breakfast Places", places: "20 places"
    },
    {
      id: 7, cover: "https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674839413.jpg", title: "12 Newly Opened Restaurants", places: "12 places"
    },
    {
      id: 8, cover: "https://b.zmtcdn.com/data/collections/5fee3cb5e97bbf2cfae4caced1d25686_1674839495.jpg", title: "8 Great Buffets", places: "9 places"
    },
  ];

  const filterItems = [
    {
      id: 1,
      icon: <i className="fi fi-rr-settings-sliders"></i>,
      title: "Filters",
    },
    { id: 2, title: "4.0+" },
    { id: 3, title: "Continental" },
    { id: 4, title: "Outdoor" },
    { id: 5, title: "Open now"}
  ];

  return (
    <div className='diningout-container'>
      <Collections collectionList={collectionList} />
      <FilterSection filterlist={filterItems} />
      <div className='max-width add'>
        <img src='https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png' alt='add' className='add-img' />
      </div>
      <Explore searchQuery={searchQuery} />
    </div>
  )
}

export default DiningOut