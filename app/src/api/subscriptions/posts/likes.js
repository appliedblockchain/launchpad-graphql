import gql from 'graphql-tag'

const postLikes = ({ postId }) => {
  console.log('POST ID', postId, postId.postId)
  return (
    gql`
    subscription {
      post(where: {id: {_eq: ${postId.postId}}}) {
        id
        likes
      }
    }
  `
  )
}

export default postLikes
