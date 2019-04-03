import React from 'react'
import { Subscription } from 'react-apollo'
import subscriptions from '../api/subscriptions'

const LikesCount = ({ postId }) => {
  return (<Subscription
    subscription={subscriptions.posts.update({ postId })}
  >
    {({ data }) => {
      if (!data) return ""
      const { posts } = data
      const { likes } = posts[0]
      return (
        <span className="likes">
          { likes } <span className="mini">thumbs-up</span>
        </span>
      )
    }}
  </Subscription>)
}

export default LikesCount
