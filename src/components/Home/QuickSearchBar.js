import React from 'react';

import PropTypes from 'prop-types';

const QuickSearchBar = ({
  searchBar,
  value,
  handleChange,
}) => {
  const searchBarClass = searchBar ? 'searchbar-visible' : 'searchbar';

  return (
    <form className={searchBarClass}>
      <input
        type="search"
        className="searchbar-input"
        placeholder="Rechercher..."
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
    </form>
  );
};

QuickSearchBar.propTypes = {
  searchBar: PropTypes.bool.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

QuickSearchBar.defaultProps = {
  value: '',
};

export default QuickSearchBar;
