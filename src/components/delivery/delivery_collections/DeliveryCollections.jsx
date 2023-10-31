import React from 'react';
import Slider from 'react-slick';
import "./deliverycollections.css"
import NextArrow from "../../common/carousalArrows/NextArrow";
import PrevArrow from "../../common/carousalArrows/PrevArrow";

function DeliveryCollections({carousal}) {

  const FoodList = [
    {
      id: 1,
      title: "Dosa",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    },
    {
      id: 2,
      title: "Burger",
      cover:
        "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
      id: 3,
      title: "Biryani",
      cover:
        "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
    },
    {
      id: 4,
      title: "Thali",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    },
    {
      id: 5,
      title: "Pizza",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
      id: 6,
      title: "Chicken",
      cover:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
      id: 7,
      title: "Paneer",
      cover:
        "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
    },
    {
      id: 8,
      title: "Sandwich",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
    },
    {
      id: 9,
      title: "Momos",
      cover:
        "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    },
    {
      id: 10,
      title: "Noodles",
      cover:
        "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    },
    {
      id: 11,
      title: "Rolls",
      cover:
        "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
      id: 12,
      title: "Cake",
      cover:
        "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    }
  ];
  
  const brands = [
    {
    id: 1,
    title: "McDonalds",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/775f928725d1a9dd80422632de22c224_1611377090.png?output-format=webp",
  },
  {
    id: 2,
    title: "Dominos",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252811.png?output-format=webp",
  },
  {
    id: 3,
    title: "Pizza Hut",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
  },
  {
    id: 4,
    title: "Burger King",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188299.png?output-format=webp",
  },
  {
    id: 5,
    title: "KFC",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613215152.png?output-format=webp",
  },
  {
    id: 6,
    title: "A2B",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505652.png?output-format=webp",
  },
  {
    id: 7,
    title: "Fresh Menu",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/dc49d77dce0ee7fc8e495fa35be0e747_1648715086.png",
  },
  {
    id: 8,
    title: "Starbucks Coffee",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/b61270c5ac3356384460b1c2a1a35071_1633121736.png?output-format=webp",
  },
  {
    id: 9,
    title: "Subway",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471832.png?output-format=webp",
  },
  {
    id: 10,
    title: "Haldiram's",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png",
  }
];


  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className={carousal ? "delivery-collection-container" : "brands-collection-container"}>
      <div className="max-width">
        <h1 className="collection-title">{carousal ? "Inspiration for your first order" : "Top brands for you"}</h1>
        <Slider {...settings}>
          {carousal ? FoodList.map((item) => (
            <div key={item.id}>
              <div className="delivery-item-cover">
                <img src={item.cover} className="delivery-item-image"alt={item.title}/>
              </div>
              <div className="delivery-item-title">
                {item.title}
              </div>
            </div>
          )) : brands.map((item) => (
            <div key={item.id}>
              <div className="delivery-item-cover">
                <img src={item.cover} className="delivery-item-image"alt={item.title}/>
              </div>
              <div className="brand-item-title">
                {item.title}
              </div>
            </div>
          )) }
        </Slider>
      </div>
    </div>
  );
}
  
  export default DeliveryCollections;
  