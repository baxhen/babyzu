import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import { history } from '../history';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact component={() => <div>Home</div>} />
      </Switch>
    </Router>
  );
};

export default App;
