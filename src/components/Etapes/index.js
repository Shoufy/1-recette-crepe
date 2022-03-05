// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import 'src/styles/index.scss';

// == Composant
const Etapes = ({ etapes }) => (
  <ul>
    {
      etapes.map((instruction, index) => {
        return (
          <li key={'etapes-' + index} >
            {instruction}
          </li>
        );
      })
    }
  </ul>
);

Etapes.propTypes = {
  etapes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// == Export
export default Etapes;
