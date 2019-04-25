import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from "apollo-link-ws"
import { split } from 'apollo-link'

const HASURA_HOST = process.env.REACT_APP_HASURA_HOST
const HASURA_PORT = process.env.REACT_APP_HASURA_PORT

const HASURA_API = `http://${HASURA_HOST}:${HASURA_PORT}/v1alpha1/graphql`
const HASURA_API_WS = `ws://${HASURA_HOST}:${HASURA_PORT}/v1alpha1/graphql`

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token')

  return {
    headers: {
      ...headers,
      'Authorization': token ? `Bearer ${token}` : ''
    }
  }
})

const httpLink = createHttpLink({
  uri: HASURA_API,
});

const wsLink = new WebSocketLink(
  new SubscriptionClient(HASURA_API_WS, {
    reconnect: true
  })
);

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  authLink.concat(wsLink),
  authLink.concat(httpLink)
)

export default link