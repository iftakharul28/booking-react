import React from 'react';

import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaLeaf, FaUmbrellaBeach } from 'react-icons/fa';
const SearchItem = () => {
  return (
    <div className="search">
      <div className="search__first-column">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
          alt=""
          className="search__image"
        />
      </div>
      <div className="search__second-column">
        <div className="search__title-wrapper">
          <h2 className="search__title">Tower Street Apartments</h2>
          <div className="search__starts">
            <AiFillStar color="#febb02" size={16} />
            <AiFillStar color="#febb02" size={16} />
            <AiOutlineStar color="#febb02" size={16} />
          </div>
        </div>
        <div className="search__item">
          <a className="search__place" href="#">
            <span>Dubai</span>
          </a>
          <span className="search__location">Show on map</span>
          <span className="search__distance">500m from center</span>
          <span className="search__taxi">Free airport taxi</span>
        </div>
        <p className="search__subtitle">
          <FaUmbrellaBeach />
          Studio Apartment with Air conditioning
        </p>
        <p className="search__subtitle">
          <FaLeaf />
          Travel Sustainable property
        </p>
        <p className="search__text">
          Among the facilities of this property are a restaurant, a 24-hour
          front desk and room service, along with free WiFi.Hotel Sea Crown is
          located just 1.5 km from the famous Sugandha Beach. Free WiFi access
          is available.
        </p>
      </div>
      <div className="search__third-column">
        <div className="search__rating-wrapper">
          <p className="search__rating-text">Excellent</p>
          <button className="search__rating">8.9</button>
        </div>
        <div className="search__detail">
          <p className="search__price">$112</p>
          <button className="search__checkButton">book now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
