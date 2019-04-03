import gql from 'graphql-tag'

const updateLikes = ({ postId }) => (
  gql`
    mutation {
      update_posts(where: {id: {_eq: ${postId.postId}}}, _inc: {likes: 1}) {
        affected_rows
      }
    }
  `
)

export default updateLikes
