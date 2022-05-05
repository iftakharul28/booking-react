import React from 'react';

const PropertyList = () => {
  return (
    <div className="property-list">
      <div className="container">
        <h2 className="property-list__heading">Browse by property type</h2>
        <div className="property-list__wrapper">
          <div className="property-list__item">
            <img
              src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
              alt=""
              className="property-list__image"
            />
            <div className="property-list__text-wrapper">
              <h3 className="property-list__item-heading">Hotels</h3>
              <p className="property-list__item-subheading">233 hotels</p>
            </div>
          </div>
          <div className="property-list__item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
              alt=""
              className="property-list__image"
            />
            <div className="property-list__text-wrapper">
              <h3 className="property-list__item-heading">Apartments</h3>
              <p className="property-list__item-subheading">2331 hotels</p>
            </div>
          </div>
          <div className="property-list__item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
              alt=""
              className="property-list__image"
            />
            <div className="property-list__text-wrapper">
              <h3 className="property-list__item-heading">Resorts</h3>
              <p className="property-list__item-subheading">2331 hotels</p>
            </div>
          </div>
          <div className="property-list__item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
              alt=""
              className="property-list__image"
            />
            <div className="property-list__text-wrapper">
              <h3 className="property-list__item-heading">Villas</h3>
              <p className="property-list__item-subheading">2331 hotels</p>
            </div>
          </div>
          <div className="property-list__item">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
              alt=""
              className="property-list__image"
            />
            <div className="property-list__text-wrapper">
              <h3 className="property-list__item-heading">Cabins</h3>
              <p className="property-list__item-subheading">2331 hotels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
