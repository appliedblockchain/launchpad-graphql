import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from "apollo-link-ws"
import { ApolloLink, split } from 'apollo-link'
import App from './App'
import './index.css'
import api from './utils/api'

const authLink = setContext((_, { headers }) => {
  console.log('HEADERS*', headers)
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')
  // const payload = await api.authenticate(token)
  // console.log('PAYLOAD', payload)
  // return the headers to the context so httpLink can read them
  console.log('TOKEN*', token)
  return {
    headers: {
      ...headers,
      'Authorization': token ? `Bearer ${token}` : "",
    }
  }
});

const GRAPHQL_API_ROOT = 'http://34.241.245.254/v1alpha1/graphql'
const GRAPHQL_API_ROOT_WS = 'ws://34.241.245.254/v1alpha1/graphql'

const httpLink = createHttpLink({
  uri: GRAPHQL_API_ROOT,
});

const wsClient = new SubscriptionClient(GRAPHQL_API_ROOT_WS, {
  reconnect: true,
  lazy: true,
  // connectionParams: () => {
  //   const token = localStorage.getItem('token')
  //   // const payload = await api.authenticate(token)
  //   console.log('TOKEN ***', token)
  //   return {
  //     headers: {
  //       'X-Hasura-Role': 'user',
  //       'X-Hasura-User-Id': 1,
  //       'Authorization': `Bearer ${token}`
  //     }
  //   }
  // }
})

const wsLink = new WebSocketLink(wsClient);

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  authLink.concat(wsLink),
  authLink.concat(httpLink)
)

const apolloClient = new ApolloClient({
    link, 
    cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
