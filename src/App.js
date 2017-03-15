import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  StaticRouter,
  NativeRouter,
  Link,
  Route
} from 'react-router-dom';

import './App.css'

const LinkRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
  </div>
)

const forceRefresh = () => {
  console.log(new Date());
  return true;
}

const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinkRoutes />
  </BrowserRouter>
)

export default BrowserRouterApp;

{/*const HashRouterApp = () => (
  <HashRouter hashType="hashbang">
    <LinkRoutes />
  </HashRouter>
)

export default HashRouterApp;

const MemoryRouterApp = () => (
  <MemoryRouter
    initialEntries={['/', '/about']}
    initialIndex={1} >
    <LinkRoutes />
  </MemoryRouter>
)

export default MemoryRouterApp;

const StaticRouterApp = () => (
  <StaticRouter location="/about" context={{}}>
    <LinkRoutes />
  </StaticRouter>
)

export default StaticRouterApp;*/}