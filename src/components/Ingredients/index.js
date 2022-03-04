// == Import npm
import React from 'react';

// == Import
import 'src/styles/index.scss';

// == Composant
const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients">
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


// == Export
export default Ingredients;
