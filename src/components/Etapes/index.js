// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Etapes = ({ etapes }) => (
  <div className="etape">
    Préparation :
    <ul >
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
  </div>
);

Etapes.propTypes = {
  etapes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// == Export
export default Etapes;
