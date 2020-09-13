import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ContactsFactory from './components/ContactsFactory';
import ContactPage from './components/ContactPage';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ContactsFactory />
      </Route>
      <Route exact path="/contacts">
        <ContactPage />
      </Route>
      <Route path="/contacts/:id">
        <ContactPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default Routes;
