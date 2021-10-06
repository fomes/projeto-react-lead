import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import App from '../App';
import MovieDetails from './MovieDetails';

export default function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/details" component={MovieDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
