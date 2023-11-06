import React from 'react'
import "./nightlife.css"
import Collections from '../common/Collections/Collections';
import FilterSection from '../common/filterSection/FilterSection';
import Explore from "../common/exploreSection/Explore"

function NightLife({searchQuery}) {

  const collectionList = [
    {
      id: 1, cover: "https://b.zmtcdn.com/data/pictures/2/18580202/cae14add668c63e4d0a35ed6dc244ce5_featured_v2.jpg", title: "25 Vibrant Places for Pride Month", places: "24 places"
    },
    {
      id: 2, cover: "https://cdn.pixabay.com/photo/2021/08/21/01/53/bars-6561626_640.jpg", title: "China Town", places: "2 places"
    },
    {
      id: 3, cover: "https://cdn.pixabay.com/photo/2016/02/23/23/32/beer-1218742_640.jpg", title: "14 Best Bars & Pubs", places: "14 places"
    },
    {
      id: 4, cover: "https://cdn.pixabay.com/photo/2022/01/07/19/16/rooftop-cafe-6922425_1280.jpg", title: "Night Rooftop Places", places: "10 places"
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
    { id: 3, title: "Alcohol" },
    { id: 4, title: "Pubs & Bars" },
    { id: 5, title: "Open now"}
  ];

  return (
    <div>
      <Collections collectionList={collectionList} />
      <FilterSection filterlist={filterItems} />
      <div className='max-width add'>
        <img src='https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png' alt='add' className='add-img' />
      </div>
      <Explore searchQuery={searchQuery} />
    </div>
  )
}

export default NightLife