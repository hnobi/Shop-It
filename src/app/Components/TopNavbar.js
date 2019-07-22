import React, {useState, useEffect} from 'react';
import countryIcon from "../asset/images/gbr.png";
import notificationImg from "../asset/images/icons-bag.png";
import './../asset/scss/top-navbar.scss';



const TopNavbar = () => {
  const references = ['Daily Deals', 'Sell', 'Help & Contact'];
  return (
    <div>
      <div className="top-nav">
        <div className="top-nav__registration">
          Hi!<span> Sign in</span>  or  <span>Register</span>
        </div>

        <div className="top-nav__quick-reference">
          <ul>
            {references.map((reference, index) => {
              return <li key={index}>{reference}</li>
            })
            }
          </ul>
        </div>

        <div className="top-nav__user-info">
          <div className="top-nav__user-info--country">
            <img src={countryIcon} alt="country logo" />
            <span> &euro; GBP</span>
          </div>

          <div className="top-nav__user-info--cart">
            <div className="notification" >
              <img src={notificationImg} alt="country logo" />
              <span className="badge">3</span>
            </div>
            <span> Your bag :  &euro; 3.99</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopNavbar;