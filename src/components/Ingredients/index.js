// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './styles.scss';

// == Composant
const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients">
      <div> Ingrédients :</div>  
      <ul>
        {
          // Je reçois des objets dans le tableau "ingrédients"
          // que je déstructure pour récupérer 
          // les propriétés qui m' intéressent
          ingredients.map(({ id, quantity, unit, name }) => (
            <li key={id}>
              <span>
                {quantity} {unit}
              </span>
              {name}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};


// == Export
export default Ingredients;
