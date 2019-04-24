import React from 'react'
import { Mutation } from 'react-apollo'
import mutations from '../../../api/mutations'

const LikeButton = ({ postId }) => (  
  <Mutation mutation={mutations.posts.updateLikes({ postId })}>
    {(likePost) => (
      <button
        className="likeBtn"
        onClick={_ => {
          likePost()
        }}
      >
        <span role="img" aria-label="thumbsup">👍</span>
      </button>
    )}
  </Mutation> 
)


export default LikeButton
