import gql from 'graphql-tag'

const postLikes = ({ postId }) => {
  return gql`
    subscription {
      posts(where: {id: {_eq: ${postId.postId}}}) {
        id
        likes
      }
    }
  `
}

export default postLikes
