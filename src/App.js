import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import EnterPhone from './Pages/EnterPhone/EnterPhone';
import EnterOTP from './Pages/EnterOTP/EnterOTP';
import Profile from './Pages/Profile/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/enterphone" component={EnterPhone} />
        <Route exact path="/enterotp" component={EnterOTP} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
