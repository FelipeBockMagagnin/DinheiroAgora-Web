import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';
import Money from './pages/money';

export default function Routes() {
  return (
      <BrowserRouter>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/coin/:coinID' component={Money}/>
          </Switch>
      </BrowserRouter>
  )
}