import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  return (
    <div className="App">
      Header
      <p>
        <Link to="/todos">Todo</Link>
      </p>
      <p>
        <Link to="/album">Album</Link>
      </p>
      <p>
        <NavLink to="/todos">Todo</NavLink>
      </p>
      <p>
        <NavLink to="/album">Album</NavLink>
      </p>
      <Route path="/todos" component={TodoFeature} />
      <Route path="/album" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
