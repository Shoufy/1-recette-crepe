// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Header = ({thumbnail, title, info, difficulty}) => {
  return(
  
  <header className="header">
    <img src={thumbnail} alt={title} 
    className="header-image"
    />
    <p className="header-title"> {title} </p>
    <p className="header-info"> {info} - {difficulty} </p>
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
