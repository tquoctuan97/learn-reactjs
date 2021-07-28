import React from 'react';
import './App.css';

function App() {
  const name = 'Tuan';
  const age = 25;
  const isMale = true;
  const school = {
    name: 'Easy Front End'
  };
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      <header className="App-header">

        {/* Render Element String */}
        <h1>{name}, age is {age}</h1>

        {/* Render Boolen by using if */}

        {isMale ? 'Male' : 'Female'}

        {isMale ? <p>Male</p> : <p>Female</p>}

        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </div>
        )}

        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
            <p>Male 3</p>
          </React.Fragment>
        )}

        {!isMale && (
          <p>Female</p>
        )}

        {/* Render Element Object */}
        <p>Study at {school.name}</p>

        {/* Render Element Array */}
        <ul>
          {colorList.map((color, index) => (
            <li style={{ color }} key={color.index}>{color}</li>
          ))}
        </ul>

      </header>
    </div>
  );
}

export default App;
