// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Etapes = ({ etapes }) => (
  <div className="etapes">
    <h2 className="etapes-title"> Préparation : </h2>
    <ul >
      {
        etapes.map((instruction, index) => {
          return (
            <li key={'etapes-' + index} className="etape">
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
