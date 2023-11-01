import React from 'react'
import "./collections.css"
import Slider from 'react-slick';
import NextArrow from "../carousalArrows/NextArrow"
import PrevArrow from "../carousalArrows/PrevArrow"

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

function Collections({collectionList}) {
  return (
    <div>
        <div className='max-width'>
        <h1>Collections</h1>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Banglore, based on trends
          </div>
          <div className="collection-location">
            <div>All collections in Banglore</div>
            <i className="fi fi-rr-caret-right absolute-center"></i>
          </div>
        </div>
        <Slider {...settings}>
          {collectionList.map((item) => {
            return (
              <div key={item.id}>
                <div className="collection-cover">
                  <img
                    src={item.cover}
                    className="collection-image"
                    alt={item.title}
                  />
                  <div className="gradient-bg"></div>
                  <div className="collection-card-title">{item.title}</div>
                  <div className="collection-card-subtitle">
                    <div>{item.places}</div>
                    <i className="fi fi-rr-caret-right absolute-center"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        </div>
    </div>
  )
}

export default Collections