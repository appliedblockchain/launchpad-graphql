import React from 'react'
import { Subscription } from 'react-apollo'
import subscriptions from '../../../api/subscriptions'

const LikesCount = ({ postId }) => (
  <Subscription
    subscription={subscriptions.posts.update({ postId })}
  >
    {({ data }) => {
      if (!data) return null
      
      const { posts } = data
      const { likes } = posts[0]

      return (
        <span className="likes">
          { likes } <span className="mini">thumbs-up</span>
        </span>
      )
    }}
</Subscription>
)

export default LikesCount
