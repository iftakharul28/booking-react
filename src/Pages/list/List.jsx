import React, { useEffect, useState } from 'react';
import { Hero, SearchItem } from '../../components';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';

function List() {
  const location = useLocation();
  const [openDateOne, setOpenDateOne] = useState(false);
  const [openDateTwo, setOpenDateTwo] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  // const [date, setDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection',
  //   },
  // ]);
  // Sticky Menu Area

  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const listSearch = document.querySelector('.list__search');
    const listResult = document.querySelector('.list__result');
    const footer = document.querySelector('.footer');
    console.log(listResult.scrollHeight);

    const scrollTop = window.scrollY;

    if (scrollTop >= 120) {
      if (listSearch.clientHeight + scrollTop <= listResult.clientHeight) {
        listSearch.classList.add('list__search--sticky');
      } else {
        listSearch.classList.remove('list__search--sticky');
      }
    } else {
      listSearch.classList.remove('list__search--sticky');
    }
  };
  return (
    <>
      <Hero type="list" />
      <section className="list">
        <div className="container">
          <div className="list__wrapper">
            <div className="list__search-wrapper">
              <div className="list__search">
                <h1 className="list__heading">Search</h1>
                <div className="list__item">
                  <h4 className="list__item-text">Destination</h4>
                  <input
                    className="list__item-input"
                    placeholder={destination}
                    type="text"
                  />
                </div>
                <div className="list__item">
                  <h4 className="list__item-text">Check-in Date</h4>
                  <div
                    className="list__item-input"
                    onClick={() => setOpenDateOne(!openDateOne)}
                  >{`${format(date[0].startDate, 'dd/MM/yyyy')}`}</div>
                  {openDateOne && (
                    <DateRange
                      className="list__item-date"
                      onChange={(item) => setDate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                    />
                  )}
                </div>
                <div className="list__item">
                  <h4 className="list__item-text">Check-out Date</h4>
                  <div
                    className="list__item-input"
                    onClick={() => setOpenDateTwo(!openDateTwo)}
                  >{`${format(date[0].endDate, 'dd/MM/yyyy')}`}</div>
                  {openDateTwo && (
                    <DateRange
                      className="list__item-date"
                      onChange={(item) => setDate([item.selection])}
                      minDate={new Date()}
                      ranges={date}
                    />
                  )}
                </div>
                <div className="list__item">
                  <h3 className='list__item-heading"'>Options</h3>
                  <div className="list__options">
                    <div className="list__option-item">
                      <h4 className="list__option-text">
                        4 Min price <small>per night</small>
                      </h4>
                      <input type="number" className="list__option-input" />
                    </div>
                    <div className="list__option-item">
                      <h4 className="list__option-text">
                        Max price <small>per night</small>
                      </h4>
                      <input type="number" className="list__option-input" />
                    </div>
                    <div className="list__option-item">
                      <h4 className="list__option-text">Adult</h4>
                      <input
                        type="number"
                        min={1}
                        className="list__option-input"
                        placeholder={options.adult}
                      />
                    </div>
                    <div className="list__option-item">
                      <h4 className="list__option-text">Children</h4>
                      <input
                        type="number"
                        min={0}
                        className="list__option-input"
                        placeholder={options.childern}
                      />
                    </div>
                    <div className="list__option-item">
                      <h4 className="list__option-text">Room</h4>
                      <input
                        type="number"
                        min={1}
                        className="list__option-input"
                        placeholder={options.room}
                      />
                    </div>
                  </div>
                </div>
                <button className="list__button">Search</button>
              </div>
            </div>
            <div className="list__result">
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default List;
