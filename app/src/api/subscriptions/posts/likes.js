import gql from 'graphql-tag'

const postLikes = ({ postId }) => (
    gql`
    subscription {
      post(where: {id: {_eq: ${postId.postId}}}) {
        id
        likes
      }
    }
  ` 
)

export default postLikes
