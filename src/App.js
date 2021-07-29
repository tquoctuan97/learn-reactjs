import React from 'react';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      Header
      <p>
        <NavLink to="/todos">Todo</NavLink>
      </p>
      <p>
        <NavLink to="/album">Album</NavLink>
      </p>
      <Switch>
        <Redirect from="/home" to="/" />
        <Redirect from="/post-list/:postId" to="/posts/:postId" />

        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
