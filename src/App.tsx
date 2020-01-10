import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style/style.scss';
import Main from './pages/Main/index';
// import Home from './pages/Home';
import Card from './pages/Card/index';

const HomeComponent = React.lazy(() => import('./pages/Home/index'));

export default () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <React.Suspense fallback={<div>Loading....</div>}>
              <HomeComponent />
            </React.Suspense>
          </Route>
          <Route path="/card">
            <Card />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
