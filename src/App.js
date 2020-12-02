import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { Route, Redirect } from "react-router-dom";
import ColorList from './ColorList';
import ColorPage from './ColorPage';
import ColorForm from './ColorForm.js';

function App() {
  const [colors, setColors] = useState(['red', 'green', 'blue'])

  const addColor = (color) => {
    setColors([...colors, color.color]);
  }

  return (
    <div className="App">
        <Route exact path="/colors">
        <ColorForm createColor={addColor}/>
          {colors.map(c => <ColorList name={String(c)}/>)}
        </Route>
        <Route exact path="/colors/:name">
          <ColorPage colors={colors}/>
        </Route>
        <Redirect to="/colors"/>
    </div>
  );
}

export default App;

      {/* Be sure to show a list of colors at /colors */}

      {/* Then there should be routing for a form that allows you to create a new color */}

      {/* This means the color pages themselves will have to be abstracted. I could actually just do a css thing. Or no, forget that. I would do inline styling with a prop for background color. Cool */}