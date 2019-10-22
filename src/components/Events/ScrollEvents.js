import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
// import { NavLink } from 'react-router-dom';
import Proptypes from 'prop-types';

import './ScrollEvents.scss';
import dataEvent from '../../data/dataEvent';

const list = dataEvent;

// One item component
// selected prop will be passed
const MenuItem = ({ location, date, content, title }) => {
  return (
    // <NavLink
    //   to="/event"
    // >
      <div className="menu-item">
        <div className="menu-item-top">
          <img className="menu-item-top-img" src="/src/assets/images/test_evt.png" alt="Image 1" />
          <h3 className="menu-item-top-title">{title}</h3>
          <p className="menu-item-top-content">{content}</p>
        </div>
        <div className="menu-item-bot">
          <p className="menu-item-bot-location">{location}</p>
          <p className="menu-item-bot-date">{date}</p>
        </div>
      </div>
    // </NavLink>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) =>
  list.map((el) => {
    const { title } = el;
    const { content } = el;
    const { location } = el;
    const { date } = el;
    return <MenuItem date={date} location={location} content={content} title={title} key={title}/>;
  });

/**
 * Fleche directionnel
 */
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}
    </div>
  );
};

const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

/**
 * Class du Scroll
 */
const selectDefault = '';

class ScrollEvents extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selectDefault);
  }

  state = {
    selectDefault
  };

  onSelect = (key) => {
    this.setState({ select: key });
  };

  render() {
    const { select } = this.state;
    // Create menu from items
    const menu = this.menuItems;
    return (
      <div className="scrollMenu">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          select={select}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}

MenuItem.propTypes = {
  location: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
  date: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
};

// == Export
export default ScrollEvents;
