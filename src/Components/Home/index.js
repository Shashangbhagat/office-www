import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from '../Dashboard'
import Parties from '../Parties'
import Login from '../Login'
import Signup from '../Signup'
import Header from '../Header'

class Home extends React.Component {

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route exact path='/parties'>
            <Parties />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route path='/'>
            404 Not found.
            </Route>
        </Switch>
      </Router>
    )
  }
}

export default Home