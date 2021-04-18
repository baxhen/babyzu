import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import { history } from '../history';
import Home from '../pages/Home';
import ContactUs from '../pages/ContactUs';

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" exact component={ContactUs} />
      </Switch>
    </Router>
  );
};

export default App;
