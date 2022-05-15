import React from 'react';
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <a href="/">Booking</a>
          </div>
          <div className="header__Link-wrapper">
            <a className="header__Link" href="/register">
              Register
            </a>
            <a className="header__Link" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
