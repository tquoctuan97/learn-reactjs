import React from 'react';
import { Route } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';

function App() {
  return (
    <div className="App">
      Header
      <Route path="/todos" component={TodoFeature} />
      <Route path="/album" component={AlbumFeature} />
      Footer
    </div>
  );
}

export default App;
