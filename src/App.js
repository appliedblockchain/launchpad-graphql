import React from 'react'
import Posts from './components/posts.js'
import Header from './ui/Header.js'
import mutations from './api/mutations'
import subscriptions from './api/subscriptions'
import { Query, Mutation, Subscription } from 'react-apollo'

import './App.css'

const App = () => (
  <div>
    <Header />
    <Posts />
  </div>
)

export default App
