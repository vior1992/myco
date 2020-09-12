import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Theme from './Theme';
import ContactsFactory from './components/ContactsFactory';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <ToastProvider>
      <Theme>
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
          </Switch>
        </Router>
      </Theme>
    </ToastProvider>
  );
}

export default App;
