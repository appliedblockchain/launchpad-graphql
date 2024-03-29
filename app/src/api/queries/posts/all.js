import gql from 'graphql-tag'

const postsAll = gql`
  {
    post(order_by: {id: asc}) {
      id
      title
      description
      likes
      comments { text id }
    }
  }
`

export default postsAll
