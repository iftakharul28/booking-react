import React, { useState } from 'react';
import { Hero } from '../../components';

import { IoCloseCircle, IoLocationSharp } from 'react-icons/io5';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
      alt: 'image1',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
      alt: 'image2',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
      alt: 'image3',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
      alt: 'image3',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
      alt: 'image4',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
      alt: 'image5',
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const body = document.querySelector('body');
  if (open === true) {
    body.classList.add('body--hidden');
  } else {
    body.classList.remove('body--hidden');
  }
  const handleMove = (direction) => {
    let newSlideNumber;
    const length = photos.length - '1';
    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? length : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === length ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Hero type="list" />
      <section className="hotel">
        <div className="container">
          {open && (
            <div className="hotel__slider">
              <div className="hotel__slider-wrapper">
                <IoCloseCircle
                  className="hotel__slider-close"
                  onClick={() => setOpen(false)}
                />
                <AiFillLeftCircle
                  className="hotel__slider-arrow hotel__slider-arrow--left"
                  onClick={() => handleMove('l')}
                />
                <div className="hotel__slider-image-wrapper">
                  <img
                    src={photos[slideNumber].src}
                    alt={photos[slideNumber].alt}
                    className="hotel__slider-image"
                  />
                </div>

                <AiFillRightCircle
                  className="hotel__slider-arrow hotel__slider-arrow--right"
                  onClick={() => handleMove('r')}
                />
              </div>
            </div>
          )}
          <div className="hotel__wrapper">
            <div className="hotel__first-row">
              <div className="hotel__first-row-details">
                <h1 className="hotel__heading">Tower Street Apartments</h1>
                <div className="hotel__address-wrapper">
                  <IoLocationSharp />
                  <p className="hotel__address">Elton St 125 New york</p>
                </div>
                <h2 className="hotel__distance">
                  Excellent location – 500m from center
                </h2>
                <h3 className="hotel__price-highlight">
                  Book a stay over $114 at this property and get a free airport
                  taxi
                </h3>
              </div>
              <button className="hotel__button">Reserve or Book Now!</button>
            </div>
            <div className="hotel__images">
              {photos.map((photo, i) => (
                <div className="hotel__image-wrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo.src}
                    alt={photo.alt}
                    className="hotel__image"
                  />
                </div>
              ))}
            </div>
            <div className="hotel__details">
              <div className="hotel__details-texts">
                <h1 className="hotel__title">Stay in the heart of City</h1>
                <p className="hotel__desc">
                  Located a 5-minute walk from St. Florian's Gate in Krakow,
                  Tower Street Apartments has accommodations with air
                  conditioning and free WiFi. The units come with hardwood
                  floors and feature a fully equipped kitchenette with a
                  microwave, a flat-screen TV, and a private bathroom with
                  shower and a hairdryer. A fridge is also offered, as well as
                  an electric tea pot and a coffee machine. Popular points of
                  interest near the apartment include Cloth Hall, Main Market
                  Square and Town Hall Tower. The nearest airport is John Paul
                  II International Kraków–Balice, 16.1 km from Tower Street
                  Apartments, and the property offers a paid airport shuttle
                  service.
                </p>
              </div>
              <div className="hotel__details-price">
                <h3 className="hotel__details-time">
                  Perfect for a 9-night stay!
                </h3>
                <p className="hotel__details-rating">
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </p>
                <h4 className="hotel__details-dates">
                  <b>$945</b> (9 nights)
                </h4>
                <button className="hotel__button">Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotel;
