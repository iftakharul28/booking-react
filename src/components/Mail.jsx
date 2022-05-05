import React from 'react';

const Mail = () => {
  return (
    <div className="mail">
      <div className="container">
        <div className="mail__wrapper">
          <h2 className="mail__heading">Save time, save money!</h2>
          <p className="mail__subheading">
            Sign up and we'll send the best deals to you
          </p>
          <div className="mail__input-wrapper">
            <input
              className="mail__input"
              type="text"
              placeholder="Your Email"
            />
            <button className="mail__input-button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
