import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about';
import Money from './pages/money';
import NavBar from './components/navBar';

export default function Routes() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/coin/:coinID' component={Money}/>
          </Switch>
      </BrowserRouter>
  )
}