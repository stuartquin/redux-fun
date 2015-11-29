import React from 'react';
import ReacDOM from 'react-dom';
import Router, {Route} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Set} from 'immutable';
import thunk from 'redux-thunk';

import {EntriesContainer} from './components/Entries';
import {FriendsContainer} from './components/Friends';
import App from './components/App';
import reducer from './reducer';
import {setState} from './action_creators';


const createMiddlewareStore = applyMiddleware(thunk)(createStore);
const store = createMiddlewareStore(reducer);

store.dispatch(setState({
  user: {
    entries: [
      {id: 1, content: 'Goodbye Moon', user: 'Test'},
      {id: 2, content: 'Hello World', user: 'Stu'}
    ],
    friends: [
      {id: 1, name: "John Doe"},
      {id: 2, name: "Batman"}
    ],
    following: Set()
  }
}));

const routes = <Route component={App}>
  <Route path="/" component={EntriesContainer} />
  <Route path="/friends" component={FriendsContainer} />
</Route>

ReacDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
