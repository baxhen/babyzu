import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import { history } from '../history';
import Home from '../pages/Home';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
