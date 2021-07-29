import React from 'react';
import { Link, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

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

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/album" component={AlbumFeature} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
