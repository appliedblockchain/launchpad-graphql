import gql from 'graphql-tag'

const updateLikes = ({ postId }) => {
  console.log('POST ID UPDATE', postId, postId.postId)
  return (
    gql`
    mutation {
      update_post(where: {id: {_eq: ${postId.postId}}}, _inc: {likes: 1}) {
        affected_rows
      }
    }
  `
  )
}

export default updateLikes
