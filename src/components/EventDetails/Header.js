import React from 'react';

import ShareLinks from 'src/components/Modal/ShareLinks';

const handleClickHeart = (event) => {
  if (event.target.src === 'https://img.icons8.com/nolan/24/000000/like.png') {
    event.target.src = 'https://img.icons8.com/emoji/24/000000/red-heart.png';
  }
  else {
    event.target.src = 'https://img.icons8.com/nolan/24/000000/like.png';
  }
};

const handleClickShare = () => {

};

const Header = () => (
  <div className="header-event">
    <div className="header-event-bg" />
    <div className="header-event-infos">
      <time className="header-event-infos-date">NOV.<br />12</time>
      <br />
      <p className="header-event-infos-name">
          DataJob Paris 2019
        <br />
        <span>par DataJob</span>
        <button type="button">Suivre</button>
      </p>
      <br />
      <p className="header-event-infos-price">Payant</p>
    </div>
    <div className="header-event-bottom">
      <div className="header-event-bottom-icons">
        <img onClick={handleClickShare} alt="share" src="https://img.icons8.com/nolan/24/000000/share.png" />
        <img onClick={handleClickHeart} alt="like" src="https://img.icons8.com/nolan/24/000000/like.png" />
      </div>
      <div className="header-event-bottom-status">
        <p>A venir</p>
      </div>
    </div>
  </div>
);

export default Header;
