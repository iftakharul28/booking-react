import React from 'react';

const FeaturedProperties = () => {
  return (
    <div className="featured-propertie">
      <div className="container">
        <h2 className="featured-propertie__heading">Homes guests love</h2>
        <div className="featured-propertie__wrappper">
          <div className="featured-propertie__item">
            <div className="featured-propertie__image-wrapper">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                alt=""
                className="featured-propertie__image"
              />
            </div>
            <div className="featured-propertie__contents">
              <h3 className="featured-propertie__name">
                Aparthotel Stare Miasto
              </h3>
              <h4 className="featured-propertie__city">Madrid</h4>
              <p className="featured-propertie__price">Starting from $120</p>
              <div className="featured-propertie__rating-wrapper">
                <button className="featured-propertie__rating-number">
                  8.9
                </button>
                <p className="featured-propertie__rating-text">Excellent</p>
              </div>
            </div>
          </div>
          <div className="featured-propertie__item">
            <div className="featured-propertie__image-wrapper">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
                alt=""
                className="featured-propertie__image"
              />
            </div>
            <div className="featured-propertie__contents">
              <h3 className="featured-propertie__name">
                Comfort Suites Airport
              </h3>
              <h4 className="featured-propertie__city">Austin</h4>
              <p className="featured-propertie__price">Starting from $140</p>
              <div className="featured-propertie__rating-wrapper">
                <button className="featured-propertie__rating-number">
                  9.3
                </button>
                <p className="featured-propertie__rating-text">Exceptional</p>
              </div>
            </div>
          </div>
          <div className="featured-propertie__item">
            <div className="featured-propertie__image-wrapper">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
                alt=""
                className="featured-propertie__image"
              />
            </div>
            <div className="featured-propertie__contents">
              <h3 className="featured-propertie__name">Four Seasons Hotel</h3>
              <h4 className="featured-propertie__city">Lisbon</h4>
              <p className="featured-propertie__price">Starting from $99</p>
              <div className="featured-propertie__rating-wrapper">
                <button className="featured-propertie__rating-number">
                  8.8
                </button>
                <p className="featured-propertie__rating-text">Excellent</p>
              </div>
            </div>
          </div>
          <div className="featured-propertie__item">
            <div className="featured-propertie__image-wrapper">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
                alt=""
                className="featured-propertie__image"
              />
            </div>
            <div className="featured-propertie__contents">
              <h3 className="featured-propertie__name">Hilton Garden Inn</h3>
              <h4 className="featured-propertie__city">Berlin</h4>
              <p className="featured-propertie__price">Starting from $105</p>
              <div className="featured-propertie__rating-wrapper">
                <button className="featured-propertie__rating-number">
                  8.9
                </button>
                <p className="featured-propertie__rating-text">Excellent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
