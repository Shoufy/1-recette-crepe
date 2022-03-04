// == Import npm
import React from 'react';


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

// == Export
export default Header;
