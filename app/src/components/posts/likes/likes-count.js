import React from 'react'
import { Subscription } from 'react-apollo'
import subscriptions from '../../../api/subscriptions'

const LikesCount = ({ postId }) => {
  return (
    <Subscription
      subscription={subscriptions.posts.update({ postId })}
    >
      {({ data }) => {
        console.log('LIKES DATA', data)
        if (!data) return null
        
        const { posts } = data
        const { likes } = posts[0]
        console.log('POSTS', posts)
        console.log('LIKES*', likes)
        return (
          <span className="likes">
            { likes } <span className="mini">thumbs-up</span>
          </span>
        )
      }}
  </Subscription>
  )
}

export default LikesCount
