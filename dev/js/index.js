import 'babel-polyfill';
import React from 'react';
import { render } from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import Test from './components/Test';
import People from './containers/People';
import Planets from './containers/Planets';
import Species from './containers/Species';
import Vehicles from './containers/Vehicles';
import Starships from './containers/Starships';
import Films from './containers/Films';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

require('../scss/style.scss');

const logger = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      	<IndexRoute component={Test}/>
        <Route path="/test" component={Test}/>
      	<Route path="/people" component={People}/>
      	<Route path="/planets" component={Planets}/>
      	<Route path="/species" component={Species}/>
      	<Route path="/vehicles" component={Vehicles}/>
      	<Route path="/starships" component={Starships}/>
      	<Route path="/films" component={Films}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
