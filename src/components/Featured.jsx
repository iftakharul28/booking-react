import React from 'react';

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="featured__wrapper">
          <div className="featured__item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/349028.webp?k=3a1163fced4ff96ee361d90a70ff20e66cbb37cfd3414d5f79f6f2a24881d420&o="
              alt="
              Abu Dhabi
              "
              className="featured__image"
            />
            <div className="featured__text-wrapper">
              <h2 className="featured__heading">Abu Dhabi</h2>
              <p className="featured__subheading">169 properties</p>
            </div>
          </div>
          <div className="featured__item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/619923.webp?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o="
              alt="Reno"
              className="featured__image"
            />
            <div className="featured__text-wrapper">
              <h2 className="featured__heading">Dubai</h2>
              <p className="featured__subheading">4,278 properties</p>
            </div>
          </div>
          <div className="featured__item">
            <img
              src="https://cf.bstatic.com/xdata/images/city/540x270/654907.webp?k=ad1646e402771be9a1e984c4a4aea71121a2ae474b4bbc99386ccc0ef04f5c7c&o="
              alt="Austin"
              className="featured__image"
            />
            <div className="featured__text-wrapper">
              <h2 className="featured__heading">Manama</h2>
              <p className="featured__subheading">199 properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
