// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import 'src/styles/index.scss';

// == Composant
const Header = ({thumbnail, title, info, difficulty}) => {
  return(
  
  <header className="app">
    <img src={thumbnail} alt="crepe" />
    <p> {title} </p>
    <p> {info} - {difficulty} </p>
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
