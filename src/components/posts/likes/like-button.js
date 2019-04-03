import React from 'react'
import { Mutation } from 'react-apollo'
import mutations from '../../../api/mutations'

const LikeButton = ({ postId }) => {
  return (
    <Mutation mutation={mutations.posts.updateLikes({ postId })} >
      {(likePost, { data }) => (
        <button
          className="likeBtn"
          onClick={e => {
            likePost()
          }}
        >
          <span role="img" aria-label="thumbsup">👍</span>
        </button>
      )}
    </Mutation>
  )
}


export default LikeButton
