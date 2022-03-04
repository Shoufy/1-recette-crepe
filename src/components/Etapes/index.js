// == Import npm
import React from 'react';

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

// == Export
export default Etapes;
