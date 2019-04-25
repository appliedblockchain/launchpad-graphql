import React from 'react'
import Posts from './components/posts/posts'
import AuthRoute from './containers/auth-route/auth-route'
import LogIn from './components/log-in/log-in'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LogIn} />
      <AuthRoute exact path="/posts" component={Posts} />
      <Redirect to="/" />
    </Switch>
</Router>
)

export default App
