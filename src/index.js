import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import './index.css'

import App from './App'


const cache = new InMemoryCache()

const GRAPHSQL_API_ROOT = 'http://134.209.89.56/v1alpha1/graphql'

const httpLink = new HttpLink({
  uri: GRAPHSQL_API_ROOT,
  headers: {
    // auth goes here
  },
})

const client = new ApolloClient({
  link: httpLink,
  cache,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
