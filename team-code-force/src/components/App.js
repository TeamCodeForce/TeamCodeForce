import React, { useState, useEffect } from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LogIn from './Login';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Home from './Home';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">profile</Link></li>
            <li><Link to="/dashboard">dashboard</Link></li>
            <li><Link to="/login">login</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={LogIn} />
          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;