import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import './App.css';

const loggedin = false;

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old">Old</Link>
    <Link to="/new">New</Link>
    <Link to="/protected">Protected</Link>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/new" render={() => <h1>New</h1>} />
      <Route path="/old" render={() =>
        <Redirect to="/new" />} />
      <Route path="/protected" render={() =>
        loggedin
        ? <h1>Welcome to the protected page</h1>
        : <Redirect to="/new/Login" />} />
    </div>
  </Router>
);

export default App;