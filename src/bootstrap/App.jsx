import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import confiureStore from './Store'
import { RoutesNames } from '../constants'
import Home from '../containers/Home'
import './App.css'

const history = createBrowserHistory()

class App extends Component {
  render() {
    const store = confiureStore()

    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={RoutesNames.index} component={Home} />
          </Switch>
        </Router>
      </Provider>    
    );
  }
}

export default App;
