import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ContactsListPage, ContactPage } from './pages';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ContactsListPage />
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
