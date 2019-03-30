import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import App from './App'
import './index.css'

// const GRAPHSQL_API_ROOT = 'http://134.209.89.56/v1alpha1/graphql'
const GRAPHSQL_API_ROOT_WS = 'ws://134.209.89.56/v1alpha1/graphql'

const wsClient = new SubscriptionClient(GRAPHSQL_API_ROOT_WS, {
  reconnect: true,
})

const apolloClient = new ApolloClient({
    link: wsClient,
    cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
