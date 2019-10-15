import React from 'react';

import { Card, Horizontal, Row, Col } from 'react-materialize';

const Header = () => {
  return (
    <div className="header-event">
      <div className="header-event-bg"></div>
        <div className="header-event-infos">
          <p>NOV.<br />12</p>
          <br />
          <p>DataJob Paris 2019</p>
          <br />
          <p>par DataJob <button>Suivre</button></p>
          <br />
          <p>Payant</p>
        </div>
        <div className="header-event-bottom">
          <div className="header-event-bottom-icons">
            <img src="https://img.icons8.com/ios-glyphs/24/000000/share.png" />
            <img src="https://img.icons8.com/ios/24/000000/like.png" />
          </div>
          <div className="header-event-bottom-status">
            <p>A venir</p>
          </div>
        </div>
        
    </div>
  ); 
}

export default Header;


