import React from 'react';

const Header = () => {
  return (
    <div className="header-event">
      <div className="header-event-bg"></div>
        <div className="header-event-infos">
          <p className="header-event-infos-date">NOV.<br />12</p>
          <br />
          <p className="header-event-infos-name">DataJob Paris 2019
          <br />
          <span>par DataJob</span><button>Suivre</button></p>
          <br />
          <p className="header-event-infos-price">Payant</p>
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


