import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from '../containers/Nav';
import App from './App';//eslint-disable-line
import Error from './Error';
import Details from './Details';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/details" component={Details} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
