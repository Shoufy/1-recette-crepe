// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Header = ({ thumbnail, title, info, difficulty }) => {
  return (

    <header className="header">
      <img 
      src={thumbnail} 
      alt={title}
      className="header-image"
      />
      <div className="header-content">
        <h1 className="header-title"> {title} </h1>
        <p className="header-info"> {info} - {difficulty} </p>
      </div>
    </header>
  )
};

Header.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
}

// == Export
export default Header;
