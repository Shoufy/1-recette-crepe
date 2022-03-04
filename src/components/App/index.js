// == Import npm
import React from 'react';
import Header from '../Header';
import Etapes from '../Etapes';
import Ingredients from '../Ingredients';

// == Import
import 'src/styles/index.scss';
import data from 'src/data/recipe';

// == Composant
const App = () => (
  <div className="app">
   <Header 
   title={data.title}
   thumbnail={data.thumbnail}
   info={data.info}
   difficulty={data.difficulty}
    />
   <Ingredients 
   ingredients={data.ingredients}
   />
    <Etapes 
   instructions={data.instructions} 
   />
  </div>
);

// == Export
export default App;
