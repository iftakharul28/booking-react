import React, { useState } from 'react';
import { BiBed, BiTaxi, BiCalendar } from 'react-icons/bi';
import { AiOutlineCar } from 'react-icons/ai';
import { MdOutlineBrightnessAuto } from 'react-icons/md';
import { IoAirplaneOutline } from 'react-icons/io5';
import { IoMdPeople } from 'react-icons/io';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
const Hero = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openOption, setopenOption] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    childern: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="hero">
      <div className="container">
        <div
          className={
            type === 'list'
              ? 'hero__wrapper hero__wrapper--list'
              : 'hero__wrapper'
          }
        >
          <div className="hero__list-items">
            <div className="hero__list-item-wrapper">
              <div className="hero__list-item hero__list-item--active">
                <BiBed size={24} />
                <span>Stays</span>
              </div>
              <div className="hero__list-item">
                <IoAirplaneOutline size={24} />
                <span>Flights</span>
              </div>
              <div className="hero__list-item">
                <AiOutlineCar size={24} />
                <span>Car rentals</span>
              </div>
              <div className="hero__list-item">
                <MdOutlineBrightnessAuto size={24} />
                <span>Attractions</span>
              </div>
              <div className="hero__list-item">
                <BiTaxi size={24} />
                <span>Airport taxis</span>
              </div>
            </div>
          </div>
          {type !== 'list' && (
            <>
              <div className="hero__texts">
                <h1 className="hero__heading">
                  A lifetime of discounts? It's Genius.
                </h1>
                <p className="hero__subheading">
                  Get rewarded for your travels – unlock instant savings of 10%
                  or more with a free Booking.com account
                </p>
              </div>
              <button className="hero__button">Sign in / Register</button>
              <div className="hero__search-wrapper">
                <div className="hero__search-item">
                  <BiBed className="hero__search-icon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="hero__search-input"
                  />
                </div>
                <div className="hero__search-item">
                  <BiCalendar className="hero__search-icon" />
                  <p
                    className="hero__search-text"
                    onClick={() => setOpenDate(!openDate)}
                  >{`${format(date[0].startDate, 'dd/MM/yyyy')} - ${format(
                    date[0].endDate,
                    'dd/MM/yyyy'
                  )}`}</p>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="hero__search-date"
                    />
                  )}
                </div>
                <div className="hero__search-item">
                  <IoMdPeople className="hero__search-icon" />
                  <p
                    className="hero__search-text"
                    onClick={() => setopenOption(!openOption)}
                  >{`${options.adult} adult , ${options.childern} childern , ${options.room} room`}</p>

                  {openOption && (
                    <div className="hero__search-options-wrapper">
                      <div className="hero__search-options">
                        <p className="hero__search-options-text">adult</p>
                        <button
                          disabled={options.adult <= 1}
                          className="hero__search-options-button"
                          onClick={() => handleOption('adult', 'd')}
                        >
                          -
                        </button>
                        <p className="hero__search-options-number">
                          {options.adult}
                        </p>
                        <button
                          className="hero__search-options-button"
                          onClick={() => handleOption('adult', 'i')}
                        >
                          +
                        </button>
                      </div>
                      <div className="hero__search-options">
                        <p className="hero__search-options-text">childern</p>
                        <button
                          disabled={options.childern <= 0}
                          className="hero__search-options-button"
                          onClick={() => handleOption('childern', 'd')}
                        >
                          -
                        </button>
                        <p className="hero__search-options-number">
                          {options.childern}
                        </p>
                        <button
                          className="hero__search-options-button"
                          onClick={() => handleOption('childern', 'i')}
                        >
                          +
                        </button>
                      </div>
                      <div className="hero__search-options">
                        <p className="hero__search-options-text">room</p>
                        <button
                          disabled={options.room <= 1}
                          className="hero__search-options-button"
                          onClick={() => handleOption('room', 'd')}
                        >
                          -
                        </button>
                        <p className="hero__search-options-number">
                          {options.room}
                        </p>
                        <button
                          className="hero__search-options-button"
                          onClick={() => handleOption('room', 'i')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <button className="hero__search-button">search</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
